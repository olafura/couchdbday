function(doc, req){
	var headers = {"Content-Type": "text/html; charset=utf-8", "Set-Cookie": "AuthSession="+req.query.cookie+" ; Version=1; Path=/; HttpOnly"};
	var body = require("lib/renderchpasswd").renderchpasswd(req.query.user);
	return {"headers": headers, "body": body};
}
