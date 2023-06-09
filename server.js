const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./util/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // expires after 1 day
    maxAge: 24 * 60 * 60 * 1000, 
  }, 
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({helpers});

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
