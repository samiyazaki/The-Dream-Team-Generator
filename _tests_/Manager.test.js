const Manager = require("../lib/Manager");

describe('Manager', () => {
  it('Can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  it('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager('Foo', 1, 'test@test.com', 100);
    expect(e.getRole()).toBe(testValue);
  });

  it('Can get name via getName()', () => {
    const testValue = 'Foo';
    const e = new Manager(testValue, 1, 'test@test.com', 100);
    expect(e.getName()).toBe(testValue);
  });

  it('Can get id via getId()', () => {
    const testValue = 1;
    const e = new Manager('Foo', testValue, 'test@test.com', 100);
    expect(e.getId()).toBe(testValue);
  });

  it('Can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Manager('Foo', 1, testValue, 100);
    expect(e.getEmail()).toBe(testValue);
  });

  it('Can get office number via getOfficeNumber()', () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
});
