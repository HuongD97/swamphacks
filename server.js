const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//configure MongoDB
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
let db = mongoose.connection;

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());
        
        // set up routes
        let indexRouter = require("./routes/index");
        let productRouter = require("./routes/product");
        let categoryRouter = require("./routes/category");
        let orderRouter = require("./routes/order");

        server.use('/', indexRouter);
        server.use('/product', productRouter);
        server.use('/category', categoryRouter);
        server.use('/order', orderRouter);

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