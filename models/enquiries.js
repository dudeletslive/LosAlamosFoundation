var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
	noedit: true
});

Enquiry.add({
	name: { type: Types.Name, required: true },
	gender: { type: Types.Select, options: [
		{ value: 'male', label: "Male" },
		{ value: 'female', label: "Female" },
		{ value: 'other', label: "Other" }
	] },
	/* Date of Birth */
	month: { type: Types.Select, required: true, options: [
		{ value: 'male', label: "January" },
		{ value: 'February', label: "February" },
		{ value: 'March', label: "March" },
		{ value: 'April', label: "April" },
		{ value: 'May', label: "May" },
		{ value: 'June', label: "June" },
		{ value: 'July', label: "July" },
		{ value: 'August', label: "August" },
		{ value: 'September', label: "September" },
		{ value: 'October', label: "October" },
		{ value: 'November', label: "November" },
		{ value: 'December', label: "December" },
	] },
	day: { type: Types.Select, required: true, options: [
		{ value: '1', label: "1" },
		{ value: '2', label: "2" },
		{ value: '3', label: "3" },
		{ value: '4', label: "4" },
		{ value: '5', label: "5" },
		{ value: '6', label: "6" },
		{ value: '7', label: "7" },
		{ value: '8', label: "8" },
		{ value: '9', label: "9" },
		{ value: '10', label: "10" },
		{ value: '11', label: "11" },
		{ value: '12', label: "12" },
		{ value: '13', label: "13" },
		{ value: '14', label: "14" },
		{ value: '15', label: "15" },
		{ value: '16', label: "16" },
		{ value: '17', label: "17" },
		{ value: '18', label: "18" },
		{ value: '19', label: "19" },
		{ value: '20', label: "20" },
		{ value: '20', label: "20" },
		{ value: '21', label: "21" },
		{ value: '22', label: "22" },
		{ value: '23', label: "23" },
		{ value: '24', label: "24" },
		{ value: '25', label: "25" },
		{ value: '26', label: "26" },
		{ value: '27', label: "27" },
		{ value: '28', label: "28" },
		{ value: '29', label: "29" },
		{ value: '30', label: "30" },
		{ value: '31', label: "31" },
	] },
	year: { type: Types.Select, required: true, options: [
		{ value: '1989', label: "1989" },
		{ value: '1990', label: "1990" },
		{ value: '1991', label: "1991" },
		{ value: '1992', label: "1992" },
		{ value: '1993', label: "1993" },
		{ value: '1994', label: "1994" },
		{ value: '1995', label: "1995" },
		{ value: '1996', label: "1996" },
		{ value: '1997', label: "1997" },
		{ value: '1998', label: "1998" },
		{ value: '1999', label: "1999" },
		{ value: '2000', label: "2000" },
	] },
	/* End DoB */
	email: { type: Types.Email, required: true },
	phone: { type: String },
	}, 'Address', {
		poBox: { type: String },
		physicalAddress: { type: String, required: true },
		city: { type: String, required: true },
		zipCode: { type: String, required: true },
		'state / Province / Region': { type: String, required: true },
		country: { type: String, required: true, default: 'United States' }
	}, 'Academics', {
	estimatedGPA: { type: Types.Select, required: true, options: [
		{ value: '2.0 - 2.3', label: "2.0 - 2.3" },
		{ value: '2.4 - 2.6', label: "2.4 - 2.6" },
		{ value: '2.7 - 2.9', label: "2.7 - 2.9" },
		{ value: '3.0 - 3.3', label: "3.0 - 3.3" },
		{ value: '3.4 - 3.7', label: "3.4 - 3.7" },
		{ value: '3.8 - 4.0', label: "3.8 - 4.0" },
		{ value: '4.0 +', label: "4.0 +" },
	] },
	apCourses: { type: Types.Select, required: true, options: [
			{ value: 'Yes', label: "Yes" },
			{ value: 'No', label: "No" }
		]
	},
	extraCurricularActivities: { type: Types.Markdown, required: true },
	}, 'Short Response', {
	expandedQuestion: { type: Types.Select, required: true, options: [
			{ value: 'Do you have a philosophical or spiritual view that guides your outlook and actions?', label: "Do you have a philosophical or spiritual view that guides your outlook and actions?" },
			{ value: 'What have you done as a student to serve these causes?', label: "What have you done as a student to serve these causes?" },
			{ value: 'What church or club activities have you participated in that serve these causes?', label: "What church or club activities have you participated in that serve these causes?" }
		]
	},
	expandedQuestionResponse: { type: Types.Markdown, required: true },
	expandedQuestionTwo: { type: Types.Select, required: true, options: [
			{ value: 'What responsibilities do we as citizens have to one another?', label: "What responsibilities do we as citizens have to one another?" },
			{ value: 'Do our civic duties differ from our moral obligations?', label: "Do our civic duties differ from our moral obligations?" },
			{ value: 'What do you think the biggest challenges are to a just society?', label: "What do you think the biggest challenges are to a just society?" },
			{ value: 'What are the biggest challenges to peace?', label: "What are the biggest challenges to peace?" }
		]
	},
	expandedQuestionTwoResponse: { type: Types.Markdown, required: true },
	}, 'Meta', {
	applicationSubmitted: { type: Date, default: Date.now }
});

/*
** VIRTUALS
*/
Enquiry.schema.virtual('address.full').get(function() {
	return this.poBox;
});

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
