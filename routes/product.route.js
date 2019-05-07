const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.post('/', product_controller.store);
router.get('/', product_controller.index);
router.get('/:id', product_controller.show);
router.put('/:id', product_controller.update);
router.delete('/:id', product_controller.delete);

module.exports = router;
