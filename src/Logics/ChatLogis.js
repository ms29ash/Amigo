export const getSenderName = (users, user) => {
  console.log(users);
  console.log(user);
  if (users[0]._id === user._id) {
    return users[1]?.name;
  } else {
    return users[0]?.name;
  }
};