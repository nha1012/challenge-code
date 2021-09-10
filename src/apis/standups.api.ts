import axios from "axios"
import { API_URL } from "src/constants/api"

export const getStandupsListApi = ()  =>{
  return axios.get(`${API_URL}/standups`)
}
export const getStandupItemById = (id: string): Promise<StandupItem|undefined>  =>{
  return new Promise((resolve, reject)=>{
    axios.get(`${API_URL}/standups`)
      .then((result)=>{
        const standups: StandupItem[] = result.data[0].standups;
        const standup = standups.find(item=> item.id === id)
        resolve(standup)
      })
      .catch(err=>reject(err))
  })
}
