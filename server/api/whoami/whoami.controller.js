'use strict';

// Parses a string and returns a json object
exports.parse = function(req, res) {
  console.log('ua', req.headers['user-agent']);

  let ipaddress = req.ip;
  let language = req.acceptsLanguages()[0];
  let software = req.headers['user-agent'];
  software = software.match(/\((.+?)\)/)[1];
  return res.json({ipaddress, language, software});
};
