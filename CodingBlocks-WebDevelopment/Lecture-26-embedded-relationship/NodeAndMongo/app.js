const path = require('path');
const express = require('express');
const { mongoConnect } = require('./database/database');
const app = express();
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Start server only after we've made a connection to the mondoDB server on our local machine.
mongoConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
