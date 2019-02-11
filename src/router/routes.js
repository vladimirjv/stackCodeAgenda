
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/addContact.vue') },
      { path: 'add',component: () => import('pages/addContact.vue') },
      { path: 'contacts', component: () => import('pages/contacts.vue') },
    ]
  },
  {
    path:'/contacto',
    component: () => import('layouts/singleContact.vue'),
    children: [
      { path: '', component: () => import('pages/singleContact.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
