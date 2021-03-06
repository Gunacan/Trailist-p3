const express = require('express')

const router = express.Router()

const queries = require('../db/queries')

function isValidId (req, res, next) {
    if (!isNaN(req.params.id)) return next()
    next(new Error('Invalid ID'))
}

function validTool (tool) {
    const hasName = typeof tool.name == 'string' && tool.name.trim() != ''
    const hasImportance = typeof tool.must_have == 'boolean'
    return hasName && hasImportance
}

router.get('/', (req, res) => {
    queries.listIceClimbing().then(tools => {
        res.json(tools)
    })
})

router.get('/:id', isValidId, (req, res, next) => {
    queries.readIceClimbing(req.params.id).then(tool => {
        if (tool) {
            res.json(tool)
        } else {
            next()
        }
    })
})

router.post('/', (req, res, next) => {
    if(validTool(req.body)) {
        queries.createIceClimbing(req.body).then(tools => {
            res.json(tools[0])
        })
    } else {
        next(new Error('Invalid tool'))
    }
})

router.put('/:id', isValidId, (req, res, next) => {
    if(validTool(req.body)) {
        queries.updateIceClimbing(req.params.id, req.body).then(tools => {
            res.json(tools[0])
        })
    } else {
        next(new Error('Invalid tool'))
    }
})

router.delete('/:id', isValidId, (req, res, next) => {
    queries.deleteIceClimbing(req.params.id).then(() => {
        res.json({
            deleted: true
        })
    })
})

module.exports = router