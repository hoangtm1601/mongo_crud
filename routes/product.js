const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');

router.post('/', ProductController.store);
router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
