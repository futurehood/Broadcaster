export class Broadcaster {

    #application

    constructor (application) {
        this.#application = application
    }

    async broadcastEvent (eventName, args = []) {
        if (args.constructor !== Array) {
            args = [args]
        }
        const listener = this.#application[eventName]
        if (listener) {
            return await listener.bind(this.#application)(...args)
        }
        return false
    }

}
