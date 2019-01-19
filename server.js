const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.use(bodyParser.json());
        
        const item1 = {
            id: 1,
            name: 'Banana',
            quantity: 5
        };
        const item2 = {
            id: 2,
            name: 'Tomato',
            quantity: 5
        };

        const allItems = [item1, item2];

        server.post('/getItem', (req, res) => {
            const { id } = req.body;
            const result = allItems.find((item) => {
                return item.id === id;
            });
            res.json(result);
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
