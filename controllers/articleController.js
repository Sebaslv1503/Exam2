const Article = require('../models/Article');

// Create
exports.createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update by custom ID
exports.updateArticleById = async (req, res) => {
  try {
    const updated = await Article.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Article not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete by custom ID
exports.deleteArticleById = async (req, res) => {
  try {
    const deleted = await Article.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Article not found' });
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
