const Manager = require("../lib/Manager");

describe('Manager', () => { // Test that the officeNumber can be set via the constructor argument
  it('Can set office number via constructor argument', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  it('getRole() should return "Manager"', () => {
    // Test that the getRole method returns "Manager"
    const testValue = "Manager";
    const e = new Manager('Foo', 1, 'test@test.com', 100);
    expect(e.getRole()).toBe(testValue);
  });

  it('Can get name via getName()', () => {// Test that the getName method returns the correct name
    const testValue = 'Foo';
    const e = new Manager(testValue, 1, 'test@test.com', 100);
    expect(e.getName()).toBe(testValue);
  });

  it('Can get id via getId()', () => {  // Test that the getId method returns the correct id
    const testValue = 1;
    const e = new Manager('Foo', testValue, 'test@test.com', 100);
    expect(e.getId()).toBe(testValue);
  });

  it('Can get email via getEmail()', () => {
    // Test that the getEmail method returns the correct email
    const testValue = 'test@test.com';
    const e = new Manager('Foo', 1, testValue, 100);
    expect(e.getEmail()).toBe(testValue);
  });

  it('Can get office number via getOfficeNumber()', () => {  // Test that the getOfficeNumber method returns the correct officeNumber

    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
});
