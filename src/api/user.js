import axios from '../libs/axios.js'

export const deleteUser = (name) => axios.delete(`/user/${name}`)