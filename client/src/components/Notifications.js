import styled from "styled-components";
const Notifications = () => {
  return (
    <Notifs>
      <NotifsHeader>Notifications</NotifsHeader>
    </Notifs>
  );
};

export default Notifications;

// styling Home
const Notifs = styled.div`
  flex: 0.5;
  border-right: 1px solid var(--twitter-background);
`;
const NotifsHeader = styled.div`
  border: 1px solid var(--twitter-background);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
`;
