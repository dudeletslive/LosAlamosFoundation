// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv')().load();

// Require keystone
var keystone = require('keystone');

keystone.init({

	'name': 'The Daniel B. Dingman Scholarship for Peace and Justice',
	'brand': 'The Los Alamos Foundation',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,

	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '3A?,D}J~Rz~X{OU@KCdm-zaSO{3b.Ee9@e{ghPe^+S9prW*[9_M-EeeSm$&-a3EH'

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'enquiries': 'enquiries',
	'users': 'users'
});

keystone.start();
