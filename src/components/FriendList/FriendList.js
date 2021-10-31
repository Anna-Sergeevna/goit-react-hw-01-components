import FriendListItem from 'components/FriendList/FriendListItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          id={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
