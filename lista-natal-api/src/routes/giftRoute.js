const express = require('express')
const db = require('../db/mysql')

const router = express.Router()
const routePrefix = '/api/gifts'

router.post(routePrefix, async (req, res) => {
    try {
        const gift = req.body
        let sql = `INSERT INTO Gift (DESCRICAO) VALUES ("${gift.description}")`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.status(201).send('created')
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('*', (req, res) => {
    res.status(404).send('Página não encontrada')
})

module.exports = router