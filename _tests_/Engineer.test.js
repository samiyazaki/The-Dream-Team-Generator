const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer('John Doe', '1', 'john.doe@example.com', 'johndoe');
  });

  test('creates an instance of Engineer', () => {
    expect(engineer).toBeInstanceOf(Engineer);
  });

  test('gets the name of the engineer', () => {
    expect(engineer.getName()).toBe('John Doe');
  });

  test('gets the id of the engineer', () => {
    expect(engineer.getId()).toBe('1');
  });

  test('gets the email of the engineer', () => {
    expect(engineer.getEmail()).toBe('john.doe@example.com');
  });

  test('gets the github username of the engineer', () => {
    expect(engineer.getGithub()).toBe('johndoe');
  });

  test('gets the role of the engineer', () => {
    expect(engineer.getRole()).toBe('Engineer');
  });
});
