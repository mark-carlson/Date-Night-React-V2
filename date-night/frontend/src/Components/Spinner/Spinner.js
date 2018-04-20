import React, { Component } from "react";
import "./Spinner.css";

class Spinner extends Component {

	constructor(props) {
		super(props);
		this.state = {
			wheelDate: "museum",
			degree: 1800,
			click: 1,
			totalDegree: 0
		}
	}

	spinAction = () => {
		const click = this.state.click + 1;
		let wheelDate = '';

		const newDegree = this.state.degree * this.state.click;
		const extraDegree = Math.floor(Math.random() * 360) + 1;
		const totalDegree = newDegree + extraDegree;

		switch (true) {
			case extraDegree >= 270 && extraDegree < 330:
				wheelDate = 'zoo';
				break;
			case extraDegree >= 30 && extraDegree < 90:
				wheelDate = 'archery';
				break;
			case extraDegree >= 90 && extraDegree < 150:
				wheelDate = 'bar';
				break;
			case extraDegree >= 150 && extraDegree < 210:
				wheelDate = 'concert';
				break;
			case extraDegree >= 210 && extraDegree < 270:
				wheelDate = 'karaoke';
				break;
			default:
				wheelDate = 'museum';
		}

		this.setState({
			click,
			totalDegree,
			wheelDate
		});
		this.props.setWheelDate(wheelDate);
	}

	render() {
		return (
			<div className="Spinner">
				<div id="wrapper">
					<div id="wheel">
						<div id="inner-wheel" style={{ 'transform': `rotate(${this.state.totalDegree}deg)` }}>
							<div className="sec"><span className="fa"><i className="medium material-icons">pets</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">mic</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">music_note</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">local_bar</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">album</i></span></div>
							<div className="sec"><span className="fa"><i className="medium material-icons">brush</i></span></div>
						</div>
						<div id="spin" onClick={this.spinAction}>
							<div id="inner-spin"></div>
						</div>
						<div id="shine"></div>
					</div>
					<div><p id="txt">{this.state.wheelDate}</p></div>
				</div>
			</div>
		)
	}
}


export default Spinner;