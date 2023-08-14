var express = require('express');
var router = express.Router();

var detailsController=require('../controllers/detailsController');
//var de=require('../controllers/detailsController');

/* GET users listing. */
/**router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.render('details',{title:'SION details',details:detailsController.details_list});
});**/
router.get('/',detailsController.details_list);

router.get('/cool',function(req,res,next){
  res.send('you are so cool.');
});
module.exports = router;
