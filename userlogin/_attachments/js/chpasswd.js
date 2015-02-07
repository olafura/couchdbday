function login() {
        var ajaxObject;

        if (window.XMLHttpRequest) {
                var ajaxObject = new XMLHttpRequest();

                ajaxObject.open("POST","/_session",true);
		ajaxObject.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                ajaxObject.send("name="+userdata.name+"&password="+userdata.password);

                ajaxObject.onreadystatechange = function() {
                        if (ajaxObject.readyState == 4 && ajaxObject.status == 200) {
				window.location = "/profile/"+userdata.name;
                        }
                }
        }
}

function getuser() {
        var ajaxObject;

        if (window.XMLHttpRequest) {
                var ajaxObject = new XMLHttpRequest();

                ajaxObject.open("GET", window.formurl,true);
                ajaxObject.send();

                ajaxObject.onreadystatechange = function() {
                        if (ajaxObject.readyState == 4 && ajaxObject.status == 200) {
                                window.userdata = JSON.parse(ajaxObject.responseText);
                        } else if(ajaxObject.status == 404) {
				//window.location = "/";
			}
                }
        }
}
getuser();

function changeuser() {
	if(document.getElementById("newpassword").checkValidity() && document.getElementById("passwordcheck").checkValidity()) {
		window.userdata.password = document.getElementById("newpassword").value;
		var ajaxObject;

		if (window.XMLHttpRequest) {
			var ajaxObject = new XMLHttpRequest();

			ajaxObject.open("PUT", window.formurl, true);
			ajaxObject.setRequestHeader('Content-Type', 'application/json')
			ajaxObject.send(JSON.stringify(window.userdata));

			ajaxObject.onreadystatechange = function() {
				if (ajaxObject.readyState == 4 && ajaxObject.status == 201) {
					login();
				}
			}
		}
	} else {
		if(!document.getElementById("newpassword").checkValidity()) {
			document.getElementById("newpassword").reportValidity();
		} else {
			document.getElementById("passwordcheck").reportValidity();
		}
	}
}
