
var colorBlue ="fill : rgb(31, 119, 180)";
var colorRed ="fill : rgb(255, 127, 14)";
var colorGreen ="fill : rgb(44, 160, 44)";

var colors = [colorGreen,colorRed,colorBlue];
var maxCircleSize = 12;
var minCircleSize = 4;
var maxTime = 2000;
var minTime = 200;
var noOfCircles = 200;

var cWidth = document.documentElement.clientWidth-8;
var cHeight = document.documentElement.clientHeight*.99-8;

var ox = cWidth/2;
var oy = cHeight/2;

document.addEventListener("DOMContentLoaded", function(event) {
//	console.log(ox + " " + oy);
	populate();
	gravity();
});

function populate(){

	var img = document.getElementById("img");
	var svgns = "http://www.w3.org/2000/svg";

	var svg = document.createElementNS(svgns,"svg");
	var origin = document.createElementNS(svgns,"circle");
	origin.setAttributeNS(null,"r",2);
	origin.setAttribute("cx",ox);
	origin.setAttribute("cy",oy);
	svg.appendChild(origin);

	for (var i = 0; i < noOfCircles; i++) {


		var circle = document.createElementNS(svgns,"circle");
		var cx = Math.random()*cWidth;
		var cy =  Math.random()*cHeight;
		circle.setAttributeNS(null,"r",minCircleSize + (Math.random()*maxCircleSize));
		circle.setAttribute("cx","0");
		circle.setAttribute("cy","0");
		circle.setAttributeNS(null,"style",colors[(i%3)]);
		circle.setAttributeNS(null,"class","c");

		var path = document.createElementNS(svgns,"path");
		
		path.setAttributeNS(null,"d","M"+cx+ " " +cy + " L" + ox + " "+oy);
		//reverse
		//path.setAttributeNS(null,"d","M"+ox+ " " +oy + " L" + cx + " "+cy);
		path.setAttributeNS(null,"id","p"+(i+1));
      	
    	svg.appendChild(path);
		svg.appendChild(circle);
	}
	img.appendChild(svg);
}


function gravity(){
	var r = (maxCircleSize-minCircleSize);
	var t = (maxTime-minTime);

	$(".c").each(function(index) {
		var dur = (r/$(this).attr("r"))*t;
	 	$(this).html('<animateMotion dur="'+dur+'ms" fill="freeze" repeatCount="indefinite"><mpath xlink:href="#p'+(index+1)+ '"></mpath></animateMotion>');
	});
	

}






