//filter requests
function reqFilter(req, user) {
  return req?.recipient._id === user._id;
}

export default reqFilter;
