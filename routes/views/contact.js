var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// Set locals
	locals.section = 'contact';
	locals.gender = Enquiry.fields.gender.ops;
	locals.estimatedGPA = Enquiry.fields.estimatedGPA.ops;
	locals.apCourses = Enquiry.fields.apCourses.ops;
	/* Date of Birth */
		locals.month = Enquiry.fields.month.ops;
		locals.day = Enquiry.fields.day.ops;
		locals.year = Enquiry.fields.year.ops;
	/* End DoB */
	locals.extraCurrics = Enquiry.fields.extraCurricularActivities;
	locals.expandedQuestion = Enquiry.fields.expandedQuestion.ops;
	locals.expandedQuestionTwo = Enquiry.fields.expandedQuestionTwo.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'contact' }, function(next) {

		var application = new Enquiry.model(),
			updater = application.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, gender, month, year, day, email, phone, poBox, physicalAddress, zipCode, city, state / Province / Region, country, estimatedGPA, apCourses, extraCurricularActivities, expandedQuestion, expandedQuestionResponse, expandedQuestionTwo, expandedQuestionTwoResponse',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});

	});

	view.render('contact');

}
