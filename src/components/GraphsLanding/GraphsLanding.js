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

let bitcoinData = [7321.04, 7370.78, 7466.86, 7354.13, 7419.29, 7418.49, 7711.11, 8424.27, 8181.39, 7951.58, 8165.01, 8192.15, 8218.46, 8180.48, 7780.44, 7624.91, 7567.15, 7434.39, 7032.85, 7068.48, 6951.80, 6753.12, 6305.80, 6568.23, 6184.71, 6295.73, 6322.69, 6297.57, 6199.71, 6308.52, 6334.73, 6580.63, 6423.76, 6506.07, 6308.53, 6488.76, 6376.71, 6534.88, 6719.96, 6763.19, 6707.26, 6884.64, 7096.28, 7047.16, 6978.23, 7037.58, 7193.25, 7272.72]

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
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: bitcoinData
    }
  ]
};

let bitcoinCash = [850.78, 829.94, 824.89, 767.66, 789.49, 788.67, 784.39, 869.47, 831.46, 806.18, 819.39, 818.83, 828.98, 816.08, 777.15, 769.35, 734.76, 724.71, 695.74, 709.22, 692.63, 659.38, 585.45, 610.78, 572.44, 566.77, 570.96, 535.98, 509.31, 513.67, 517.35, 597.01, 554.92, 569.93, 515.66, 536.57, 519.95, 530.77, 535.41, 537.24, 522.88, 546.36, 565.31, 554.37, 540.03, 543.08, 615.31, 645.88]

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

let ethereumData = [501, 480.51, 469.62, 450.70, 462.44, 459.66, 450.85, 479.37, 472.49, 464.04, 469.67, 466.90, 466.67, 457.08, 433.87, 420.75, 412.62, 418.26, 407.25, 410.52, 406.66, 380.22, 356.61, 356.59, 334.18, 322.11, 319.57, 286.50, 278.93, 282.36, 288.05, 315.73, 295.81, 300.83, 274.32, 281.94, 271.34, 277.10, 282.97, 279.65, 275.20, 285.60, 296.50, 289.31, 284.11, 283.00, 295.34, 294.37]

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

let litecoinData = [89.81, 86.81, 86.67, 82.75, 84.46, 83.16, 82.43, 89.29, 86.28, 84.03, 84.46, 83.62, 84.08, 82.85, 79.70, 77.86, 76.14, 77.54, 73.20, 74.59, 73.89, 68.17, 62.49, 63.98, 59.39, 58.36, 59.33, 56.85, 54.56, 54.50, 55.36, 61.51, 57.28, 57.94, 54.00, 56.35, 55.32, 57.54, 57.93, 57.91, 57.33, 60.25, 63.02, 61.77, 60.32, 61.93, 65.95, 65.65]

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
        <div className="main-coin-box">
          <div className="bitcoin-box">
            <h3 className="bitcoin-name"><img style={{ height: '25px', width: '25px'}}src="https://thumbs.dreamstime.com/b/bitcoin-logo-white-background-bitcoin-logo-white-background-orange-circle-white-bitcoin-symbol-tilted-117680414.jpg" alt="" />Bitcoin</h3>
            <p className="bitcoin-price"> <NumberFormat value={this.state.bitcoin.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p className="bitcoin-change"> <NumberFormat value={this.state.bitcoin.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-bitcoin-button" onClick={() => {
              this.props.addToShoppingCart('Bitcoin', this.state.bitcoin.quotes.USD.price, 1);
              this.successfullAdd('Bitcoin')
            }}>Buy Bitcoin</button>
            <Line
              style={{
                flex: 1
              }}
              data={data}
              options={{ maintainAspectRatio: true, responsive: true, legend: false, scales: { xAxes: [{ gridLines: {display: false, drawBorder: false}}], yAxes: [{ ticks: {display: false}, gridLines: { display: false, drawBorder: false}}]} }}
            />
          </div>

          <div className="bitcoin-cash-box">
            <h3 className="bitcoin-cash-name"><img style={{height: '25px', width: '25px'}}src="http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-Cash-BCH-icon.png" alt=""/>Bitcoin Cash</h3>
            <p className="bitcoin-cash-price"> <NumberFormat value={this.state.bitcoinCash.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p className="bitcoin-cash-change"> <NumberFormat value={this.state.bitcoinCash.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-bitcoin-cash-button" onClick={() => {
              this.props.addToShoppingCart('Bitcoin-Cash', this.state.bitcoinCash.quotes.USD.price, 1);
              this.successfullAdd('Bitcoin-Cash')
            }}>Buy Bitcoin Cash</button>
            <Line
              style={{
                flex: 1
              }}
              data={data2}
              options={{ maintainAspectRatio: true, responsive: true, legend: false, scales: { xAxes: [{ gridLines: {display: false, drawBorder: false}}], yAxes: [{ ticks: {display: false}, gridLines: { display: false, drawBorder: false}}]} }}
            />
          </div>

          <div className="ethereum-box">
            <h3 className="ethereum-name"><img style={{height: '25px', width: '25px'}}src="https://png.icons8.com/color/1600/ethereum.png" alt=""/>Ethereum</h3>
            <p className="ethereum-price"> <NumberFormat value={this.state.ethereum.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p className="ethereum-change"> <NumberFormat value={this.state.ethereum.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-ethereum-button" onClick={() => {
              this.props.addToShoppingCart('Ethereum', this.state.ethereum.quotes.USD.price, 1);
              this.successfullAdd('Ethereum')
            }}>Buy Ethereum</button>
            <Line
              style={{
                flex: 1
              }}
              data={data3}
              options={{ maintainAspectRatio: true, responsive: true, legend: false, scales: { xAxes: [{ gridLines: {display: false, drawBorder: false}}], yAxes: [{ ticks: {display: false}, gridLines: { display: false, drawBorder: false}}]} }}
            />
          </div>

          <div className="litecoin-box">
            <h3 className="litecoin-name"><img style={{height: '25px', width: '25px'}}src="https://cdn.worldvectorlogo.com/logos/litecoin.svg" alt=""/>Litecoin</h3>
            <p className="litecoin-price"> <NumberFormat value={this.state.litecoin.quotes.USD.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} /></p>
            <p className="litecoin-change"> <NumberFormat value={this.state.litecoin.quotes.USD.percent_change_24h} displayType={'text'} suffix={'%'} /></p>
            <button className="buy-litecoin-button" onClick={() => {
              this.props.addToShoppingCart('Litecoin', this.state.litecoin.quotes.USD.price, 1);
              this.successfullAdd('Litecoin')
            }}>Buy Litecoin</button>
            <Line
              style={{
                flex: 1
              }}
              data={data4}
              options={{ maintainAspectRatio: true, responsive: true, legend: false, scales: { xAxes: [{ gridLines: {display: false, drawBorder: false}}], yAxes: [{ ticks: {display: false}, gridLines: { display: false, drawBorder: false}}]} }}
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