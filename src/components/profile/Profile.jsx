import styles from './Profile.module.css'

export function Profile({
  userData: { username, tag, location, avatar, stats },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="300px" height="300px" />
        <p className={styles.username}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.statList}>
        <li className={styles.listItem}>
          <span>Followers</span>
          <span className={styles.stats}>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span>Views</span>
          <span className={styles.stats}>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span>Likes</span>
          <span className={styles.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
