import css from 'Components/FriendList/FriendList.module.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
    return (
        <ul className={css["friend-list"]}>
            {friends.map(({id, isOnline, avatar, name}) => {
                return (
                    <li key={id} className={css.item}>
                        <span className={isOnline ? css.online : css.offline}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={css.name}>{name}</p>
                  </li>  
                )
            })}
        </ul>
    )
}

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
}
export default FriendList;