const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth.routes.js');

const app = express();

app.use(express.json({ extended:true }))

app.use('/api/auth', authRoute);

const PORT = config.get('port') ?? 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}

start()
