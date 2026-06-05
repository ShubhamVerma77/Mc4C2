import { Notification } from '@mantine/core';
import type { NotificationProps } from '../Types/User-Defined-Types';

function Notify(props: NotificationProps) {
    if (props.disabled) return null;
  return (
    <Notification title="We notify you that">
      {props.status}
    </Notification>
  );
}
  
export default Notify;