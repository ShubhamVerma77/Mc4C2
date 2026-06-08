import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMoon, IconSearch, IconSun, IconUser } from '@tabler/icons-react';
import { ActionIcon, Autocomplete, Burger, Button, Divider, Drawer, Group, ScrollArea, useComputedColorScheme, useMantineColorScheme, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Styles/Navbar.module.css';
import MarqueeComponenet from './Marquee';
import {
  IconChevronRight,
  IconDots,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import {  Avatar, Menu, useMantineTheme } from '@mantine/core';
import cx from 'clsx';
const links = [
  { link: '/Main/Home', label: 'Dashboard' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Features' },
  { link: '/Main/About', label: 'Community' },
];

export function Navbar() {
    const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    setUsername(sessionStorage.getItem('Data'));
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  return (
    
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
          <MantineLogo size={28} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="lg"
        radius="md"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
        </Group>
        <Group visibleFrom="sm">
          {username ? (
            <Group gap="xs">
              <IconUser size={22} stroke={1.5} />
              <Text size="sm" fw={500}>{username} !</Text>
            </Group>
          ) : (
            <>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </>
          )}
      
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon variant="default" aria-label="User settings">
            <IconDots size={16} stroke={1.5} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight size={16} stroke={1.5} />}>
            <Group>
              <Avatar
                radius="xl"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                alt="Nancy Eggshacker"
              />

              <div>
                <Text fw={500}>{username}</Text>
                <Text size="xs" c="dimmed">
                  neggshaker@mantine.dev
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item leftSection={<IconHeart size={16} stroke={1.5} color={theme.colors.red[6]} />}>
            Liked posts
          </Menu.Item>
          <Menu.Item
            leftSection={<IconStar size={16} stroke={1.5} color={theme.colors.yellow[6]} />}
          >
            Saved posts
          </Menu.Item>
          <Menu.Item
            leftSection={<IconMessage size={16} stroke={1.5} color={theme.colors.blue[6]} />}
          >
            Your comments
          </Menu.Item>

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
            Change account
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />}>Logout</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<IconPlayerPause size={16} stroke={1.5} />}>
            Pause subscription
          </Menu.Item>
          <Menu.Item color="red" leftSection={<IconTrash size={16} stroke={1.5} />}>
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
      </div>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          <Autocomplete
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            mx="md"
            mb="sm"
          />
          {items}
        </ScrollArea>
      </Drawer>
    <MarqueeComponenet></MarqueeComponenet>

    </header>

  );
}