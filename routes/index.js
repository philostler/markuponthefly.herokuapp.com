/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render("index")
};

exports.render = function(request, response){
  var input = request.body.raw;
  var output = require("markdown").markdown.toHTML(input);
  response.end(output);
};