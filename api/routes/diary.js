const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/diaryDetail');
  const passport = require('passport');
  
  module.exports = router => {
    
    router.get('/diary', index);
  
    
    router.get('/diary/:id', show);
  
    
    router.post('/diary', passport.authenticate('jwt', { session: false }), create);
  
    
    router.post('/diary/update', passport.authenticate('jwt', { session: false }), update);
  
    
    router.post('/diary/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };