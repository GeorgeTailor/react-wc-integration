import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
				{
					firstName: 'firstName',
					lastName: 'lastName'
				}
			],
			name: undefined,
			date: undefined,
			nameValid: true,
			dateValid: true
		};
	}

	submit() {
		console.log(this.state.name);
		console.log(this.state.date);
		this.setState({
			nameValid: this.state.name ? true : false,
			dateValid: this.state.date ? true : false
		}, () => {
			console.log(this.state.nameValid);
			console.log(this.state.dateValid);
		});
	}
	render() {
		return (
			<div className="App">
				<zoo-header headertext="Zoo web components in React">
					<img slot="img" alt="Zooplus logo" src="assets/logo.png"/>
				</zoo-header>
				<form style={{maxWidth: 768 + 'px', margin: 0 + ' auto'}}>
					<zoo-select inputerrormsg="Name is required" labeltext="Name" valid={this.state.nameValid ? 1 : ''}>
						<select slot="selectelement">
							{this.state.options.map(option => <option value={option.id} key={option}> { option.firstName } { option.lastName } </option>)}
						</select>
					</zoo-select>
					<zoo-input labeltext="Input date field" inputerrormsg="Invalid value" infotext="Information text" valid={this.state.dateValid ? 1 : ''}>
						<input type="date" placeholder="Placeholder" slot="inputelement" value={this.state.name}/>
					</zoo-input>
					<zoo-button class="submit-button" size="small" onClick={this.submit.bind(this)}>
						<span slot="buttoncontent">Submit</span>
					</zoo-button>
				</form>
			</div>
		);
	}
}

export default App;
