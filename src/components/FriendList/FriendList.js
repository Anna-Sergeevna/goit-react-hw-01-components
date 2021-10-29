import FriendListItem from 'components/FriendList/FriendListItem';
// import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          id={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
