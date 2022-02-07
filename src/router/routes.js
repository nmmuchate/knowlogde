
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/settings', component: () => import('pages/PageSettings.vue') },
      { path: '/home', component: () => import('pages/PageHome.vue') },
      { path: '/exams', component: () => import('pages/PageExams.vue') },
      { path: '/subjects', component: () => import('pages/PageSubject.vue') },
      { path: '/countdown', component: () => import('pages/PageCountDown.vue') },
      { path: '/register', component: () => import('pages/NewAccount.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/ranking', component: () => import('pages/Records.vue') },
      { path: '/crtnqftst', component: () => import('pages/CreateNewQuestionsForTest.vue') },
      { path: '/sets', component: () => import('pages/PageSets.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
