/** @format */

const { getFullName, getFirstLetterOf } = require("./");

describe("getFullName", () => {
  test("should return John Doe when provided John as firstName and Doe as lastName", () => {
    const response = getFullName("John", "Doe");
    expect(response).toBe("John Doe");
  });

  test("should return just the firstName if the lastName is not defined", () => {
    const response = getFullName("Peter");
    const response2 = getFullName("Peter", 0);
    expect(response).toBe("Peter");
    expect(response2).toBe("Peter");
  });

  test("should only accept strings if there is an input", () => {
    const result1 = getFullName("Peter", [1, 2]);
    const result2 = getFullName(5, "Zheng");
    const result3 = getFullName(false, "Zheng");
    const result4 = getFullName();
    expect(result1).toBe("Peter");
    expect(result2).toBe("Zheng");
    expect(result3).toBe("Zheng");
    expect(result4).toBe("Please input a name");
  });

  test("should capitalize the first letter and keep remaining letters lowercased", () => {
    const result1 = getFullName("peter", "zheng");
    expect(result1).toBe("Peter Zheng");
    const result2 = getFullName("peter", "ZHENG");
    expect(result2).toBe("Peter Zheng");
    const result3 = getFullName("peter", "Zheng");
    expect(result3).toBe("Peter Zheng");
    const result4 = getFullName("peter", "zHENG");
    expect(result4).toBe("Peter Zheng");
    const result5 = getFullName("peteR", "zheng");
    expect(result5).toBe("Peter Zheng");
    const result6 = getFullName("petEr");
    expect(result6).toBe("Peter");
  });
});

describe("getFirstLetterOf", () => {
  test("should return the first letter of the input string", () => {
    const response = getFirstLetterOf("hey");
    expect(response).toBe("h");
  });

  test("should return nothing if the input is not a string", () => {
    const response = getFirstLetterOf(5);
    expect(response).toBe(undefined);
  });
  test("should return an error message if the input is empty", () => {
    const response = getFirstLetterOf("");
    expect(response).toBe("Please input a string");
  });
});
