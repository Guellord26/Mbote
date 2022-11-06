import axios from "axios"

export const article = (URL_ROOT, fullData) => {
    console.log(URL_ROOT+fullData)
    return axios.get(URL_ROOT+fullData)
  }