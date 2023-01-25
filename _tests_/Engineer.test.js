const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  let engineer;

  beforeEach(() => {
    // Create a new instance of Engineer before each test
    engineer = new Engineer("John Doe", "1", "john.doe@example.com", "johndoe");
  });

  test("creates an instance of Engineer", () => {
    // Test that the Engineer class creates an instance
    expect(engineer).toBeInstanceOf(Engineer);
  });

  test("gets the name of the engineer", () => {
    // Test that the getName method returns the correct name
    expect(engineer.getName()).toBe("John Doe");
  });

  test("gets the id of the engineer", () => {
    // Test that the getId method returns the correct id

    expect(engineer.getId()).toBe("1");
  });

  test("gets the email of the engineer", () => {
    // Test that the getEmail method returns the correct email
    expect(engineer.getEmail()).toBe("john.doe@example.com");
  });

  test("gets the github username of the engineer", () => {
    // Test that the getGithub method returns the correct github username
    expect(engineer.getGithub()).toBe("johndoe");
  });

  test("gets the role of the engineer", () => {
    // Test that the getRole method returns "Engineer"
    expect(engineer.getRole()).toBe("Engineer");
  });
});
