module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/logout') {
    res.status(200).json({ message: 'Successfuly logout' });
  } else {
    next()
  }
}