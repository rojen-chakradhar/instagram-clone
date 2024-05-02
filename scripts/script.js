var logic = 0;
var logo = document.querySelector("#logo");
var mode = document.querySelector("#mode");
var dark = document.querySelector("#dark");
var light = document.querySelector("#light");
var body = document.querySelector("body");
var lside = document.querySelector("#l-aside");
var usrnme = document.querySelector(".username");
var post = document.querySelector(".post");

mode.addEventListener("click", function () {
	if (logic == 0) {
		dark.style.display = "none";
		light.style.display = "block";
		body.style.backgroundColor = "#121212";
		body.style.color = "#f1f1f1";
		mode.style.backgroundColor = "#f1f1f1";
		mode.style.color = "#fdb831";
		mode.style.boxShadow = "0 0 10px #fdb831, 0 0 10px #fdb831";
		post.style.borderBottom = "1px solid #f1f1f1";
		lside.style.outline = "1px solid #fff";
        logo.classList.add("invert-image");
		logic = 1;
	} else {
        dark.style.display = "block";
		light.style.display = "none";
		body.style.backgroundColor = "#fff";
		body.style.color = "#121212";
		lside.style.outline = "1px solid #000";
		mode.style.backgroundColor = "#222";
		mode.style.color = "#fff";
		mode.style.boxShadow = "0 0 10px #000, 0 0 10px #000";
		post.style.borderBottom = "1px solid #121212";
        logo.classList.remove("invert-image");
		logic = 0;
    }
});