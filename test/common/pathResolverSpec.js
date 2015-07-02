var expect = require("chai").expect;
var PathResolver = require("../../src/common/path-resolver")('mime'); // TODO object as parameter?

describe("Path Resolver", function() {
    describe(".resolver()", function() {
        it("should parse to correct style directory with given css file", function(){
            expect(PathResolver.resolve('test.css')).equal('styles/');
        });
    });
});

