import { Marquee, Text, Group, ThemeIcon } from "@mantine/core";
import { IconSparkles, IconRocket, IconHeart } from "@tabler/icons-react";

function MarqueeComponent({ message }: { message: string }) {
  return (
    <Marquee
    >
      <Group gap="xl" px="md">
        <ThemeIcon color="blue" variant="light" radius="xl">
          <IconSparkles size={18} />
        </ThemeIcon>

        <Text fw={700} size="lg" c="blue">
          Welcome {message} 🎉 
          to our amazing application

        </Text>

        <ThemeIcon color="green" variant="light" radius="xl">
          <IconRocket size={18} />
        </ThemeIcon>

        <Text
          size="md"
          fw={700}
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Next Generation Experience
        </Text>

        <ThemeIcon color="red" variant="light" radius="xl">
          <IconHeart size={18} />
        </ThemeIcon>

        <Text fw={600}>
          Have a productive and wonderful day ahead! ✨
        </Text>
      </Group>
    </Marquee>
  );
}

export default MarqueeComponent;