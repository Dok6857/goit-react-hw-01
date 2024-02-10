import { FriendListItem } from "./FriendListItem";
import friends from './friends.json';

export const FriendList = () => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
        </li>
    ))}
    </ul>
  );
};

