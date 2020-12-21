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
			date: undefined
		};
	}

	submit(e) {
		e.target.checkValidity();
		e.preventDefault();
	}
	render() {
		return (
			<div className="App">
				<zoo-header>
					<h1 slot="headertext">Zoo web components in React</h1>
					<img slot="img" alt="Zooplus logo" src="assets/logo.png"/>
				</zoo-header>
				<form style={{maxWidth: 768 + 'px', margin: 0 + ' auto'}} noValidate onSubmit={this.submit.bind(this)}>
					<zoo-select>
						<label htmlFor="select-id1" slot="label">Name</label>
						<select id="select-id1" slot="select" required defaultValue="">
							<option disabled value="">Please choose an option</option>
							{this.state.options.map(option => <option value={option.id} key={option}> { option.firstName } { option.lastName } </option>)}
						</select>
						<span slot="error">Name is required</span>
					</zoo-select>
					<zoo-input>
						<label htmlFor="input-id1" slot="label">Input date field</label>
						<input id="input-id1" type="date" slot="input" value={this.state.name} required/>
						<span slot="info">Information text</span>
						<span slot="error">Invalid value</span>
					</zoo-input>
					<zoo-button>
						<button type="submit">Submit</button>
					</zoo-button>
				</form>
			</div>
		);
	}
}

export default App;
