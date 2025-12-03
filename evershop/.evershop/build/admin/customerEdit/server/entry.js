import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e5a343998ee54766b2ea85ab56b7185a1 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import eb540e5a91b3afc831fddd5216e6dd590 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import eee00a4d990bcfd7d74f39cfb3a7531ff from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e49cca68b2e856aaa0ea03c76765a3906 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e99ac7234e04eed429cac54057f97d608 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e4bb201027cf6f015565acc72d4dd5613 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ea4dacb618f94394ba63ce37de08e5df0 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import eb22878f60b6706d9e575b10ede3cf5b4 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e7b45558d96acd3a7417beeb2cb7ec5e5 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e9b3e7ddc9d61e77b66af3c80ce5b54d8 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e9beb23813b6996df808463611d675cc4 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e8534dea13b103c1b2a32faf1037e9e8d from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e44b822c34a9045fa0c4a5307724fe998 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import ee7cb2550bda9e55302decff3f84e7f37 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e6afbdfbbbbab70642a3baa4969aafec7 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import ed46f180630f48dd8c1dc975025418dd4 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e30b0326deaa9c1e1c21a107ad457bdd1 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit/CustomerEditForm.js';
import e7576f042afef29853deafbbddd471ef0 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/General.js';
import eaef20bc075c3aa94f91c2d69367f2856 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/OrderHistory.js';
import e8232143a2e947ac4f0d7eab969331869 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/customerEdit+customerNew/PageHeading.js';
import e7be08f71b0616b9f87f0fa737b8b08f1 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e6bf6a6de4d060bed7ab555653c3f1826 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import eca9e92a2d5fec07906d3d2234bd23a37 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import efc0e7cf0459ccd85e3ce00f31f607dc4 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import ee6db42ef873592d7db311c94da0a3c48 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import e9df19dd4beb9612dc2b859bfae9c7dee from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import efcad5bd48493312459c5206c199d8d87 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e5a343998ee54766b2ea85ab56b7185a1: {
      id: 'e5a343998ee54766b2ea85ab56b7185a1',
      sortOrder: 50,
      component: { default: e5a343998ee54766b2ea85ab56b7185a1 }
    },
    e9b3e7ddc9d61e77b66af3c80ce5b54d8: {
      id: 'e9b3e7ddc9d61e77b66af3c80ce5b54d8',
      sortOrder: 10,
      component: { default: e9b3e7ddc9d61e77b66af3c80ce5b54d8 }
    },
    ee7cb2550bda9e55302decff3f84e7f37: {
      id: 'ee7cb2550bda9e55302decff3f84e7f37',
      sortOrder: 20,
      component: { default: ee7cb2550bda9e55302decff3f84e7f37 }
    }
  },
  head: {
    eb540e5a91b3afc831fddd5216e6dd590: {
      id: 'eb540e5a91b3afc831fddd5216e6dd590',
      sortOrder: 5,
      component: { default: eb540e5a91b3afc831fddd5216e6dd590 }
    },
    e49cca68b2e856aaa0ea03c76765a3906: {
      id: 'e49cca68b2e856aaa0ea03c76765a3906',
      sortOrder: 5,
      component: { default: e49cca68b2e856aaa0ea03c76765a3906 }
    }
  },
  body: {
    eee00a4d990bcfd7d74f39cfb3a7531ff: {
      id: 'eee00a4d990bcfd7d74f39cfb3a7531ff',
      sortOrder: 10,
      component: { default: eee00a4d990bcfd7d74f39cfb3a7531ff }
    },
    e8534dea13b103c1b2a32faf1037e9e8d: {
      id: 'e8534dea13b103c1b2a32faf1037e9e8d',
      sortOrder: 10,
      component: { default: e8534dea13b103c1b2a32faf1037e9e8d }
    }
  },
  adminMenu: {
    e99ac7234e04eed429cac54057f97d608: {
      id: 'e99ac7234e04eed429cac54057f97d608',
      sortOrder: 20,
      component: { default: e99ac7234e04eed429cac54057f97d608 }
    },
    eb22878f60b6706d9e575b10ede3cf5b4: {
      id: 'eb22878f60b6706d9e575b10ede3cf5b4',
      sortOrder: 60,
      component: { default: eb22878f60b6706d9e575b10ede3cf5b4 }
    },
    e44b822c34a9045fa0c4a5307724fe998: {
      id: 'e44b822c34a9045fa0c4a5307724fe998',
      sortOrder: 10,
      component: { default: e44b822c34a9045fa0c4a5307724fe998 }
    },
    ed46f180630f48dd8c1dc975025418dd4: {
      id: 'ed46f180630f48dd8c1dc975025418dd4',
      sortOrder: 40,
      component: { default: ed46f180630f48dd8c1dc975025418dd4 }
    },
    e7be08f71b0616b9f87f0fa737b8b08f1: {
      id: 'e7be08f71b0616b9f87f0fa737b8b08f1',
      sortOrder: 30,
      component: { default: e7be08f71b0616b9f87f0fa737b8b08f1 }
    },
    e6bf6a6de4d060bed7ab555653c3f1826: {
      id: 'e6bf6a6de4d060bed7ab555653c3f1826',
      sortOrder: 50,
      component: { default: e6bf6a6de4d060bed7ab555653c3f1826 }
    },
    ee6db42ef873592d7db311c94da0a3c48: {
      id: 'ee6db42ef873592d7db311c94da0a3c48',
      sortOrder: 500,
      component: { default: ee6db42ef873592d7db311c94da0a3c48 }
    }
  },
  quickLinks: {
    e4bb201027cf6f015565acc72d4dd5613: {
      id: 'e4bb201027cf6f015565acc72d4dd5613',
      sortOrder: 20,
      component: { default: e4bb201027cf6f015565acc72d4dd5613 }
    },
    eca9e92a2d5fec07906d3d2234bd23a37: {
      id: 'eca9e92a2d5fec07906d3d2234bd23a37',
      sortOrder: 30,
      component: { default: eca9e92a2d5fec07906d3d2234bd23a37 }
    }
  },
  settingPageMenu: {
    ea4dacb618f94394ba63ce37de08e5df0: {
      id: 'ea4dacb618f94394ba63ce37de08e5df0',
      sortOrder: 15,
      component: { default: ea4dacb618f94394ba63ce37de08e5df0 }
    },
    efc0e7cf0459ccd85e3ce00f31f607dc4: {
      id: 'efc0e7cf0459ccd85e3ce00f31f607dc4',
      sortOrder: 10,
      component: { default: efc0e7cf0459ccd85e3ce00f31f607dc4 }
    },
    e9df19dd4beb9612dc2b859bfae9c7dee: {
      id: 'e9df19dd4beb9612dc2b859bfae9c7dee',
      sortOrder: 5,
      component: { default: e9df19dd4beb9612dc2b859bfae9c7dee }
    },
    efcad5bd48493312459c5206c199d8d87: {
      id: 'efcad5bd48493312459c5206c199d8d87',
      sortOrder: 20,
      component: { default: efcad5bd48493312459c5206c199d8d87 }
    }
  },
  footerLeft: {
    e7b45558d96acd3a7417beeb2cb7ec5e5: {
      id: 'e7b45558d96acd3a7417beeb2cb7ec5e5',
      sortOrder: 10,
      component: { default: e7b45558d96acd3a7417beeb2cb7ec5e5 }
    },
    e6afbdfbbbbab70642a3baa4969aafec7: {
      id: 'e6afbdfbbbbab70642a3baa4969aafec7',
      sortOrder: 20,
      component: { default: e6afbdfbbbbab70642a3baa4969aafec7 }
    }
  },
  adminNavigation: {
    e9beb23813b6996df808463611d675cc4: {
      id: 'e9beb23813b6996df808463611d675cc4',
      sortOrder: 10,
      component: { default: e9beb23813b6996df808463611d675cc4 }
    }
  },
  content: {
    e30b0326deaa9c1e1c21a107ad457bdd1: {
      id: 'e30b0326deaa9c1e1c21a107ad457bdd1',
      sortOrder: 10,
      component: { default: e30b0326deaa9c1e1c21a107ad457bdd1 }
    },
    e8232143a2e947ac4f0d7eab969331869: {
      id: 'e8232143a2e947ac4f0d7eab969331869',
      sortOrder: 5,
      component: { default: e8232143a2e947ac4f0d7eab969331869 }
    }
  },
  rightSide: {
    e7576f042afef29853deafbbddd471ef0: {
      id: 'e7576f042afef29853deafbbddd471ef0',
      sortOrder: 10,
      component: { default: e7576f042afef29853deafbbddd471ef0 }
    }
  },
  leftSide: {
    eaef20bc075c3aa94f91c2d69367f2856: {
      id: 'eaef20bc075c3aa94f91c2d69367f2856',
      sortOrder: 10,
      component: { default: eaef20bc075c3aa94f91c2d69367f2856 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: banner }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: simple_slider }
    }
  }
} 