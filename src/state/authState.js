import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useToken = create(
  persist(
    (set, get) => ({
      token: '',
      isAuth: false,
      user: '',
      setToken: (value, name) => set((state) => ({
        token: value,
        isAuth: true,
        user: name
      })),
      reiniciar: () => set(state => ({
        token: '',
        isAuth: false,
        user: ''
      }))
    }),
    {
      name: 'token'
    }
  )
)

export const useStateTorneo = create((set) => ({
  lista: [],
  setLista: (value) => set((state) => ({
    lista: value
  }))
}))

export const useStateUserTorneo = create((set) => ({
  lista: [],
  setLista: (value) => set((state) => ({
    lista: value
  }))
}))