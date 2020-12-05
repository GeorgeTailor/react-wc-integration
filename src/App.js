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
		this.setState({
			nameValid: this.state.name ? true : false,
			dateValid: this.state.date ? true : false
		}, () => {
		});
	}
	render() {
		return (
			<div className="App">
				<zoo-header headertext="Zoo web components in React">
					<img slot="img" alt="Zooplus logo" src="assets/logo.png"/>
				</zoo-header>
				<form style={{maxWidth: 768 + 'px', margin: 0 + ' auto'}}>
					<zoo-select inputerrormsg="Name is required" invalid={this.state.nameValid ? null : 1}>
						<select id="select-id1" slot="selectelement">
							{this.state.options.map(option => <option value={option.id} key={option}> { option.firstName } { option.lastName } </option>)}
						</select>
						<label for="select-id1" slot="selectlabel">Name</label>
					</zoo-select>
					<zoo-input inputerrormsg="Invalid value" infotext="Information text" invalid={this.state.dateValid ? null : 1}>
						<input id="input-id1" type="date" placeholder="Placeholder" slot="inputelement" value={this.state.name}/>
						<label for="input-id1" slot="inputlabel">Input date field</label>
					</zoo-input>
					<zoo-button class="submit-button" size="small" onClick={this.submit.bind(this)}>
						<button type="button">Submit</button>
					</zoo-button>
				</form>
			</div>
		);
	}
}

export default App;
