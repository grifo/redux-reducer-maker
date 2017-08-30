import toggleReducerFactory from '../../src/reducers/toggleReducerFactory';

describe('Toggle reducer factory', () => {
    let reducer;
    beforeEach(() => {
        reducer = toggleReducerFactory({
            TURNON_TYPE: 'TURNON',
            TURNOFF_TYPE: 'TURNOFF',
            TOGGLE_TYPE: 'TOGGLE',
        });
    });

    it('Should create a reducer', () => {
        expect(reducer).toBeInstanceOf(Function);
    });

    it('Should return true on call turnon', () => {
        expect(
            reducer(undefined, { type: 'TURNON' }),
        ).toBeTruthy();
    });

    it('Should return true on call turnoff', () => {
        expect(
            reducer(undefined, { type: 'TURNOFF' }),
        ).toBeFalsy();
    });

    it('Should return true toggle with true', () => {
        expect(
            reducer(undefined, { type: 'TOGGLE', toggle: true }),
        ).toBeTruthy();
    });

    it('Should return default value when dont match the type', () => {
        expect(
            reducer(undefined, { type: 'ANY' }),
        ).toBeFalsy();
    });
});
