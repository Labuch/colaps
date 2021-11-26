const  express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession  = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./models/Sequence');
require('./models/Sample');
require('./services/passport');


const app = express();


app.use(
    cookieSession({
        maxAge: 30 * 24 *60 * 60 *1000 ,
        keys: [keys.cookieKey],
    })
);
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/sequenceRoutes')(app);
require('./routes/samplesRoutes')(app);


    //express will serve up production assets
    //main.js and main.css
    app.use(express.static('client/build'));
    //express will serve up index.html file if it doe
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });



const PORT = process.env.PORT || 5000;
console.log(`listining on port ${PORT}`);
app.listen(PORT);
