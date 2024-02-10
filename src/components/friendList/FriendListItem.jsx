import styles from "./FriendListItem.module.css";

export const FriendListItem = ( { avatar, name, isOnline } ) => {
  return (
    <>
      <img src={avatar} alt="Avatar" width="100" />
      <p>{name}</p>
      <p className={isOnline ? styles.online : styles.offline}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
};
