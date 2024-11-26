
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/step-one"
  },
  {
    "renderMode": 2,
    "route": "/step-two"
  },
  {
    "renderMode": 2,
    "route": "/step-three"
  },
  {
    "renderMode": 2,
    "route": "/step-four"
  },
  {
    "renderMode": 2,
    "route": "/step-confirmation"
  }
],
  assets: new Map([
['index.csr.html', {size: 2404, hash: 'f5b8fb17630ac9a0e8c42bb172e44ce153547b2a3e60c2b79ae0a82185f66c76', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1006, hash: '764abc8a5e12fa1d55fc52761a8f8d828269489b8813380355fc601b2c5f4b64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['step-one/index.html', {size: 33210, hash: '23f6262732397dfe119f3c7c93bea7a864a387f4dc3fc4aba352fd141a3d21c5', text: () => import('./assets-chunks/step-one_index_html.mjs').then(m => m.default)}], 
['step-three/index.html', {size: 35346, hash: '15a744ae76127f114592621bebcdbeeaccbd94b8cfd36df955b3f7eba3adf464', text: () => import('./assets-chunks/step-three_index_html.mjs').then(m => m.default)}], 
['step-two/index.html', {size: 40461, hash: '64ae03c0ac00b73dc4f5a3f1fe3622f0ed3929a77c012dcb88b3329cfaad35d3', text: () => import('./assets-chunks/step-two_index_html.mjs').then(m => m.default)}], 
['step-four/index.html', {size: 33866, hash: 'ce78cc77c69828cfd7b7b41dbe5aceeda5d0e2902c54b795f6dc8f7c4891a8d4', text: () => import('./assets-chunks/step-four_index_html.mjs').then(m => m.default)}], 
['index.html', {size: 33210, hash: '23f6262732397dfe119f3c7c93bea7a864a387f4dc3fc4aba352fd141a3d21c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['step-confirmation/index.html', {size: 33607, hash: 'e42cbdb7b293c1c7017fef9f5ce1dffdacb6702ca60d21b3ac103a7c8fc0c627', text: () => import('./assets-chunks/step-confirmation_index_html.mjs').then(m => m.default)}], 
['styles-3WAPXBXQ.css', {size: 15068, hash: 'fau4cMPRaVk', text: () => import('./assets-chunks/styles-3WAPXBXQ_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
