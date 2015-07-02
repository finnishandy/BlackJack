var expect = require("chai").expect;
var PathResolver = require("../../src/common/path-resolver")('mime'); // TODO object as parameter?

describe("PathResolver", function() {

    describe(".resolve()", function() {
        it("should parse to correct style directory with given css file", function(){
            expect(PathResolver.resolve('test.css')).equal('styles/');
        });

        it("should parse to correct script directory with given javascript file", function(){
            expect(PathResolver.resolve('test.js')).equal('src/');
        });

        it("should parse to correct script directory with given javascript file", function(){
            expect(PathResolver.resolve.bind(PathResolver, 'test.pdf')).to.throw('undefined mime type');
        });
    });

});

