/*jshint multistr:true */
function renderchpasswd(username) {
	return '<!DOCTYPE html>\n\
	<html>\n\
		<head>\n\
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n\
			<meta name="mobile-web-app-capable" content="yes">\n\
			<meta name="apple-mobile-web-app-capable" content="yes">\n\
			<meta http-equiv="Content-Type" content="text/html; charset=utf8"/>\n\
			<title>Set password</title>\n\
			<!-- css -->\n\
			<link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />\n\
			<!-- js -->\n\
			<script>\n\
			var formurl = "/_users/org.couchdb.user:'+username+'";\n\
			var user_name = "'+username+'";\n\
			</script>\n\
			<script src="/js/chpasswd.js"></script>\n\
		</head>\n\
		<body>\n\
		    <div class="splash">\n\
		      <div class="container">\n\
			  <div class="row">\n\
			    <div class="col-md-4 col-md-offset-4 login-box">\n\
			      <form id="loginform" role="form" class="text-left" action="" accept-charset=="UTF-8">\n\
				<div class="form-group">\n\
				  <label for="exampleInputPassword1">Password</label>\n\
				  <input id="newpassword" name="pw2" required type="password" class="form-control" id="exampleInputPassword1" placeholder="Put in your password" onchange="this.setCustomValidity(this.validity.patternMismatch ? \'You have to have at least 8 digit password\': \'\');if(this.checkValidity()){ document.getElementById(\'passwordcheck\').pattern = this.value;}" pattern="(?=^.{8,}$).*$">\n\
				  <label for="exampleInputPassword1">Confirm you password</label>\n\
				  <input id="passwordcheck" name="pw2" required type="password" class="form-control" id="exampleInputPassword1" placeholder="Put in your password again" onchange="this.setCustomValidity(this.validity.patternMismatch ? \'You have to have the same password\': \'\')">\n\
				</div>\n\
				<div class="text-right">\n\
				  <div class="btn btn-default" onclick="changeuser();">Change password</div>\n\
				</div>\n\
			      </form>\n\
			    </div>\n\
			  </div>\n\
		      </div>\n\
		    </div>\n\
		</body>\n\
	</html>';
}

exports.renderchpasswd = renderchpasswd;
