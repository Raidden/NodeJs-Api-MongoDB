const Product = require('../model/products');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.product_create = function (req, res, next) {
    console.log('create');
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('product updated');
    });
};

exports.product_delete = function (req, res, next) {
    Product.findByIdAndDelete(req.param.id, function (err, product) {
        if (err) return next(err);
        res.send('Product deleted');
    });
};

exports.product_all = function (req, res, next) {

};