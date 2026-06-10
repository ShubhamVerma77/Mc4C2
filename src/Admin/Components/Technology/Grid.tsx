import { useState } from 'react';
import {
  Table,
  Button,
  Group,
  TextInput,
  Flex,
  Box,
  Title,
  Badge,
} from '@mantine/core';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import { TechnologyModal } from './TechnologyPopup';

export default function ManageTechnologies() {
  const [search, setSearch] = useState('');
  const [opened, setOpened] = useState(false);
  const technologies = [
    {
      techName: 'React',
      status: 'Y',
    },
    {
      techName: '.NET Core',
      status: 'Y',
    },
    {
      techName: 'Angular',
      status: 'N',
    },
    {
      techName: 'Node.js',
      status: 'Y',
    },
  ];

  const filteredTechnologies = technologies.filter(
    (tech) =>
      tech.techName.toLowerCase().includes(search.toLowerCase()) ||
      tech.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p="md">
  
  <Title order={2} ta="center" mb="md">
  Manage Technologies
</Title>

      {/* Search & Add Button */}
      <Flex justify="space-between" align="center" mb="md">
        <TextInput
          placeholder="Search Technology..."
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          w={300}
        />
 <Button
        leftSection={<IconPlus size={16} />}
        onClick={() => setOpened(true)}
      >
        Add Technology
      </Button>

      <TechnologyModal
        opened={opened}
        onClose={() => setOpened(false)}
      />
      </Flex>


      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Sr No</Table.Th>
            <Table.Th>Technology Name</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {filteredTechnologies.length > 0 ? (
            filteredTechnologies.map((tech, index) => (
              <Table.Tr key={index}>
                <Table.Td>{index + 1}</Table.Td>
                <Table.Td>{tech.techName}</Table.Td>
                <Table.Td>
                  <Badge
                    color={tech.status === 'Y' ? 'green' : 'red'}
                    variant="light"
                  >
                    {tech.status === 'Y'
                      ? 'Active'
                      : 'Inactive'}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Button size="xs">Edit</Button>
                    <Button size="xs" color="red">
                      Delete
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4} ta="center">
                No records found
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </Box>
  );
}