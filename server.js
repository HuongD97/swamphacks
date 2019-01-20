const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

// set up routes
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");
const accountRouter = require('./routes/account');
const providerRouter = require('./routes/provider');
const requesterRouter = require('./routes/requester');


//configure MongoDB
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
let db = mongoose.connection;

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());

        server.use('/product', productRouter);
        server.use('/category', categoryRouter);
        server.use('/account', accountRouter);
        server.use('/provider', providerRouter);
        server.use('/requester', requesterRouter);

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
