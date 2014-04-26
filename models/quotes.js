var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Quotes = new keystone.List('Quote', {
	map: { name: 'author' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Quotes.add({
	author: { type: String },
	quote: { type: Types.Textarea }
});

Quotes.defaultColumns = 'author|20%, quote|40%';
Quotes.register();
