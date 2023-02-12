import css from 'Components/FriendList/FriendList.module.css'
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

export default FriendList;