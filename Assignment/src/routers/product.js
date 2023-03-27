import express from 'express'
import { get, create, getById, update, remove } from '../controllers/product'

const productRouter = express.Router()

productRouter.get('/products', get)
productRouter.get('/products/:id', getById)
productRouter.post('/products', create)
productRouter.put('/products/:id', update)
productRouter.delete('/products/:id', remove)

export default productRouter
