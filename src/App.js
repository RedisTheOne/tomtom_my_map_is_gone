import React from 'react';
import { Chart, Line, Bar } from 'react-chartjs-2';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', "AA"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    }
  }
  componentDidMount() { 
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';
    document.body.appendChild(script);
    script.async = true;
    script.onload = function () {
      window.tomtom.L.map('map', {
        source: 'vector',
        key: 'sLvwh9AXSRIUuOmLCbdHYbuLqkTP5rq1',
        center: [41.1533, 20.1683],
        basePath: '/sdk',
        zoom: 9
      });
    }
  }
  render() {
    return (
      <div>
        <div id = 'map'></div>
        <Bar
          
          data={this.state.data}
          options={{}} />
      </div>
    );
  }
}

export default App;
