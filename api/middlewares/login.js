module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    if (req.body.login === 'admin' && req.body.password === 'kitten') {
      res.status(200).json({ token: 'qsdfghjklm' });
    } else {
      res.status(400).json({ error:'Inalid user credential' })
    }
  } else {
    next()
  }
}