var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Quotes = new keystone.List('Quote', {
	map: { name: 'author' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Quotes.add({
	author: { type: String },
	quote: { type: Types.Textarea },
	quoteImage: { type: Types.CloudinaryImage, note: 'Only shows on quotes page, use a photo of the speaker if available.' },
});

Quotes.defaultColumns = 'author|20%, quote|40%';
Quotes.register();
