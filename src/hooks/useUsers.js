import { useMutation, useQuery } from 'react-query'
import { createUsuario, getUsers, loginRequest } from '../api/auth.js'
import { deleteUser } from '../api/user.js'

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['lista'],
    queryFn: getUsers
  })
}

export const useCreateUsuario = () => {
  return useMutation({
    mutationFn: createUsuario
  })
}

export const useLoginRequest = () => {
  return useMutation({
    mutationFn: loginRequest
  })
}

export const useDeleteUser = () => (
  useMutation({
    mutationFn: deleteUser
  })
)