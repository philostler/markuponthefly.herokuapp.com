/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render("index")
};

exports.render = function(request, response){
  var markdown = require("markdown");
  var body = markdown.markdown.toHTML(request.body.raw);
  response.end(body);
};