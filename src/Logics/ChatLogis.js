export const getSenderName = (users, user) => {
  if (users) {
    if (users[0]?._id === user?._id) {
      return users[1]?.name;
    } else {
      return users[0]?.name;
    }
  }
};
