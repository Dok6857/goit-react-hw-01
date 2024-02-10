import { FriendListItem } from "./FriendListItem";
import friends from './friends.json';
import styles from './FriendList.module.css'

export const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.friendCard} key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
    ))}
    </ul>
  );
};

