const express = require('express');
const router = express.Router();
const compactDiscController = require('../controllers/compactDiscController');

// DELETE /api/compact-discs/:serialNumber
router.delete('/:serialNumber', compactDiscController.deleteCompactDisc);

module.exports = router;