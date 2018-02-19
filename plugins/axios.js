import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 8081}`
}
options.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

export default axios.create(options)
