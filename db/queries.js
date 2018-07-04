const database = require('./knex')

module.exports = {

    //List
    listCamping() {
        return database('camping')
    },
    listHiking() {
        return database('hiking')
    },
    listBackpacking() {
        return database('backpacking')
    },
    listRockClimbing() {
        return database('rock-climbing')
    },
    listSkiing() {
        return database('skiing')
    },
    listSnowboarding() {
        return database('snowboarding')
    },
    listMountainBiking() {
        return database('mountain-biking')
    },
    listSnowshoeing() {
        return database('snowshoeing')
    },
    listIceClimbing() {
        return database('ice-climbing')
    },


    //Read
    readCamping(id) {
        return database('camping').where('id', id).first()
    },
    readHiking(id) {
        return database('hiking').where('id', id).first()
    },
    readBackpacking(id) {
        return database('backpacking').where('id', id).first()
    },
    readRockClimbing(id) {
        return database('rock-climbing').where('id', id).first()
    },
    readSkiing(id) {
        return database('skiing').where('id', id).first()
    },
    readSnowboarding(id) {
        return database('snowboarding').where('id', id).first()
    },
    readMountainBiking(id) {
        return database('mountain-biking').where('id', id).first()
    },
    readSnowshoeing(id) {
        return database('snowshoeing').where('id', id).first()
    },
    readIceClimbing(id) {
        return database('ice-climbing').where('id', id).first()
    },


    //Create
    createCamping(tool) {
        return database('camping').insert(tool, '*')
    },
    createHiking(tool) {
        return database('hiking').insert(tool, '*')
    },
    createBackpacking(tool) {
        return database('backpacking').insert(tool, '*')
    },
    createRockClimbing(tool) {
        return database('rock-climbing').insert(tool, '*')
    },
    createSkiing(tool) {
        return database('skiing').insert(tool, '*')
    },
    createSnowboarding(tool) {
        return database('snowboarding').insert(tool, '*')
    },
    createMountainBiking(tool) {
        return database('mountain-biking').insert(tool, '*')
    },
    createSnowshoeing(tool) {
        return database('snowshoeing').insert(tool, '*')
    },
    createIceClimbing(tool) {
        return database('ice-climbing').insert(tool, '*')
    },


    //Update
    updateCamping(id, tool) {
        return database('camping').where('id', id).update(tool, '*')
    },
    updateHiking(id, tool) {
        return database('hiking').where('id', id).update(tool, '*')
    },
    updateBackpacking(id, tool) {
        return database('backpacking').where('id', id).update(tool, '*')
    },
    updateRockClimbing(id, tool) {
        return database('rock-climbing').where('id', id).update(tool, '*')
    },
    updateSkiing(id, tool) {
        return database('skiing').where('id', id).update(tool, '*')
    },
    updateSnowboarding(id, tool) {
        return database('snowboarding').where('id', id).update(tool, '*')
    },
    updateMountainBiking(id, tool) {
        return database('mountain-biking').where('id', id).update(tool, '*')
    },
    updateSnowshoeing(id, tool) {
        return database('snowshoeing').where('id', id).update(tool, '*')
    },
    updateIceClimbing(id, tool) {
        return database('ice-climbing').where('id', id).update(tool, '*')
    },


    //Delete
    deleteCamping(id) {
        return database('camping').where('id', id).del()
    },
    deleteHiking(id) {
        return database('hiking').where('id', id).del()
    },
    deleteBackpacking(id) {
        return database('backpacking').where('id', id).del()
    },
    deleteRockClimbing(id) {
        return database('rock-climbing').where('id', id).del()
    },
    deleteSkiing(id) {
        return database('skiing').where('id', id).del()
    },
    deleteSnowboarding(id) {
        return database('snowboarding').where('id', id).del()
    },
    deleteMountainBiking(id) {
        return database('mountain-biking').where('id', id).del()
    },
    deleteSnowshoeing(id) {
        return database('snowshoeing').where('id', id).del()
    },
    deleteIceClimbing(id) {
        return database('ice-climbing').where('id', id).del()
    }
}