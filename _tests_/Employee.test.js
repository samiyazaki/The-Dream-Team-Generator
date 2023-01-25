const Employee = require('../lib/Employee');

describe('Employee', () => {  // Test that the Employee class has the correct properties and values
  it('should have a name, id, and email', () => {
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.name).toBe('John Smith');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('johnsmith@example.com');
  });

  it('should have a getName method that returns the name', () => {  // Test that the getName method returns the correct name
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getName()).toBe('John Smith');
  });

  it('should have a getId method that returns the id', () => {  // Test that the getId method returns the correct id
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getId()).toBe('1');
  });

  it('should have a getEmail method that returns the email', () => {   // Test that the getEmail method returns the correct email
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getEmail()).toBe('johnsmith@example.com');
  });

  it('should have a getRole method that returns "Employee"', () => {   // Test that the getRole method returns "Employee"
    const employee = new Employee('John Smith', '1', 'johnsmith@example.com');
    expect(employee.getRole()).toBe('Employee');
  });
});