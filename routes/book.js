const {index,show,create,update,destroy} = require('../controllers/book');

module.exports = router => {
  router.get("/book", index);
  router.get("/book/:id", show);
  router.post("/book", create);
  router.put("/book", update);
  router.delete("/book", destroy);
  return router;
  };