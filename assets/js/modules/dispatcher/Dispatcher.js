import flux from 'flux';

class Dispatcher {
    constructor() {
        this.callbacks;
        this.promises;
    }

    register (callback) {
        this.callbacks.push(callback);
        return this.callbacks.length - 1; // index
    }

    dispatch (payload) {
        // First create array of promises for callbacks to reference.
        var resolves = [],
            rejects = []

        this.promises = this.callbacks.map((_, i) => {
            return new Promise((resolve, reject) => {
                resolves[i] = resolve;
                rejects[i] = reject;
            });
        });

        // Dispatch to callbacks and resolve/reject promises.
        this.callbacks.forEach((callback, i) => {
            // Callback can return an obj, to resolve, or a promise, to chain.
            // See waitFor() for why this might be useful.
            Promise.resolve(callback(payload)).then(() => {
                resolves[i](payload);
            }, () => {
                rejects[i](new Error('Dispatcher callback unsuccessful'));
            });
        });

        this.promises = [];
    }
}

export default Dispatcher;
