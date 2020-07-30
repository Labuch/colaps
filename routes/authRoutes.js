const passport = require('passport');


module.exports = (app) => {

<<<<<<< HEAD
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook',
=======
   app.get(
        '/auth/facebook',(req, res) => {
            passport.authenticate('facebook',
>>>>>>> 3ffd1d2ce4ae5431f6a7de447c46af16f8ef140d
            {
                scope: 'email'
            }
        )}
    );
    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook'),
        (req, res) => {
            res.redirect('/SampleLooper')
        }
    );
    app.get('/api/logout', (req, res) => {
        console.log(req);
        req.logout();
        res.redirect('/');
    });
    app.get(
        '/api/current_user', (req, res) => {
            res.send(req.user);
        }
    );

};
