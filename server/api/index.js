import { Router } from 'express'
import axios from 'axios'

const router = Router()
const API_BASE_URL = 'http://localhost:8081/services'
router.post('/auth', function (req, res, next) {
  const defpar = {
    grant_type: 'password',
    client_id: process.env.KNOT_CLIENT_ID,
    client_secret: process.env.KNOT_CLIENT_SECRET,
    username: req.body.email,
    password: req.body.password,
    scope: '*'
  }
  console.log(defpar)
  axios.post(API_BASE_URL, {REQ_CONTEX: 2000, REQ_ACTION: 2010, REQ_INPUTS: {email: req.body.email, password: req.body.password}}).then((response) => {
    console.log(response.data)
    res.send(response.data)
  }).catch((e) => {
    res.status(500).send({ error: 'Invalid credentials' })
  })
})

export default router
