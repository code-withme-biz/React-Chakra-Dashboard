import { Locale } from './locale';

export const en: Locale = {
  auth: {
    common: {
      askEmail: 'What is your email address?'
    },
    signIn: {
      emailRequired: 'An email address is required.',
      invalidEmail: 'Please enter a valid email address.'
    }
  },
  common: {
    admin: 'admin',
    administrator: 'ADMINISTRATOR',
    actions: {
      confirm: 'Confirm',
      cancel: 'Cancel',
      delete: 'Delete'
    }
  },
  system: {
    heading: ''
  },
  client: {
    heading: 'Clients Section',
    tabs: {
      cobrands: 'Cobrands',
      users: 'Users',
      submerchantDashboards: 'Submerchant Dashboards'
    }
  },
  notFound: {
    heading: 'Page Not Found',
    goHome: 'Go to Home'
  },
  dashboard: {
    filter: {
      apply: 'Apply',
      filterby: 'Filter By',
      clear: 'Clear',
      filters: 'filters',
      status: 'Status',
      underwriter: 'Underwriter',
      agefrom: 'Age from Submission',
      cobrand: 'Cobrand',
      searchfor: 'Search For'
    }
  },
  navigation: {
    all_locations: 'All Locations',
    parent_location: 'Parent Location',
    search: 'Search',
    transactions: 'Transactions',
    dashboard: 'Dashboard',
    disputes: 'Disputes',
    deposit: 'Deposit',
    business_profile: 'Business Profile',
    rates_fee: 'Rates & Fee',
    user_name: 'User Name'
  },
  components: {
    upload: {
      attachFile: 'Attach File',
      dragAndDrop: 'Drag and Drop',
      dropHere: 'Drop Here'
    }
  }
};
