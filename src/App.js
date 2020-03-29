import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

class App extends React.Component {
    state = {
        isLoading: true,
		rates: []
	}
	
	render() {
		const { isLoading, rates, error } = this.state;
		return (
		<React.Fragment>
			<h1>Exchange Rates</h1>
			
			{error ? <p>{error.message}</p> : null}
			
			{!isLoading ? (
				rates.map(rate => {
					rate = JSON.stringify(rate).replace(/[&\/\\{}"]/g,'').split(":");
					console.log("given rate: ", rate);
					const name = rate[0];
					const price = rate[1];
					console.log("given rate: ", rate);
					return (
						<div key={name}>
							<p>Name: {name}</p>
							<p>Price: £{(Math.round(price*100)/100).toFixed(2)}</p>
							<hr />
						</div>
					);
				})
			// If there is a delay in data, let's let the user know it's loading
			) : (
			<h3>Loading...</h3>
			)}
		</React.Fragment>
		);
	}

	fetchUsers() {
		// Where we're fetching data from
		fetch('https://api.exchangeratesapi.io/latest')

		// We get the API response and receive data in JSON format...
		.then((response) => {
			return response.json();
		})

		.then((data) => {
			console.log("data: ", data);
			console.log("rates: ", data.rates);
			console.log("formatted rates: ", JSON.stringify(data.rates).split(','));
			this.setState({ 
				isLoading: false,
				rates: JSON.stringify(data.rates).split(',')
			})
		});
	}

	componentDidMount() {
		this.fetchUsers();
	}

}

export default App;
