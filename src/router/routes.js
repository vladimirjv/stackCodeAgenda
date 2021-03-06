/* jshint esversion:6 */
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/contacts.vue') },
      { path: 'add', component: () => import('pages/addContact.vue') },
      { path: 'contact/:id', component: () => import('pages/singleContact.vue') },
    ]
  },
  // {
  //   path:'/contacto',
  //   component: () => import('layouts/singleContact.vue'),
  //   children: [
  //     { path: '/:id', component: () => import('pages/singleContact.vue') },
  //   ]
  // }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
