/*jshint multistr:true */
function renderprofile(username) {
	return '<!DOCTYPE html>\n\
	<html>\n\
		<head>\n\
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n\
			<meta name="mobile-web-app-capable" content="yes">\n\
			<meta name="apple-mobile-web-app-capable" content="yes">\n\
			<meta http-equiv="Content-Type" content="text/html; charset=utf8"/>\n\
			<title>Profile</title>\n\
			<!-- css -->\n\
			<link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />\n\
		</head>\n\
		<body>\n\
		    <div class="splash">\n\
		      <div class="container">\n\
			  <div class="row">\n\
			    <div class="col-md-4 col-md-offset-4 login-box">\n\
                                <h4>Welcome '+username+'</h4>\n\
			    </div>\n\
			  </div>\n\
		      </div>\n\
		    </div>\n\
		</body>\n\
	</html>';
}

exports.renderprofile = renderprofile;
