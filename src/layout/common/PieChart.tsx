import { VegaLite, VisualizationSpec } from 'react-vega';

export interface PieChartProps<T extends object> {
  data: T[];
  innerRadius: number;
}

export const PieChart = <T extends object>({ data, innerRadius }: PieChartProps<T>) => {
  const specData: VisualizationSpec = {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    width: 200,
    height: 200,
    autosize: 'none',
    signals: [
      {
        name: 'startAngle',
        value: 0,
        on: [
          { events: 'rect:mouseover', update: 'datum' },
          { events: 'rect:mouseout', update: '{}' }
        ]
      },
      { name: 'endAngle', value: 6.29 },
      { name: 'padAngle', value: 0 },
      { name: 'innerRadius', value: innerRadius },
      { name: 'cornerRadius', value: 0 },
      { name: 'sort', value: false }
    ],
    data: [
      {
        name: 'table',
        transform: [
          {
            type: 'pie',
            field: 'field',
            startAngle: { signal: 'startAngle' },
            endAngle: { signal: 'endAngle' },
            sort: { signal: 'sort' }
          }
        ]
      }
    ],
    scales: [
      {
        name: 'color',
        type: 'ordinal',
        domain: { data: 'table', field: 'color' },
        range: { scheme: 'category20' }
      }
    ],
    marks: [
      {
        type: 'arc',
        from: { data: 'table' },
        encode: {
          enter: {
            fill: { field: 'color' },
            x: { signal: 'width / 2' },
            y: { signal: 'height / 2' }
          },
          update: {
            startAngle: { field: 'startAngle' },
            endAngle: { field: 'endAngle' },
            padAngle: { signal: 'padAngle' },
            innerRadius: { signal: 'innerRadius' },
            outerRadius: { signal: 'width / 2' },
            cornerRadius: { signal: 'cornerRadius' }
          }
        }
      }
    ]
  };
  const barData = {
    table: data
  };

  return (
    <div>
      <VegaLite spec={specData} data={barData} actions={false} />
    </div>
  );
};
