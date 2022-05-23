import { Meta } from '@storybook/react';
import { default as DashboardPage } from '~/pages/system/Dashboard';

export default {
  title: 'Pages / Dashboard',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Dashboard = () => {
  return <Dashboard />;
};
