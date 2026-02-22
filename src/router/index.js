import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/type',
    name: 'type',
    component: () => import('../views/Type.vue')
  },
  {
    path: '/employee',
    name: 'employee',
    component: () => import('../views/Employee.vue')
  }
  ,
  {
    path: '/add_customer',
    name: 'add_customer',
    component: () => import('../views/Add_customer.vue')
  },
  {
    path: '/add_employee',
    name: 'add_employee',
    component: () => import('../views/Add_employee.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/sh_product',
    name: 'sh_product',
    component: () => import('../views/sh_product.vue')
  },
  {
    path: '/show_product',
    name: 'show_product',
    component: () => import('../views/show_product.vue')
  },
  {
    path: '/customer_crud',
    name: 'customer_crud',
    component: () => import('../views/Customer_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  {
    path: '/employee_crud',
    name: 'employee_crud',
    component: () => import('../views/employee_crud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  }
  ,
  {
    path: '/productedit',
    name: 'productedit',
    component: () => import('../views/product_edit.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login

  },
  {
    path: '/employeecrud',
    name: 'employeecrud',
    component: () => import('../views/Employeecrud.vue'),
    meta: { requiresAuth: true }   // ✅ บังคับ login
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/ProductDetail',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* ✅ ROUTE GUARD */
router.beforeEach((to, from, next) => {

  const isLoggedIn = localStorage.getItem("adminLogin")

  // ถ้าหน้านั้นต้อง login แต่ยังไม่ login
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/Login')
  } 
  // ถ้า login แล้วแต่พยายามเข้าหน้า login
  else if (to.path === '/Login' && isLoggedIn) {
    next('/')   // หรือ dashboard
  }
  else {
    next()
  }
})

export default router
