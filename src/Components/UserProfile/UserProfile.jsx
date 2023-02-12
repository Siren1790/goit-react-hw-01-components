import css from 'Components/UserProfile/UserProfile.module.css';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  const {
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={user.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{user.username}</p>
        <p className={css.tag}>{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  }),
};

export default UserProfile;
