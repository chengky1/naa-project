import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import User from '@/views/users/index.vue';
import Role from '@/views/roles/index.vue';
import Config from '@/views/configs/index.vue';
import Profile from '@/views/profiles/index.vue';
import Delegation from '@/views/delegations/index.vue';
import Audit from '@/views/audits/index.vue';
import Documentation from '@/views/documentations/index.vue';
import Report from '@/views/reports/index.vue';
import Attendance from '@/views/attendances/index.vue';
import Location from '@/views/locations/index.vue';
import Favorite from '@/views/favorites/index.vue';
import Archive from '@/views/archives/index.vue';
import Accessibility from '@/views/accessibilitys/index.vue';
import Backup from '@/views/backups/index.vue';
import Log_File from '@/views/log_files/index.vue';

import { auth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
    },
    {
      path: '/role',
      name: 'role',
      component: Role,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auths/login.vue'),
    },
    {
      path: '/config',
      name: 'config',
      component: Config,
    },
    {
      path: '/delegation',
      name: 'delegation',
      component: Delegation,
    },
    {
      path: '/audit',
      name: 'audit',
      component: Audit,
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation,
    },
    {
      path: '/report',
      name: 'report',
      component: Report,
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: Attendance,
    },
    {
      path: '/location',
      name: 'location',
      component: Location,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive,
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: Accessibility,
    },
    {
      path: '/backup',
      name: 'backup',
      component: Backup,
    },
    {
      path: '/log_file',
      name: 'log_file',
      component: Log_File,
    },
    
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/auths/not_found.vue'),
    }
  ]
});

router.beforeEach((to, from, next) => {
  const defineAuth = auth();
  if(to.name == 'login'){
    if(defineAuth.isAuth != true){
      next();
    }
  } else {
    if(to.name == 'notFound'){
      next();
    } else {
      if(defineAuth.isAuth == true){
        next();
      } else {
        next({ name : 'login' });
      }
    }
  }
  next();
});

export default router
