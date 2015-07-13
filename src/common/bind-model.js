/**
 * Created by sakariruoho on 7/13/15.
 */
define(function() {

    function BindModel(model, el) {
        this.model = model || {};
        this.el = el || document;
    }


    BindModel.prototype = {

        setModel: function(model) {
            if (!model) {throw error('model needs to be defined!'); }
            this.model = model;
        },

        setElement: function(el) {
            this.el = el;
        },

        bindEvents: function(events, func) {
            events.forEach(function(event) {
                addListener(this.el, event, func)
            })
        }

    };

    var addListener = function(el, event, listener) {
        if (el.addEventListener) {
            el.addEventListener(event, listener, false);
        } else if (el.attachEvent)  {
            el.attachEvent(event, listener);
        }
        return el;
    };

    return BindModel;



});
