/**
 * Created by sakariruoho on 7/13/15.
 */
define(['observe'], function() {

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
        },
        bindAll: function(scope) {
            (scope || document).querySelectorAll('input[data-bind]').forEach(function(el) {
                this.bindEvents('change', el);
            });
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
