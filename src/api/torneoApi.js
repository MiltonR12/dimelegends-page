import axios from "../libs/axios";

export const getTorneos = async () => {
  const res = await axios.get('/torneos/list')
  return res.data
}

export const getMysTorneos = async () => {
  const res = await axios.get('/torneos')
  return res.data
}

export const createTorneo = (torneo) => axios.post('/torneos', torneo)

export const deleteTorneo = (id) => axios.delete(`/torneos/${id}`)

export const updatTorneo = (torneo) => axios.put(`/torneos/${torneo.id}`, torneo)