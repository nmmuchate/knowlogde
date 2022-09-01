
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/settings', component: () => import('pages/PageSettings.vue') },
      { path: '/home', component: () => import('pages/PageHome.vue') },
      { path: '/exams/:id', component: () => import('pages/PageExams.vue') },
      { path: '/examsSimple/:id', component: () => import('pages/ExamsWithoutTime.vue') },
      { path: '/subjects', component: () => import('pages/PageSubject.vue') },
      { path: '/subjectswithouttime', component: () => import('pages/PageSubjectWithoutTime.vue') },
      { path: '/register', component: () => import('pages/NewAccount.vue') },
      { path: '/ranking', component: () => import('pages/Records.vue') },
      { path: '/editProfile', component: () => import('pages/EditProfile.vue') },
      { path: '/forgot-password', component: () => import('pages/ForgotPassword.vue') },
      { path: '/hardExam/:id', component: () => import('pages/RealExams.vue') },
      { path: '/sendquestion', component: () => import('pages/sendQuestionForFirebaseTemporary.vue') },

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
