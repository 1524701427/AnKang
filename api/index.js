import { request } from '@/utils/request'

export const authApi = {
  register: data => request({ url: '/auth/register', method: 'POST', data }),
  login: data => request({ url: '/auth/login', method: 'POST', data }),
  logout: () => request({ url: '/auth/logout', method: 'POST' })
}

export const elderApi = {
  list: () => request({ url: '/elders' }),
  create: data => request({ url: '/elders', method: 'POST', data }),
  invitePreview: token => request({ url: `/elder-invites/${token}` }),
  acceptInvite: (token, clientId) => request({ url: `/elder-invites/${token}/accept`, method: 'POST', data: { clientId } }),
  clientProfile: clientId => request({ url: `/elder-client/profile?clientId=${encodeURIComponent(clientId)}` }),
  clientReminders: clientId => request({ url: `/elder-client/reminders?clientId=${encodeURIComponent(clientId)}` }),
  completeReminder: (clientId, reminderId) => request({ url: `/elder-client/reminders/${reminderId}/complete`, method: 'POST', data: { clientId } }),
  sos: (clientId, location = {}) => request({ url: '/elder-client/sos', method: 'POST', data: { clientId, ...location } })
}

export const reminderApi = {
  list: elderId => request({ url: `/elders/${elderId}/reminders` }),
  create: (elderId, data) => request({ url: `/elders/${elderId}/reminders`, method: 'POST', data }),
  update: (elderId, id, data) => request({ url: `/elders/${elderId}/reminders/${id}`, method: 'PUT', data })
}

export const healthApi = {
  list: elderId => request({ url: `/elders/${elderId}/health-records` }),
  create: (elderId, data) => request({ url: `/elders/${elderId}/health-records`, method: 'POST', data })
}
