# Integrating React project with zoo-web-components

## Setup

1. Run `npm i @zooplus/zoo-web-components --save` to install the package.
2. Modify you main `index.js` and add the following line: `import "@zooplus/zoo-web-components";`
3. Use web components in your application:
```JSX
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

