import axios from 'axios'
import { Promise } from 'es6-promise'
import ls from 'local-storage'

const client = {
  api: {},
  auth: false,
  apiRoot: '//orcseven.com/api/',
  withAuth () {
    client.auth = true
    return client
  },
  withoutAuth () {
    client.auth = false
    return client
  }
}

const httpMethods = ['get', 'post', 'put', 'delete']

httpMethods.forEach((verb) => {
  client[verb] = (url, data = {}, headers = {}) => {
    headers = client.auth ? Object.assign({}, { 'Authorization': `Bearer ${ls('access_token')}` }, headers) : headers
    return new Promise((resolve, reject) => {
      axios({
        method: verb,
        url,
        data,
        headers
      }).then((res) => {
        client.auth = false
        resolve(res.data)
      }).catch((error) => {
        client.auth = false
        if (error.response) {
          reject(error.response.data)
        } else {
          reject(error)
        }
      })
    })
  }
})

const api = new Promise((resolve, reject) => {
  client.withoutAuth().get(`${client.apiRoot}api/fetchApiPolicy`).then((res) => {
    console.log('api', res)
    resolve(res)
  }).catch((error) => {
    console.log('ERROR', error)
    reject(error)
  })
})

client.api = api.then((res) => {
  return res
})

export default client
