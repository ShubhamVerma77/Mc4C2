import {
  Modal,
  TextInput,
  Select,
  Stack,
  Button,
  Group,
} from '@mantine/core';
import { useState } from 'react';

interface TechnologyModalProps {
  opened: boolean;
  onClose: () => void;
}

export function TechnologyModal({
  opened,
  onClose,
}: TechnologyModalProps) {
  const [technologyName, setTechnologyName] = useState('');
  const [status, setStatus] = useState<string | null>('Y');

  const handleSave = () => {
    console.log({
      technologyName,
      status,
    });

    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add Technology"
      centered
    >
      <Stack>
        <TextInput
          label="Technology Name"
          placeholder="Enter Technology Name"
          value={technologyName}
          onChange={(e) =>
            setTechnologyName(e.currentTarget.value)
          }
        />

        <Select
          label="Status"
          value={status}
          onChange={setStatus}
          data={[
            { value: 'Y', label: 'Active' },
            { value: 'N', label: 'Inactive' },
          ]}
        />

        <Group justify="flex-end">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSave}>
            Save
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}