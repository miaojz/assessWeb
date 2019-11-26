import api from './api'
export const api1 = p1 => api.get('http://127.0.0.1:5000', p1)
// export const api2 = p2 => get('https://xxx/v5/weather?city=taian&key=1b47b16e4aa545eaa55a66f859ac0089', p2)
// export const api3 = p => post('https://xxx/svserver/upload/', p)