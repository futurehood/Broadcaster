export class Broadcaster {

    #listenerObject

    constructor (listenerObject) {
        this.#application = listenerObject
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
