const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should have a name, id, and email', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('johnsmith@example.com');
  });

  it('should have a getName method that returns the name', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getName()).toBe('John Smith');
  });

  it('should have a getId method that returns the id', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getId()).toBe('1');
  });

  it('should have a getEmail method that returns the email', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getEmail()).toBe('johnsmith@example.com');
  });

  it('should have a getRole method that returns "Employee"', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getRole()).toBe('Employee');
  });
});