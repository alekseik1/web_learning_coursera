module.exports = {

    subscribers: [],

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        this.subscribers.push({
            event: event,
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        for (let i=0; i<this.subscribers.length; i++) {
            const subscriber_obj = this.subscribers[i];
            if (subscriber_obj.event === event && subscriber_obj.subscriber === subscriber) {
                this.subscribers.splice(i, 1);
                i--;
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        for (subs_obj of this.subscribers) {
            if (subs_obj.event === event)
                subs_obj.handler.call(subs_obj.subscriber);
        }
        return this;
    }
};
