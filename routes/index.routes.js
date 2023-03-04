const router = require("express").Router();
const Character = require('./../models/Character.model')

router.get('/', async function(req, res) {

  res.render('character');
});

router.get('/character', (req, res) => {
  const idOrName = req.query.idOrName;

  if (isNaN(idOrName)) {
    character = Character.findOne({ name: idOrName })
    .then((character) => {
      if (!character) {
        return res.status(404).send({ message: 'No character found with this id/name on our database.' });
      }
      res.render('characterFound', { character });
    })
    .catch((err) => {
      console.error(err);
      res.render('error', { message: 'Something went wrong' });
    });
  } else {
    character = Character.findOne({ internalId: idOrName })
    .then((character) => {
      if (!character) {
        return res.status(404).send({ message: 'No character found with this id/name on our database.' });
      }
      res.render('characterFound', { character });
    })
    .catch((err) => {
      console.error(err);
      res.render('error', { message: 'Something went wrong' });
    });
  }
    
});

module.exports = router;
