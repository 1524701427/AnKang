import { request } from '@/utils/request'

export const elderApi = {
  profile: () => request({ url: '/elder/profile' }),
  today: () => request({ url: '/elder/today' }),
  medicineCheckIn: data => request({ url: '/medication/check-in', method: 'POST', data }),
  sos: data => request({ url: '/emergency/sos', method: 'POST', data })
}

export const familyApi = {
  dashboard: () => request({ url: '/family/dashboard' }),
  healthSummary: () => request({ url: '/health/summary' }),
  reminders: () => request({ url: '/reminders' }),
  createReminder: data => request({ url: '/reminders', method: 'POST', data }),
  updateReminder: (id,data) => request({ url: `/reminders/${id}`, method: 'PUT', data }),
  deleteReminder: id => request({ url: `/reminders/${id}`, method: 'DELETE' }),
  services: () => request({ url: '/community/services' }),
  careTasks: () => request({ url: '/care/tasks' })
}
