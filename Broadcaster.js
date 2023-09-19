export class Broadcaster {

    #listenerObject

    constructor (listenerObject) {
        this.#listenerObject = listenerObject
    }

    async broadcastEvent (eventName, args = []) {
        if (args.constructor !== Array) {
            args = [args]
        }
        const listener = this.#listenerObject[eventName]
        if (listener) {
            return await listener.bind(this.#listenerObject)(...args)
        }
        return false
    }

}
