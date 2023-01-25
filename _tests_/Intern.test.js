const Intern = require("../lib/Intern");

describe("Intern", () => {
  let intern;

  beforeEach(() => {
    // Create a new instance of Intern before each test
    intern = new Intern("John Doe", 1, "johndoe@gmail.com", "UCLA");
  });

  test("creates an instance of Intern", () => {
    // Test that the Intern class creates an instance with the correct properties and values
    expect(intern.getName()).toBe("John Doe");
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe("johndoe@gmail.com");
    expect(intern.getSchool()).toBe("UCLA");
    expect(intern.getRole()).toBe("Intern");
  });
});
