import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    })

    it('should display unbelievable if strength 20 or greater', () => {
        //Arrange
        let pipe = new StrengthPipe();

        //Act
        let strength = 20;
        
        //Assert
        expect(strength).toBeGreaterThanOrEqual(20);
        expect(pipe.transform(strength)).toEqual(`${strength} (unbelievable)`);
    })
})