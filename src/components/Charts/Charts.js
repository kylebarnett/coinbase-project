import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Charts.css'
import { Line } from 'react-chartjs-2';

// let bitcoinChart = {
//   labels: ['07-17-18', '07-18,18', '07-19,18', '07-20,18', '07-21,18', '07-22,18', '07-23,18', '07-24,18', '07-25,18' ],
//   datasets: [{
//     data: [7321.04, 7370.78, 7466.86, 7354.13, 7419.29, 7418.49, 7711.11, 8424.27, 8181.39]
//   }]
// }

let bitcoinData = [7321.04, 7370.78, 7466.86, 7354.13, 7419.29, 7418.49, 7711.11, 8424.27, 8181.39, 7951.58, 8165.01, 8192.15, 8218.46, 8180.48, 7780.44, 7624.91, 7567.15, 7434.39, 7032.85, 7068.48, 6951.80, 6753.12, 6305.80, 6568.23, 6184.71, 6295.73, 6322.69, 6297.57, 6199.71, 6308.52]

const data = {
  labels: ['07-17-18', '07-18-18', '07-19-18', '07-20-18', '07-21-18', '07-22-18', '07-23-18', '07-24-18', '07-25-18', '07-26-18', '07-27-18', '07-28-18', '07-29-18', '07-30-18', '07-31-18', '08-01-18', '08-02-18', '08-03-18', '08-04-18', '08-05-18', '08-06-18', '08-07-18', '08-08-18', '08-09-18', '08-10-18', '08-11-18', '08-12-18', '08-13-18', '08-14-18', '08-15-18'],
  datasets: [
    {
      backgroundColor: 'rgba(254, 245, 200)',
      borderColor: 'rgba(225, 177, 25)',
      data: bitcoinData
    }
  ]
}

let bitcoinCashData = [850.78, 829.94, 824.89, 767.66, 789.49, 788.67, 784.39, 869.47, 831.46, 806.18, 819.39, 818.83, 828.98, 816.08, 777.15, 769.35, 734.76, 724.71, 695.74, 709.22, 692.63, 659.38, 585.45, 610.78, 572.44, 566.77, 570.96, 535.98, 509.31, 513.67]

const data2 = {
  labels: ['07-17-18', '07-18-18', '07-19-18', '07-20-18', '07-21-18', '07-22-18', '07-23-18', '07-24-18', '07-25-18', '07-26-18', '07-27-18', '07-28-18', '07-29-18', '07-30-18', '07-31-18', '08-01-18', '08-02-18', '08-03-18', '08-04-18', '08-05-18', '08-06-18', '08-07-18', '08-08-18', '08-09-18', '08-10-18', '08-11-18', '08-12-18', '08-13-18', '08-14-18', '08-15-18'],
  datasets: [
    {
      backgroundColor: 'rgba(226, 239, 211)',
      borderColor: 'rgba(141, 196, 81)',
      data: bitcoinCashData,
    }
  ]
}

let ethereumData = [501, 480.51, 469.62, 450.70, 462.44, 459.66, 450.85, 479.37, 472.49, 464.04, 469.67, 466.90, 466.67, 457.08, 433.87, 420.75, 412.62, 418.26, 407.25, 410.52, 406.66, 380.22, 356.61, 356.59, 334.18, 322.11, 319.57, 286.50, 278.93, 282.36]

const data3 = {
  labels: ['07-17-18', '07-18-18', '07-19-18', '07-20-18', '07-21-18', '07-22-18', '07-23-18', '07-24-18', '07-25-18', '07-26-18', '07-27-18', '07-28-18', '07-29-18', '07-30-18', '07-31-18', '08-01-18', '08-02-18', '08-03-18', '08-04-18', '08-05-18', '08-06-18', '08-07-18', '08-08-18', '08-09-18', '08-10-18', '08-11-18', '08-12-18', '08-13-18', '08-14-18', '08-15-18'],
  datasets: [
    {
      backgroundColor: 'rgba(228, 231, 242)',
      borderColor: 'rgba(111, 124, 186)',
      data: ethereumData
    }
  ]
}

let litecoinData = [89.81, 86.81, 86.67, 82.75, 84.46, 83.16, 82.43, 89.29, 86.28, 84.03, 84.46, 83.62, 84.08, 82.85, 79.70, 77.86, 76.14, 77.54, 73.20, 74.59, 73.89, 68.17, 62.49, 63.98, 59.39, 58.36, 59.33, 56.85, 54.56, 54.50]

const data4 = {
  labels: ['07-17-18', '07-18-18', '07-19-18', '07-20-18', '07-21-18', '07-22-18', '07-23-18', '07-24-18', '07-25-18', '07-26-18', '07-27-18', '07-28-18', '07-29-18', '07-30-18', '07-31-18', '08-01-18', '08-02-18', '08-03-18', '08-04-18', '08-05-18', '08-06-18', '08-07-18', '08-08-18', '08-09-18', '08-10-18', '08-11-18', '08-12-18', '08-13-18', '08-14-18', '08-15-18'],
  datasets: [
    {
      backgroundColor: 'rgba(236, 236, 236)',
      borderColor: 'rgba(181, 181, 181)',
      data: litecoinData
    }
  ]
}


class Charts extends Component {
  render() {
    return (
      <div>
        <div className="chart-main-header">
          <div className="chart-main-header-navbar">
            <div className="chart-coinbase-logo">
              <Link to="/"><h4 style={{ textDecoration: 'none', color: 'white' }}>Coinbase</h4></Link>
            </div>
            <div className="chart-buttons">
              <div className="product-button">
                Products
          </div>
              <div className="help-button">
                Help
          </div>
              <div className="chart-button">
                <Link to="/charts">Charts</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="all-charts">
          <Line
            data={data}
            options={{ legend: false, title: { display: true, text: 'Bitcoin' }, scales: { xAxes: [{ gridLines: {display: false}}], yAxes: [{ gridLines: { display: false}}]} }}
          />
          <Line
            data={data2}
            options={{ legend: false, title: { display: true, text: 'Bitcoin-Cash' }, scales: { xAxes: [{ gridLines: {display: false}}], yAxes: [{ gridLines: { display: false}}]} }}
          />
          <Line
            data={data3}
            options={{ legend: false, title: { display: true, text: 'Ethereum' }, scales: { xAxes: [{ gridLines: {display: false}}], yAxes: [{ gridLines: { display: false}}]} }}
          />
          <Line
            data={data4}
            options={{ legend: false, title: { display: true, text: 'Litecoin' }, scales: { xAxes: [{ gridLines: {display: false}}], yAxes: [{ gridLines: { display: false}}]} }}
          />
        </div>
      </div>
    )
  }
}

export default Charts;