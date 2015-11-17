var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function(wagner) {
  var stripe =

  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function(Config) {
    return Stripe(Config.stripeKey);
    // return Stripe(process.env.STRIPE_API_KEY);
  });

  wagner.factory('fx', fx);

  wagner.factory('Config', function() {
    return JSON.parse(fs.readFileSync('./config.json').toString());
  });
};
