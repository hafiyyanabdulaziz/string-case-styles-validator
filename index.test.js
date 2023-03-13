import checkString from "./index.mjs";

describe("isCamelCase", () => {
  test("helloWorld to be true", () => {
    expect(checkString.isCamelCase("helloWorld")).toBe(true);
  });
});
