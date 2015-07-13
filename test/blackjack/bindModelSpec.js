define(['bind-model', 'jquery'], function(BindModel) {

    describe('a bind model', function() {

        var model, bindModel, el;

        beforeEach(function() {
            model = {foo: function() { return 'bar'; }};
            el = $('<input type="button">');
            bindModel = new BindModel(model, el);
        });

        it('should be changed on an event', function() {
            bindModel.bindEvents(['click'], 'foo');
            el.click();
            expect(bindModel.lastEvent()).toEqual({event: 'click', value: undefined});
        });


    });

});


