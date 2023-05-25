const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./homeroutes'); // need this?
const homeRoutes = require('./homeroutes');
const dashboardRoutes = require('./dashboardroutes')

router.use('/api', apiRoutes);
router.use(loginRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
