import { createRouter, createWebHashHistory } from 'vue-router'
import TimerView from '../views/Timer'
import StopwatchView from '../views/Stopwatch'

const routes = [
  {
    path: '/timer',
    name: 'timer',
    component: TimerView
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
