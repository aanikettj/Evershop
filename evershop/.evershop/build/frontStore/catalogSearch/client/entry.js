
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e075c666a4a2c3ef97b6bd8f2b4961d9e from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Base.js';
import e65f8743cc7511814b828c8aa64179dba from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Breadcrumb.js';
import e4a14e5454aee428d75c6ee5ecdbad158 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GlobalCss.js';
import e24ff1d7a160f1caa31e0303f1ed4d39d from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/HeadTags.js';
import e340414824bbc92db458839e05544391b from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Logo.js';
import eb0358dc85a8ecdcdfbc2e3558aecfc90 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Notification.js';
import e090c14012b84efc66a15ecd75be102f6 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e662a001f7916398c42af8bf0b86c7814 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/SearchPage.js';
import edba7eb554aca483f495a14c5879efcda from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCartIcon.js';
import e1842102b952caf4a2a539a72e4d3d027 from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/CustomerIcon.js';
import collection_products from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProducts.js';
import text_block from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlock.js';
import basic_menu from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenu.js';
import banner from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/Banner.js';
import simple_slider from 'file:///C:/Users/Aniket/evershop/node_modules/@evershop/evershop/dist/modules/cms/components/Slideshow.js';
Area.defaultProps.components = {
  body: {
    e075c666a4a2c3ef97b6bd8f2b4961d9e: {
      id: 'e075c666a4a2c3ef97b6bd8f2b4961d9e',
      sortOrder: 1,
      component: { default: e075c666a4a2c3ef97b6bd8f2b4961d9e }
    },
    eb0358dc85a8ecdcdfbc2e3558aecfc90: {
      id: 'eb0358dc85a8ecdcdfbc2e3558aecfc90',
      sortOrder: 10,
      component: { default: eb0358dc85a8ecdcdfbc2e3558aecfc90 }
    }
  },
  content: {
    e65f8743cc7511814b828c8aa64179dba: {
      id: 'e65f8743cc7511814b828c8aa64179dba',
      sortOrder: 0,
      component: { default: e65f8743cc7511814b828c8aa64179dba }
    },
    e662a001f7916398c42af8bf0b86c7814: {
      id: 'e662a001f7916398c42af8bf0b86c7814',
      sortOrder: 10,
      component: { default: e662a001f7916398c42af8bf0b86c7814 }
    }
  },
  head: {
    e4a14e5454aee428d75c6ee5ecdbad158: {
      id: 'e4a14e5454aee428d75c6ee5ecdbad158',
      sortOrder: 5,
      component: { default: e4a14e5454aee428d75c6ee5ecdbad158 }
    },
    e24ff1d7a160f1caa31e0303f1ed4d39d: {
      id: 'e24ff1d7a160f1caa31e0303f1ed4d39d',
      sortOrder: 5,
      component: { default: e24ff1d7a160f1caa31e0303f1ed4d39d }
    }
  },
  headerMiddleCenter: {
    e340414824bbc92db458839e05544391b: {
      id: 'e340414824bbc92db458839e05544391b',
      sortOrder: 10,
      component: { default: e340414824bbc92db458839e05544391b }
    }
  },
  headerMiddleRight: {
    e090c14012b84efc66a15ecd75be102f6: {
      id: 'e090c14012b84efc66a15ecd75be102f6',
      sortOrder: 5,
      component: { default: e090c14012b84efc66a15ecd75be102f6 }
    },
    edba7eb554aca483f495a14c5879efcda: {
      id: 'edba7eb554aca483f495a14c5879efcda',
      sortOrder: 20,
      component: { default: edba7eb554aca483f495a14c5879efcda }
    },
    e1842102b952caf4a2a539a72e4d3d027: {
      id: 'e1842102b952caf4a2a539a72e4d3d027',
      sortOrder: 10,
      component: { default: e1842102b952caf4a2a539a72e4d3d027 }
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
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );