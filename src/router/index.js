import { createRouter, createWebHashHistory } from 'vue-router'
import TimerView from '../views/Timer'
import StopwatchView from '../views/Stopwatch'

const routes = [
  {
    path: '/timer/:date?',
    name: 'timer',
    component: TimerView,
    alias: '/timer'
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: StopwatchView
  },
  {
    path: '/',
    redirect: '/timer'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
