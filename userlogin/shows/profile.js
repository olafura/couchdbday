function(doc, req){
	var headers = {"Content-Type": "text/html; charset=utf-8"};
	var body = require("lib/renderprofile").renderprofile(req.query.user);
	return {"headers": headers, "body": body};
}
