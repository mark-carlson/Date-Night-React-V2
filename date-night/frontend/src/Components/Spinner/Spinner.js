import React from "react";
// import { findDOMNode } from "react-dom";
import $ from "jquery";
import "./Spinner.css";
import {Component} from "react-materialize"

// <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">

class Spinner extends React.Component{
    render(){
		//date activity variable
		var wheelDate = ""
		//set default degree (360*5)
		var degree = 1800;
		// number of clicks = 0
		var clicks = 0;
		$(document).ready(function(){
			// WHEEL SPIN FUNCTION
			$('#spin').click(function(){
				// add 1 every click
				clicks ++;
				// multiply the degree by number of clicks generate random number between 1 - 360, then add to the new degree
				var newDegree = degree*clicks;
				var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
				var totalDegree = newDegree+extraDegree;
				// let's make the spin btn to tilt every time the edge of the section hits the indicator
				$('#wheel .sec').each(function(){
					var t = $(this);
					var noY=0;
					var c = 0;
					var n = 700;
					var interval = setInterval(function () {
						c++;				
						if (c === n) { 
							clearInterval(interval);				
						}	
						var aoY = t.offset().top;
						if (extraDegree>270 && extraDegree<330) {
							wheelDate = 'zoo'
						}else if (extraDegree>30 && extraDegree<90) {
							wheelDate = 'archery'
						}else if (extraDegree>90 && extraDegree<150) {
							wheelDate = 'bar'
						}else if (extraDegree>150 && extraDegree<210) {
							wheelDate = 'concert'
						}else if (extraDegree>210 && extraDegree<270) {
							wheelDate = 'karaoke'
						}else {
							wheelDate = 'museum'
						}
						$("#txt").html(wheelDate);
						// 23.7 is the minumum offset number that each section can get, in a 30 angle degree. So, if the offset reaches 23.7, then we know that it has a 30 degree angle and therefore, exactly aligned with the spin 
						// if(aoY < 23.89){
						// 	console.log('<<<<<<<<');
						// 	$('#spin').addClass('spin');
						// 	setTimeout(function () { 
						// 		$('#spin').removeClass('spin');
						// 	}, 100);	
						// }
						// console.log(extraDegree);
					}, 10);
					$('#inner-wheel').css({
						'transform' : 'rotate(' + totalDegree + 'deg)'			
					});
					noY = t.offset().top;
				});
			});
		});
		return(
			<div className="Spinner">
				<div id="wrapper">
					<div id="wheel">
						<div id="inner-wheel">
							<div className="sec"><span className="fa"><i className="medium material-icons">pets</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">mic</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">music_note</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">local_bar</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">album</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">brush</i></span></div>
						</div>       
						<div id="spin">
							<div id="inner-spin"></div>
						</div>
						<div id="shine"></div>
					</div>
					<div><p id="txt"></p></div>
				</div>
			</div>
		)
	}
}


export default Spinner