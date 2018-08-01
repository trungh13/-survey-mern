const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must login first !' });
    }
    const charge = await stripe.charges.create({
      currency: 'EUR',
      amount: 500,
      description: '5€ for 5 credits',
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
