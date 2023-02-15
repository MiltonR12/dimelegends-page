import axios from '../libs/axios'


export const getUsers = async () => {
  const data = await axios.get('/user')
  return data.data
}

export const loginRequest = async ({email, password}) => {
  const res = await axios.post('/login', {email, password})
  return res.data
}

export const createUsuario = async (user) => {
  const res = await axios.post('/user', user)
  return res.data
}