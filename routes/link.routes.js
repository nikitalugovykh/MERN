const { Router } = require('express');
const Link = require('./../models/Link');
const router = Router();

router.post ('/generate', async (req, res) => {
    
    try {

    } catch(e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }

});

router.get ('/', async (req, res) => {

    try {

    } catch(e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }

});

router.get ('/:id', async (req, res) => {

    try {

    } catch(e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова!'})
    }
    
});

module.exports = router;