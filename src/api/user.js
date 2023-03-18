import axios from '../libs/axios.js'

export const updateName = (name) => {
  axios.put(`/user/`, {name: name})
}

export const deleteUser = (name) => axios.delete(`/user/${name}`)