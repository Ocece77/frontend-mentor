
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/project19"
  },
  {
    "renderMode": 2,
    "route": "/project19/step-one"
  },
  {
    "renderMode": 2,
    "route": "/project19/step-two"
  },
  {
    "renderMode": 2,
    "route": "/project19/step-three"
  },
  {
    "renderMode": 2,
    "route": "/project19/step-four"
  },
  {
    "renderMode": 2,
    "route": "/project19/step-confirmation"
  }
],
  assets: new Map([
['index.csr.html', {size: 2414, hash: '17320f6e57c4033c11da87693046e6c303daf415dc93ab5c90d56a24cc018227', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1016, hash: 'c42562e289f8dda9b2914a58ce67013d1e57417b981a95d65913c85efbcd8319', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['step-one/index.html', {size: 33420, hash: 'c27c6f9483369e370e5d5b095e7a3a378312ad185900fb9d642ce6a53fec6a0f', text: () => import('./assets-chunks/step-one_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 33420, hash: 'c27c6f9483369e370e5d5b095e7a3a378312ad185900fb9d642ce6a53fec6a0f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['step-four/index.html', {size: 34086, hash: 'cabd1d57a9ba6dd6f7f3eb2d0b0bc0eb8cd7fedb218a953d13099388c696275f', text: () => import('./assets-chunks/step-four_index_html.mjs').then(m => m.default)}], 
['step-two/index.html', {size: 40671, hash: 'c320cf0181069a96211fd4055d6a7a1e75616bbfdaa46aab50c49fc2362f889f', text: () => import('./assets-chunks/step-two_index_html.mjs').then(m => m.default)}], 
['step-confirmation/index.html', {size: 33817, hash: 'f40085a5a70fb96db444ab49d4b3afa65cff4303955240635974e4525e581f15', text: () => import('./assets-chunks/step-confirmation_index_html.mjs').then(m => m.default)}], 
['step-three/index.html', {size: 35556, hash: 'ce8c08e3ea2c6c9720996e55949d592fc3b363b8082d52e03aeb1273d2fef52b', text: () => import('./assets-chunks/step-three_index_html.mjs').then(m => m.default)}], 
['styles-3WAPXBXQ.css', {size: 15068, hash: 'fau4cMPRaVk', text: () => import('./assets-chunks/styles-3WAPXBXQ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
