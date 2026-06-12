import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconMoon, IconSearch, IconSun, IconUser, IconChevronDown } from '@tabler/icons-react';
import { ActionIcon, Autocomplete, Burger, Button, Center, Divider, Drawer, Group, ScrollArea, useComputedColorScheme, useMantineColorScheme, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Styles/Navbar.module.css';

import {
  IconChevronRight,
  IconDots,

  IconLogout,

  IconSettings,

  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import {  Avatar, Menu } from '@mantine/core';
import cx from 'clsx';
import Swal from 'sweetalert2';

const links = [
  { link: '/Main/Home', label: 'Dashboard' },
  {
    link: '#1',
    label: 'Master',
    links: [
      { link: '/docs', label: 'Manage Team' },
      // { link: '/resources', label: 'User' },
      { link: '/Main/Technology', label: 'Manage Technology' },
    
    ],
  },
 {
    link: '#2',
    label: 'Projects',
    links: [
      { link: '/docs', label: 'Add Projects' },
      { link: '/resources', label: 'View Projects' },

    
    ],
  },
 {
    link: '#3',
    label: 'Tasks',
    links: [
      { link: '/docs', label: 'Add Tasks' },
      { link: '/resources', label: 'View Tasks' }

    
    ],
  },
  { link: '/Main/About', label: 'About' },
];

export function Navbar() {
const Nevigate = useNavigate();

  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [username, setUsername] = useState<string | null>(null);

  function Logout(){
    sessionStorage.clear();
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
      theme: 'auto',

  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Logout !"
}).then((result) => {
  if (result.isConfirmed){
Swal.fire({
    title: "Logout!",
    text: "Logout Successfully",
    icon: "success",
      theme: 'dark'

  }
  
);
    Nevigate("/", { replace: true });
  } 

});

  }

  useEffect(() => {
    setUsername(sessionStorage.getItem('Data'));
  }, []);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item 
        key={item.label} 
        component={Link} 
        to={item.link}
      >
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              to={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span style={{ marginRight: '5px' }}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

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
          <Group gap="xs">
            <img src="/ICon.png" alt="Mc4c2 Logo" style={{ height: 35 }} />
            <Text fw={700} size="lg">Mc4c2</Text>
          </Group>
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

          

          <Menu.Label>Settings</Menu.Label>
          <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>
            Account settings
          </Menu.Item>
          <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>
            Change account
          </Menu.Item>
          <Menu.Item leftSection={<IconLogout size={16} stroke={1.5} />} onClick={()=>Logout()}>Logout</Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
      
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


    </header>

  );
}