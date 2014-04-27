var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// Set locals
	locals.section = 'quote';

	// Load the galleries by sortOrder
	view.query('quotes', keystone.list('Quote').model.find().sort('sortOrder'));

	// Render the view
	view.render('quotes');

}
