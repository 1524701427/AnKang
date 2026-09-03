const BASE_URL = 'https://example.com/api'
export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: /^https?:\/\//.test(options.url) ? options.url : BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: { 'Content-Type': 'application/json', ...(options.header || {}) },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(res.data)
        else reject(res)
      },
      fail: reject
    })
  })
}
