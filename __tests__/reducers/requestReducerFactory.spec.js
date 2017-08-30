import requestReducerFactory from '../../src/reducers/requestReducerFactory';

describe('Request reducer factory', () => {
    let reducer;
    beforeEach(() => {
        reducer = requestReducerFactory({
            REQUEST_TYPE: 'REQUEST',
            SUCCESS_TYPE: 'SUCCESS',
            FAILURE_TYPE: 'FAILURE',
        });
    });

    it('Should create a reducer', () => {
        expect(reducer).toBeInstanceOf(Function);
    });

    it('Should return isFetching true on call request', () => {
        expect(
            reducer(undefined, { type: 'REQUEST' }),
        ).toHaveProperty('isFetching', true);
    });

    it('Should return correctly on call success', () => {
        expect(
            reducer(undefined, { type: 'SUCCESS' }),
        ).toEqual({
            isFetching: false,
            error: null,
        });
    });

    it('Should return correctly on call failure', () => {
        expect(
            reducer(undefined, { type: 'FAILURE', error: 'message' }),
        ).toEqual({
            isFetching: false,
            error: 'message',
        });
    });

    it('Should return default value when dont match the type', () => {
        expect(
            reducer(undefined, { type: 'ANY' }),
        ).toEqual({
            isFetching: true,
            error: null,
        });
    });
});
