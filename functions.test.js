const { add, isNull, checkValue, createUser, multiply } = require('./functions');

test('should add 1 + 1 to equal 2', () => {
  expect(add(1, 1)).toBe(2);
});

test('should add 2 + 2 to NOT equal 5', () => {
  expect(add(2, 2)).not.toBe(5);
});

test('should be null', () => {
  expect(isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(checkValue(undefined)).toBeFalsy();
});

test('should be Mark Wetzel object', () => {
  expect(createUser()).toEqual({ firstName: 'Mark', lastName: 'Wetzel' });
});

test('should be under 1600', () => {
  const load1 = 450;
  const load2 = 540;

  expect(load1 + load2).toBeLessThan(1600);
});

test('should be no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

test('admin should be in usernames ', () => {
  const usernames = ['mark', 'david', 'admin', 'sally'];
  expect(usernames).toContain('admin');
});

test('should multiply 5 * 5 to equal 25', () => {
  const product = multiply(5, 5);
})

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3); //           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});