import * as reducers from '../src';

describe('Reducers factory', () => {
    it('requestReducerFactory should be a function', () => {
        expect(reducers.requestReducerFactory).toBeInstanceOf(Function);
    });

    it('toggleReducerFactory should be a function', () => {
        expect(reducers.toggleReducerFactory).toBeInstanceOf(Function);
    });
});
