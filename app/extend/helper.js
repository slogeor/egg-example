'use strict';

const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();


module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string) || 0;
  },
};
