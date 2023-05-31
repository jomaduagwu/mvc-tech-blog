const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../util/auth');

// sign up
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.status(200).json({message: `Account created for ${userData.username}`});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
      where: { email: req.body.username } 
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: `User id ${req.params.id} is not valid, please try again.`});
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
router.post('/logout', withAuth, async (req, res) => {
  try {
  // if (req.session.loggedIn) {
     req.session.destroy();
      res.status(204).end();
  // } else {
  //   res.status(404).end();
  // }
} catch (err) {
  res.status(400).end();
}
});

module.exports = router;
