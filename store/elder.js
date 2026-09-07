export const elderModel = {
  id: '',
  name: '',
  relation: '',
  birthday: '',
  phone: '',
  healthTags: [],
  bindStatus: 'waiting'
}

export function calculateAge(birthday) {
  if (!birthday) return ''
  const birth = new Date(birthday)
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--
  return age
}
