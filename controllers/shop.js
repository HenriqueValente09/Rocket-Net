exports.getProducts = (req, res, next) => {
    res.render('shop/product-list', {
        pageTitle: 'All Products',
        path: '/products'
    });
};

exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        pageTitle: 'Shop',
        path: '/'
    });

};
