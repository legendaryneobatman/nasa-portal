import axios from 'axios'
import { IMediaData } from '@/types/API/media'

const axiosInstance = axios.create({
  baseURL: 'https://api.nasa.gov'
})

axiosInstance.interceptors.request.use((request) => {
  const params = request.params ? request.params : {}
  params.api_key = 'yShiasnaxhyrR6uap3k9GAPEHMjGu504sGPebJM5'
  request.params = params
  return request
}, (error) => Promise.reject(error))

export const MediaOfDay = async (): Promise<IMediaData> => {
  try {
    const { data } = await axiosInstance.get('/planetary/apod', {
      params: {
        thumbs: true
      }
    })
    return data
  } catch (e: any) {
    throw Error(e.message)
  }
}

export const MediaGallery = async (count = 10): Promise<IMediaData[]> => {
  try {
    const { data } = await axiosInstance.get('/planetary/apod', {
      params: {
        count
      }
    })
    return data
  } catch (e: any) {
    throw Error(e.message)
  }
}
