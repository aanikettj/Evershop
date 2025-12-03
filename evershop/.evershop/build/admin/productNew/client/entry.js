
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e5a343998ee54766b2ea85ab56b7185a1 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import eb540e5a91b3afc831fddd5216e6dd590 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import eee00a4d990bcfd7d74f39cfb3a7531ff from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e49cca68b2e856aaa0ea03c76765a3906 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e99ac7234e04eed429cac54057f97d608 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e4bb201027cf6f015565acc72d4dd5613 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e41a1b061a206fd051ed803bc1203980f from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Attributes.js';
import eda90c5c1e69cf8f5bdca216dcb7e69c3 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/General.js';
import e6e5be24b91cacc9c02c847f961b654e8 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Inventory.js';
import e02a4484ddc9a1f4a83470f1d91231dc3 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Media.js';
import ee3ccfd8618dfd66842898a0ad6939b99 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/PageHeading.js';
import e4f37d7eb77543843240b14e8427dd4c5 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Seo.js';
import ed23dceb6c5cdc8306bdd832bad616ed1 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productEdit+productNew/Status.js';
import e6cd5a7b3cb96635aa27f198ce0ef7e12 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/productNew/ProductNewForm.js';
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
  rightSide: {
    e41a1b061a206fd051ed803bc1203980f: {
      id: 'e41a1b061a206fd051ed803bc1203980f',
      sortOrder: 30,
      component: { default: e41a1b061a206fd051ed803bc1203980f }
    },
    e6e5be24b91cacc9c02c847f961b654e8: {
      id: 'e6e5be24b91cacc9c02c847f961b654e8',
      sortOrder: 15,
      component: { default: e6e5be24b91cacc9c02c847f961b654e8 }
    },
    ed23dceb6c5cdc8306bdd832bad616ed1: {
      id: 'ed23dceb6c5cdc8306bdd832bad616ed1',
      sortOrder: 10,
      component: { default: ed23dceb6c5cdc8306bdd832bad616ed1 }
    }
  },
  leftSide: {
    eda90c5c1e69cf8f5bdca216dcb7e69c3: {
      id: 'eda90c5c1e69cf8f5bdca216dcb7e69c3',
      sortOrder: 10,
      component: { default: eda90c5c1e69cf8f5bdca216dcb7e69c3 }
    },
    e02a4484ddc9a1f4a83470f1d91231dc3: {
      id: 'e02a4484ddc9a1f4a83470f1d91231dc3',
      sortOrder: 15,
      component: { default: e02a4484ddc9a1f4a83470f1d91231dc3 }
    },
    e4f37d7eb77543843240b14e8427dd4c5: {
      id: 'e4f37d7eb77543843240b14e8427dd4c5',
      sortOrder: 60,
      component: { default: e4f37d7eb77543843240b14e8427dd4c5 }
    }
  },
  content: {
    ee3ccfd8618dfd66842898a0ad6939b99: {
      id: 'ee3ccfd8618dfd66842898a0ad6939b99',
      sortOrder: 5,
      component: { default: ee3ccfd8618dfd66842898a0ad6939b99 }
    },
    e6cd5a7b3cb96635aa27f198ce0ef7e12: {
      id: 'e6cd5a7b3cb96635aa27f198ce0ef7e12',
      sortOrder: 10,
      component: { default: e6cd5a7b3cb96635aa27f198ce0ef7e12 }
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
ReactDOM.hydrate(
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );