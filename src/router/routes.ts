import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/presentation',
        component: () => import('src/pages/Presentation.vue'),
      },
      {
        path: '/questionnaire/:model/:person_type',
        component: () => import('src/pages/Questionnaire.vue'),
        props:true
      },
      {
        path: '/score',
        component: () => import('src/pages/Score.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
