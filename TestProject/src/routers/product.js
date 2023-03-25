import express from 'express'
import { create, get, getById } from '../controllers/product'

const productRouter = express.Router()

productRouter.get('/products', get)
productRouter.get('/products/:id', getById)
productRouter.post('/products', create)

export default productRouter
