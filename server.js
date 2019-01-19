const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const User = require('./src/User');

// set up routes
const indexRouter = require("./routes/index");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

//configure MongoDB
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
let db = mongoose.connection;

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());

        server.use('/', indexRouter);
        server.use('/product', productRouter);
        server.use('/category', categoryRouter);

        server.post('/signIn', async (req, res) => {
            try {
                const {email, password} = req.body;
                const result = await User.signIn(email, password);
                res.json(result);
            } catch (e) {
                console.log('Error:', e);
                res.status(500).send('An error occurred on the server. Check server log for more info.');
            }
        });

        server.post('/getCurrentSignedInAccount', (req, res) => {
            try {
                User.getCurrentUser((err, user) => {
                    if (err) {
                        throw err;
                    } else {
                        res.json(user);
                    }
                });
            } catch (e) {
                console.log('Error:', e);
                res.status(500).send('An error occurred on the server. Check server log for more info.');
            }

        });
        server.post('/createAccount', async (req, res) => {
            try {
                const {email, password} = req.body;
                const result = await User.createUser(email, password);
                res.json(result);
            } catch (e) {
                console.log('Error:', e);
                res.status(500).send('An error occurred on the server. Check server log for more info.');
            }
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
