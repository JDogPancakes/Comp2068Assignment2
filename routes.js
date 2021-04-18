module.exports = router => {
  require('./routes/book')(router);
  require('./routes/library')(router);
  return router;
};