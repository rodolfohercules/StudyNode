import { randomUUID } from "node:crypto"

export class DataBaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.entries())
    }


    create(video) {
        const videoId = randomUUID()

        this.#videos.set(videoId, video)
    }


    update(id, video) {
        this.#videos.set(id, video)
    }



    delete(id) {
        this.#videos.delete(id)
    }

}