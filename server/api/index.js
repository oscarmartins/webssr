import { Router } from 'express'
import axios from 'axios'

const router = Router()
const API_BASE_URL = '//orcseven.com/api/services'
router.post('/auth', async function (req, res, next) {
/**
  const defpar = {
    grant_type: 'password',
    client_id: process.env.KNOT_CLIENT_ID,
    client_secret: process.env.KNOT_CLIENT_SECRET,
    username: req.body.email,
    password: req.body.password,
    scope: '*'
  } **/
  const payload = {REQ_CONTEX: 2000, REQ_ACTION: 2010, REQ_INPUTS: {email: req.body.email, password: req.body.password}}
  await axios.post(API_BASE_URL, payload).then((response) => {
    console.log(response.data)
    res.send(response.data)
  }).catch((e) => {
    const msg = {message: 'Network Error'}
    if (e.response) {
      msg.message = e.response.data.error
    }
    res.status(500).send(msg)
  })
})

export default router
