//filter requests
function reqFilter(req, user) {
  return req?.recipient._id === user._id;
}

export const searchFilter = (chats, user) =>
  !chats.some((chat) =>
    chat.users.some((chatUser) => chatUser._id === user._id)
  );

export const checkStatus = (chats, reqs, user) => {
  for (const req of reqs) {
    if (req.recipient._id === user._id) {
      return "pending";
    } else if (req.requester._id === user._id) {
      return "request";
    }
    return "none";
  }
};

export default reqFilter;
