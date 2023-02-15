import { useMutation, useQuery } from 'react-query'
import { createTorneo, deleteTorneo, getMysTorneos, getTorneos, updatTorneo } from '../api/torneoApi.js'
import { queryClient } from '../useQuery.js'

export const useGetTorneos = () => (
  useQuery({
    queryKey: ['listaTorneo'],
    queryFn: getTorneos
  })
)
export const useGetMysTorneos = () => (
  useQuery({
    queryKey: ['mistorneos'],
    queryFn: getMysTorneos
  })
)

export const useCreateTorneo = () => (
  useMutation({
    mutationFn: createTorneo,
    onSuccess: () => {
      queryClient.invalidateQueries('listaTorneo')
      queryClient.invalidateQueries('mistorneos')
    }
  })
)

export const useDeleteTorneo = () => (
  useMutation({
    mutationFn: deleteTorneo,
    onSuccess: () => {
      queryClient.invalidateQueries('listaTorneo')
      queryClient.invalidateQueries('mistorneos')
    }
  })
)

export const useUpdateTorneo = () => (
  useMutation({
    mutationFn: updatTorneo,
    onSuccess: () => {
      queryClient.invalidateQueries('listaTorneo')
      queryClient.invalidateQueries('mistorneos')
    }
  })
)