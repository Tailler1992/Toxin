import Chart from '../../../library.blocks/chart/chart';
import './pie-chart.scss';

const pieChart = () => {



  let myCanvas = document.querySelector('.pie-chart__canvas');
  let ctx = myCanvas.getContext('2d');

  const labels = ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'];
  let yellowGradient = ctx.createLinearGradient(0, 0, 0, 400);
  yellowGradient.addColorStop(0, '#FFE39C');
  yellowGradient.addColorStop(1, '#FFBA9C');

  let greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
  greenGradient.addColorStop(0, '#6FCF97');
  greenGradient.addColorStop(1, '#66D2EA');

  let purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
  purpleGradient.addColorStop(0, '#BC9CFF');
  purpleGradient.addColorStop(1, '#8BA4F9');

  let darkGradient = ctx.createLinearGradient(0, 0, 0, 400);
  darkGradient.addColorStop(0, '#919191');
  darkGradient.addColorStop(1, '#3D4975');


  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: [
        darkGradient,
        purpleGradient,
        greenGradient,
        yellowGradient,
      ],
      borderColor: '#FFFFFF',
      borderWidth: 0,
      spacing: 2,
      data: [0, 65, 65, 130],
      cutout: '93%',
    }]
  };

  const sum = data.datasets[0].data.reduce((a, b) => a + b);

  const counter = {
    id: 'counter',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea: { top, width, height } } = chart;
      ctx.save();
      ctx.font = '700 24px Montserrat';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#BC9CFF';
      ctx.fillText(sum, width / 2, top + (height / 2) - 2);
      ctx.font = '700 12px Montserrat';
      ctx.fillText('ГОЛОСОВ', width / 2, top + (height / 2) + 17);
    }
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: false,
      plugins: {
        legend: {display: false},
        title: {display: false},
        tooltip:{
          //enabled: false
          //displayColors: false,
          callbacks: {
            label: function(tooltipItems, data) {
              return tooltipItems.parsed;
          }
        }
        },


      }
    },

    plugins: [counter]
  };

  const myChart = new Chart(ctx, config);
};



export default pieChart;
