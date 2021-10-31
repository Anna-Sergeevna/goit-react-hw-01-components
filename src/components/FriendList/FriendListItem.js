import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={s.item}>
      <span className={s.status}>{isOnline ? '💚' : '❤️'}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
