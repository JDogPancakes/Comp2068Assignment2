const {index,show,create,update,destroy} = require('../controllers/library');

module.exports = router => {
  router.get("/library", index);
  router.get("/library/:id", show);
  router.post("/library", create);
  router.put("/library", update);
  router.delete("/library", destroy);
  return router; 
  };