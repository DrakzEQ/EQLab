'use strict';

const env            = process.env.NODE_ENV || "development",
      express        = require("express"),
      app            = express(),
      exphbs         = require('express-handlebars'),
      logger         = require('morgan'),
      Sequelize      = require('sequelize'),
      auth_db        = require('./zauth/auth.js').auth_db,
      User           = require('./zauth/auth.js').User,
      passport       = require('passport'),
      JwtStrategy    = require('passport-jwt').Strategy,
      ExtractJwt     = require('passport-jwt').ExtractJwt,
      jwt            = require('jsonwebtoken'),
      // JwtCookie      = require('passport-jwt-cookiecombo'),
      // flash          = require('connect-flash'),
      // session        = require('express-session'),
      // SequelizeStore = require('connect-session-sequelize')(session.Store),
      // cookieParser   = require('cookie-parser'),
      path           = require('path'),
      // bodyParser     = require('body-parser'),
      // eqlabRoutes    = require('./routes/eqlab_router'),
      apiRoutes      = require('./routes'),
      authRoutes     = require('./zauth/auth_router').auth_router,
      config         = require(path.join(__dirname, 'config', 'appConfig.js'));
   
// Logger
app.use(logger('dev'));

// Cookie Parser
// app.use(cookieParser(config.secret));

// View Engine
app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.set('view cache', false);

// Serve Client
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
}); 

// Routes
app.use('/api', authRoutes);
app.use('/api', apiRoutes);

// Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(User.createStrategy());
// passport.use(new JwtStrategy({
//   secretOrKey: config.jwt.secret,
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//   issuer: config.jwt.issuer
// }, function(jwt_payload, next) {
//   User.findByUsername(jwt_payload.user.username, (err, user) => {
//     if (user) {
//       next(null, {
//         username: user.username,
//         status: user.status
//       });
//     } else {
//       next(null, false);
//     }
//   });
// }));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Sync Authentication Database
// auth_db.sync().then(() => { 
//   console.log("EQLab: Authentication Database Connection Successful");
// }).catch(err => {
//   console.log(err, "EQLab: Authentication Database Connection Failed");
// });

// Flash Messages
// app.use(flash());


// Catch 404 Errors
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Handle Errors
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', {
    title: err.status,
    errorstatus: err.status,
    errormessage: err.message
  });
});

module.exports = app;