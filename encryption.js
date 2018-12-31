var assert = require('assert');

var crypto = require("crypto"),
    APPLICATION_KEY_CONSTANT = [ 7, 99, 3, 44, 52, 76, 79, 84, 63, 63, 95, 12, 10, 14, 15, 16, 64, 99, 38, 77, 68, 2, 3, 74],
    key = new Buffer.from(APPLICATION_KEY_CONSTANT, 'binary'),
    postBody = 'Robert|Jones|123 Main Street|null|Chicago|IL|60606|800-555-1234';


// Encryption
var cipher = crypto.createCipher('des-ede3-cbc', key);
var encrypted = cipher.update(postBody, 'utf8','base64');
encrypted+= cipher.final('base64');

// Decrypted
var decipher = crypto.createDecipher('des-ede3-cbc', key);
var decrypted = decipher.update(encrypted, 'base64','utf8');
decrypted += decipher.final('utf8');

console.log('Starting encryption process.... ');
assert.equal(postBody, decrypted);
console.log('Encrypted: ' ,encrypted);
console.log('Decrypted: ', decrypted);
