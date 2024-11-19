import * as Highcharts from 'highcharts';
import { useRef } from 'react';

import { HighchartsReact } from 'highcharts-react-official';

import { statisticsChart } from '../constants/statistics';

const options: Highcharts.Options = {
  chart: {
    type: 'pie',
    backgroundColor: 'var(--backgroundCard)',
    height: '175px',
  },
  title: {
    text: '',
  },
  series: [
    {
      type: 'pie',
      innerSize: '50%',
      data: statisticsChart,
    },
  ],
  legend: {
    events: {
      itemClick: function () {
        return false;
      },
    },
    symbolHeight: 12,
    symbolWidth: 12,
    symbolRadius: 4,
    itemStyle: {
      cursor: 'default',
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: 'DM Sans',
      lineHeight: '24px',
      color: 'black',
    },
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    itemMarginBottom: 14,
    labelFormat: '{name}',
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      size: '175px',
      center: ['50%', '52%'],
      allowPointSelect: false,
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -20,
        style: {
          fontSize: '12px',
          fontFamily: 'DM Sans',
          color: 'rgba(0, 0, 0, 0.62)',
          textOutline: 'none',
        },
      },
      showInLegend: true,
      states: {
        hover: {
          enabled: false,
        },
        inactive: {
          opacity: 1,
        },
      },
      point: {
        events: {
          legendItemClick: function () {
            return false;
          },
        },
      },
    },
  },
  credits: {
    enabled: false,
  },
};

export const DonutChartV1 = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};
