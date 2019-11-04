"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strength_pipe_1 = require("./strength.pipe");
describe('StrengthPipe', function () {
    it('should display weak if strength is 5', function () {
        var pipe = new strength_pipe_1.StrengthPipe();
        expect(pipe.transform(5)).toEqual('5 (weak)');
    });
    it('should display strong if strength is 10', function () {
        var pipe = new strength_pipe_1.StrengthPipe();
        expect(pipe.transform(10)).toEqual('10 (strong)');
    });
    it('should display unbelievable if strength 20 or greater', function () {
        //Arrange
        var pipe = new strength_pipe_1.StrengthPipe();
        //Act
        var strength = 20;
        //Assert
        expect(strength).toBeGreaterThanOrEqual(20);
        expect(pipe.transform(strength)).toEqual(strength + " (unbelievable)");
    });
});
//# sourceMappingURL=strength.pipe.spec.js.map