import { fastify } from 'fastify'
import { DataBaseMemory } from './database-memory.js'

const server = fastify()

const database = new DataBaseMemory()



// POST http://localhost:3333/videos/3

// PUT Route Parameter

// Request Body

server.post('/videos', (request, replay) => {

    const { title, description, duration } = request.body

    database.create({
        title,
        description,
        duration,
    })

    return replay.status(201).send()
})


server.get('/videos', () => {
    const videos = database.list()


    console.log(videos)

    return videos

})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body

    const video = database.update(videoId, {
        title,
        description,
        duration,

    })

    return reply.status(204).send()
})

server.delete('/videos/:id', () => {
    return 'Hello Delete'
})

server.listen({
    port: 3333,
})



// 46:00