import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import classes from './Styles/Card.module.css';

const data = [
    {
        "img":"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
        "Name":"Shubham Verma",
        "Role":"Software Engineer",
        "Email":"Shubham@gmail.com",
        "Phone":"7807155741"
    }
]


    export function Card() {
  const cards = data.map((item) => (
    <Group wrap="nowrap" key={item.Email}>
      <Avatar
        className={classes.avatar}
        src={item.img}
        size={94}
        radius="md"
        alt={item.Name}
      />
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          {item.Role}
        </Text>

        <Text fz="lg" fw={500} className={classes.name}>
          {item.Name}
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconAt stroke={1.5} size={16} className={classes.icon} />
          <Text fz="xs" c="dimmed">
            {item.Email}
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
          <Text fz="xs" c="dimmed">
            {item.Phone}
          </Text>
        </Group>
      </div>
    </Group>
  ));

  return (
    <div>

        {cards}
    </div>
  );
}