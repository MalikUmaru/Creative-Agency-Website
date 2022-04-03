var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
	
	var currentScrollpos = window.pageYOffset;
	if (prevScrollpos > currentScrollpos) {
		document.getElementById("nav-bar").style.top = "0px";
	} else {
		document.getElementById("nav-bar").style.top = "-70px";
		}
	prevScrollpos = currentScrollpos;
	}

	