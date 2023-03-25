import Product from "../model/product"

export const get = async (req, res) => {
    try {
        const data = await Product.find()
        res.send({
            message: "Get products successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findById(id)
        res.send({
            message: "Get products successfully",
            data: data
        })
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const data = await Product.create(body)
        if (data) {
            res.send({
                message: "Create products successfully",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Error"
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const data = await Product.findByIdAndUpdate(id, body)
        if (data) {
            res.send({
                message: "Update products successfully",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Product is not existed"
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Product.findByIdAndRemove(id)
        if (data) {
            res.send({
                message: "Delete successfully",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Product is not existed"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error
        })
    }
}
