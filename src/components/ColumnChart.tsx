import { FC } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const ColumnChart: FC = () => {
  const options = {
    chart: {
      type: 'column',
      spacing: [2, 2, 2, 2, 2, 2, 2, 2]
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
        data: [
          {
            x: 1,
            y: 13
          }
        ]
      },
      {
        data: [
          {
            x: 2,
            y: 32
          }
        ]
      },
      {
        data: [
          {
            x: 2,
            y: 15
          }
        ]
      },
      {
        data: [
          {
            x: 2,
            y: 18
          }
        ]
      },
      {
        data: [
          {
            x: 3,
            y: 15
          }
        ]
      },
      {
        data: [
          {
            x: 3,
            y: 25
          }
        ]
      },
      {
        data: [
          {
            x: 3,
            y: 50
          }
        ]
      },
      {
        data: [
          {
            x: 1,
            y: 10
          }
        ]
      },
      {
        data: [
          {
            x: 1,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 1,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 1,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 4,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 4,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 6,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 6,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 6,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 8,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 9,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 10,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 10,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 11,
            y: 20
          }
        ]
      },
      {
        data: [
          {
            x: 3,
            y: 20
          }
        ]
      }
    ]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { height: '100%' } }}
    />
  );
};
