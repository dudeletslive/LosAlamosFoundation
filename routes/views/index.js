var keystone = require('keystone'),
	Quote = keystone.list('Quote');

exports = module.exports = function(req, res) {

	var locals = res.locals,
		view = new keystone.View(req, res);

	// Set locals
	locals.section = 'home';

	view.query('quotes', keystone.list('Quote').model.findOne());
	
	// Render the view
	view.render('index');

}
