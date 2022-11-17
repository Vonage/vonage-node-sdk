import * as main from '../lib';

test('main exports', () => {
    expect(main.JWT).toBeDefined();
});

test('token generator exports', () => {
    expect(main.tokenGenerate).toBeDefined();
});

