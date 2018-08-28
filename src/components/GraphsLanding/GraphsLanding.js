import React, { Component } from 'react';
import axios from 'axios';
import './GraphsLanding.css';
import { Line } from 'react-chartjs-2';
import Header from '../Header/Header';
import { getUser } from '../../redux/reducers/user'
import { addToShoppingCart } from '../../redux/reducers/currencyCart'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, ToastStore } from 'react-toasts';
const NumberFormat = require('react-number-format');

let bitcoinData = [7321.04, 7370.78, 7466.86, 7354.13, 7419.29, 7418.49, 7711.11, 8424.27, 8181.39, 7951.58, 8165.01, 8192.15, 8218.46, 8180.48, 7780.44, 7624.91, 7567.15, 7434.39, 7032.85, 7068.48, 6951.80, 6753.12, 6305.80, 6568.23, 6184.71, 6295.73, 6322.69, 6297.57, 6199.71, 6308.52]

const data = {
  labels: new Array(bitcoinData.length),
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(255, 177, 25)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: bitcoinData
    }
  ]
};

let bitcoinCash = [850.78, 829.94, 824.89, 767.66, 789.49, 788.67, 784.39, 869.47, 831.46, 806.18, 819.39, 818.83, 828.98, 816.08, 777.15, 769.35, 734.76, 724.71, 695.74, 709.22, 692.63, 659.38, 585.45, 610.78, 572.44, 566.77, 570.96, 535.98, 509.31, 513.67]

const data2 = {
  labels: new Array(bitcoinCash.length),
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(141, 196, 81)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: bitcoinCash
    }
  ]
};

let ethereumData = [501, 480.51, 469.62, 450.70, 462.44, 459.66, 450.85, 479.37, 472.49, 464.04, 469.67, 466.90, 466.67, 457.08, 433.87, 420.75, 412.62, 418.26, 407.25, 410.52, 406.66, 380.22, 356.61, 356.59, 334.18, 322.11, 319.57, 286.50, 278.93, 282.36]

const data3 = {
  labels: new Array(ethereumData.length),
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(111, 124, 186)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: ethereumData
    }
  ]
};

let litecoinData = [89.81, 86.81, 86.67, 82.75, 84.46, 83.16, 82.43, 89.29, 86.28, 84.03, 84.46, 83.62, 84.08, 82.85, 79.70, 77.86, 76.14, 77.54, 73.20, 74.59, 73.89, 68.17, 62.49, 63.98, 59.39, 58.36, 59.33, 56.85, 54.56, 54.50]

const data4 = {
  labels: new Array(litecoinData.length),
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(181, 181, 181)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: litecoinData,
    }
  ]
};

class GraphsLanding extends Component {
  constructor() {
    super();
    this.state = {
      bitcoin: {
        quotes: {
          USD: {
            price: '',
            percent_change_24h: ''
          }
        }
      },
      bitcoinCash: {
        quotes: {
          USD: {
            price: '',
            percent_change_24h: ''
          }
        }
      },
      ethereum: {
        quotes: {
          USD: {
            price: '',
            percent_change_24h: ''
          }
        }
      },
      litecoin: {
        quotes: {
          USD: {
            price: '',
            percent_change_24h: ''
          }
        }
      },
      bitcoinButton: false,
    }
  }

  bitcoinMouseEnter = (e) => {
    // console.log(e.target.classList)
    e.target.classList.toggle('fas')
  }

  componentDidMount() {

    axios.get('https://api.coinmarketcap.com/v2/ticker/1/').then(response => {
      this.setState({
        bitcoin: response.data.data
      })
    })

    axios.get('https://api.coinmarketcap.com/v2/ticker/1831/').then(response => {
      this.setState({
        bitcoinCash: response.data.data
      })
    })

    axios.get('https://api.coinmarketcap.com/v2/ticker/1027/').then(response => {
      this.setState({
        ethereum: response.data.data
      })
    })

    axios.get('https://api.coinmarketcap.com/v2/ticker/2/').then(response => {
      this.setState({
        litecoin: response.data.data
      })
    })
  }

  successfullAdd = (name) => {
    if (this.props.addToShoppingCart) {
      ToastStore.success('Successfully Added ' + name + ' to Shopping Cart')
    }
  }

  render() {
    return (
      <div>
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
        <div className="main-coin-box">
          <div className="bitcoin-box">
            <h5 className="bitcoin-name">Bitcoin</h5>
            <p> <NumberFormat value={this.state.bitcoin.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p> <NumberFormat value={this.state.bitcoin.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-bitcoin-button" onClick={() => {
              this.props.addToShoppingCart('Bitcoin', this.state.bitcoin.quotes.USD.price, 1);
              this.successfullAdd('Bitcoin')
            }}>Buy Bitcoin</button>
            <Line
              style={{
                flex: 1
              }}
              data={data}
              options={{ legend: false }}
            />
          </div>

          <div className="bitcoin-cash-box">
            <h5 className="bitcoin-cash-name">Bitcoin Cash</h5>
            <p> <NumberFormat value={this.state.bitcoinCash.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p> <NumberFormat value={this.state.bitcoinCash.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-bitcoin-cash-button" onClick={() => {
              this.props.addToShoppingCart('Bitcoin-Cash', this.state.bitcoinCash.quotes.USD.price, 1);
              this.successfullAdd('Bitcoin-Cash')
            }}>Buy Bitcoin Cash</button>
            <Line
              style={{
                flex: 1
              }}
              data={data2}
              options={{ legend: false }}
            />
          </div>

          <div className="ethereum-box">
            <h5 className="ethereum-name">Ethereum</h5>
            <p> <NumberFormat value={this.state.ethereum.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p> <NumberFormat value={this.state.ethereum.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-ethereum-button" onClick={() => {
              this.props.addToShoppingCart('Ethereum', this.state.ethereum.quotes.USD.price, 1);
              this.successfullAdd('Ethereum')
            }}>Buy Ethereum</button>
            <Line
              style={{
                flex: 1
              }}
              data={data3}
              options={{ legend: false }}
            />
          </div>

          <div className="litecoin-box">
            <h5 className="litecoin-name">Litecoin</h5>
            <p> <NumberFormat value={this.state.litecoin.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p> <NumberFormat value={this.state.litecoin.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-litecoin-button" onClick={() => {
              this.props.addToShoppingCart('Litecoin', this.state.litecoin.quotes.USD.price, 1);
              this.successfullAdd('Litecoin')
            }}>Buy Litecoin</button>
            <Line
              style={{
                flex: 1
              }}
              data={data4}
              options={{ legend: false, showLines: true }}
            />
          </div>
        </div>
      </div>

    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user.user,
    currency: state.currencyCart.currency
  }
}

export default connect(mapStateToProps, { getUser, addToShoppingCart })(GraphsLanding);