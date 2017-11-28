import React, { Component } from "react";
import View from "./View";
import axios from "axios";
import { CLIENT_URL } from "../constants.js";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayForm: true,
			displayResults: false,
			value: "",
			results: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			value: event.target.value
		});
	}

	onClick(event) {
		event.preventDefault();
		this.setState({
			displayForm: true,
			displayResults: false,
			value: ""
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.setState({
			displayForm: false,
			displayResults: true
		});

		axios.get(`${CLIENT_URL}${this.state.value}`).then(res => {
			console.log("res.data", res.data);
			this.setState({
				results: res.data
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.displayForm && (
					<div>
						<form onSubmit={this.onSubmit}>
							<input
								type="text"
								placeholder="Search"
								value={this.state.value}
								onChange={this.handleChange}
							/>
							<br />
							<input className="button" type="submit" value="Search" />
						</form>
					</div>
				)}

				{this.state.displayResults && (
					<div>
						<button onClick={this.onClick}>Search Again</button>
						<View dataSearch={this.state.results} />
					</div>
				)}
			</div>
		);
	}
}

export default Search;