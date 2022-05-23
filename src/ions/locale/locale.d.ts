import { ResourceLanguage } from 'i18next';

export interface Locale extends ResourceLanguage {
  auth: {
    common: {
      [k in 'askEmail']: string;
    };
    signIn: {
      [k in 'emailRequired' | 'invalidEmail']: string;
    };
  };
  common: {
    [k in 'administrator' | 'admin']: string;
  } & {
    actions: {
      [k in 'confirm' | 'cancel' | 'delete']: string;
    };
  };
  system: {
    heading: string;
  };
  client: {
    heading: string;
    tabs: {
      [k in 'cobrands' | 'users' | 'submerchantDashboards']: string;
    };
  };
  notFound: {
    [k in 'heading' | 'goHome']: string;
  };
  navigation: {
    [k in
      | 'all_locations'
      | 'parent_location'
      | 'search'
      | 'dashboard'
      | 'transactions'
      | 'disputes'
      | 'deposit'
      | 'business_profile'
      | 'rates_fee'
      | 'user_name']: string;
  };
  components: {
    upload: {
      [k in 'dropHere' | 'dragAndDrop' | 'attachFile']: string;
    };
  };
}
