const passport = require('passport');


module.exports = (app) => {


   app.get(
        '/auth/facebook',(req, res) => {
            passport.authenticate('facebook',
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
