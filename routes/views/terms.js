var keystone = require('keystone'),
		Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var locals = res.locals,
		view = new keystone.View(req, res);

	// Set locals
	locals.section = 'terms';
	
	// Render the view
	view.render('terms');

}
