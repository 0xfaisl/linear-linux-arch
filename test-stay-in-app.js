const assert = require('node:assert/strict');
const { isLinear } = require('./stay-in-app');

assert.equal(isLinear('/settings', 'https://linear.app'), true);
assert.equal(isLinear('https://api.linear.app/graphql'), true);
assert.equal(isLinear('https://linear.app.evil.example'), false);
assert.equal(isLinear('not a URL'), false);
