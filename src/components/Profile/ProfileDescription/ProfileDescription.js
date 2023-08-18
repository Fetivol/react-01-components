export const ProfileDescription = ({
  userInfo: { username, tag, location, avatar },
}) => {
  //   console.log(username, tag, location, avatar);
  return (
    <div>
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
