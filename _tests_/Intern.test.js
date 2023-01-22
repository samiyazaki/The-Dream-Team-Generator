const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John Doe', 1, 'johndoe@gmail.com', 'UCLA');

    expect(intern.name).toBe('John Doe');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('johndoe@gmail.com');
    expect(intern.school).toBe('UCLA');
    expect(intern.getRole()).toBe('Intern');
});