# Integrating React project with zoo-web-components

## Setup

1. Run `npm i @zooplus/zoo-web-components --save` to install the package.
2. Modify you main `index.js` and add the following line: `import "@zooplus/zoo-web-components";`
3. Use web components in your application:
```JSX
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
					<input id="input-id1" type="date" placeholder="Placeholder" slot="input" value={this.state.name} required/>
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
```

5. Add CSS Custom properties to your main styles:
```CSS
:root {
	--primary-mid: #3C9700;
	--primary-light: #66B100;
	--primary-dark: #286400;
	--primary-ultralight: #EBF4E5;
	--secondary-mid: #FF6200;
	--secondary-light: #F80;
	--secondary-dark: #CC4E00;
	--info-ultralight: #ECF5FA;
	--info-mid: #459FD0;
	--warning-ultralight: #FDE8E9;
	--warning-mid: #ED1C24;
}
```

