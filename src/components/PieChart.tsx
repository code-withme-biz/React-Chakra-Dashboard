import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export interface PieChartProps<T extends object> {
  data: T[];
}

export const PieChart = <T extends object>({ data }: PieChartProps<T>) => {
  const options = {
    responsive: true,
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      borderWidth: 0,
      margin: [0, 0, 0, 0],
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        },
        shadow: false,
        center: ['50%', '50%'],
        borderWidth: 0 // < set this option
      },
      column: {
        stacking: 'normal'
      }
    },
    rangeSelector: {
      enabled: false
    },
    title: {
      text: ''
    },
    series: [
      {
        name: 'Incidents',
        data: data,
        size: '100%',
        innerSize: '0%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        },
        marker: {
          enabled: false
        }
      }
    ]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      // containerProps={{ style: { height: 'calc(100vh - 170px)' } }}
      containerProps={{ style: { height: '100%' } }}
    />
  );
};
