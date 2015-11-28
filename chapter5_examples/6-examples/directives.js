exports.addToCart = function() {
  return {
    controller: 'AddToCartController',
    templateUrl: 'templates/add_to_cart.html'
  };
};

exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: 'templates/category_products.html'
  }
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: 'templates/category_tree.html'
  }
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: 'templates/checkout.html'
  };
};

exports.navigationBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: 'templates/nav_bar.html'
  };
};

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: 'templates/product_details.html'
  };
};

exports.searchBar = function() {
  return {
    controller: 'SearchBarController',
    templateUrl: 'templates/search_bar.html'
  };
};
