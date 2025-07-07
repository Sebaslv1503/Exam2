const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// CRUD routes
router.post('/articles', articleController.createArticle);
router.get('/articles', articleController.getAllArticles);
router.put('/articles/:id', articleController.updateArticleById);
router.delete('/articles/:id', articleController.deleteArticleById);

module.exports = router;
