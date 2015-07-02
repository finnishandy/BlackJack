var expect = require("chai").expect;
var PathResolver = require("../../src/common/path-resolver")('mime');

describe("Path Resolver", function() {
    describe(".resolver()", function() {
        it("should parse to correct style directory with given css file", function(){
            expect(PathResolver.resolve()).equal('/styles/stylys.css');
        });
    });
});

