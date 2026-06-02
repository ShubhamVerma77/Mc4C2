import { Notification } from '@mantine/core';

function Notify({status}:{status:string}) {
  return (
    <Notification title="We notify you that">
{status}
    </Notification>
  );
}
export default Notify;