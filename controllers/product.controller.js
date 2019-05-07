const Product = require('../models/product.model');
var count = 1;
//Simple version, without validation or sanitation
exports.store = (request, response) => {
    console.log(count);
    let product = new Product({
        name: request.body.name,
        price: request.body.price,
    });

    product.save((error) => {
        if (error) {
            response.send(error.toString());
        }
        response.send('Product created');
    })
};

exports.index = (request, response) => {
    Product.find({}, (error, products) => {
        if (error) {
            response.send(error.toString());
        }

        response.send(products);
    });
};

exports.show = (request, response) => {
    Product.findById(request.params.id, (error, product) => {
        if (error) {
            throw error;
        }
        response.send(product);
    });
};

exports.update = (request, response) => {
    Product.findByIdAndUpdate(request.params.id, {$set: request.body }, (error, product) => {
        if (error) {
            response.send(error.toString());
        }
        response.send(product);
    });
};

exports.delete = (request, response) => {
    Product.findOneAndDelete(request.params.id, (error) => {
        if (error) {
            response.send(error.toString());
        }
        response.send('Product deleted');
    })
};