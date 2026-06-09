import { Anchor, Container, Group } from '@mantine/core';
import { Text } from '@mantine/core';
import classes from './Styles/Footer.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
   <img src="/ICon.png" alt="Mc4c2 Logo" style={{ height: 35 }} />
                 <Text fw={700} size="lg">Mc4c2</Text>
        </div>
     
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}