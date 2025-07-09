const forEachPractice = require('./forEachPractice');

describe('forEachPractice', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('prints people and custom myForEach output', () => {
        forEachPractice();

        // Check people output
        expect(consoleSpy).toHaveBeenCalledWith('Name: John, Age: 25');
        expect(consoleSpy).toHaveBeenCalledWith('Name: Jane, Age: 30');
        expect(consoleSpy).toHaveBeenCalledWith('Name: Jack, Age: 35');

        // Check myForEach output
        expect(consoleSpy).toHaveBeenCalledWith(10);
        expect(consoleSpy).toHaveBeenCalledWith(20);
        expect(consoleSpy).toHaveBeenCalledWith(30);
    });
});