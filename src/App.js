import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ExchangeRateTable from "./Components/ExchangeRateTable";

const currencies = [
  "AUD",
  "CAD",
  "DKK",
  "GBP",
  "HRK",
  "ILS",
  "INR",
  "JPY",
  "PHP",
  "RON",
  "TRY",
  "USD"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    const promises = currencies.map(currency => {
      return fetch(
        "https://api.exchangeratesapi.io/latest?symbols=" +
          currencies.join(",") +
          "&base=" +
          currency
      ).then(response => {
        return response.json();
      });
    });

    Promise.all(promises).then(results => {
      this.setState({ loading: false, data: results });
    });
    // fetch('https://api.exchangeratesapi.io/latest?symbols=' + currencies.join(',') + '&base=INR').then(json => json.json()).then(res => {
    //   this.setState({loading: false, data: res});
    // });
  }

  render() {
    return (
      <div className="App">
        <h1 className="exchange-title">Exchange Rates</h1>

        <ExchangeRateTable
          isLoading={this.state.loading}
          curr={currencies}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;


