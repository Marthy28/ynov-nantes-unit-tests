const HelperService = require("../../../HelperService");

describe("Correct Behavior Helper Service for PATCH /todo", () => {
  it("shoud call the todoHelper with a good parameter and receive true", () => {
    const param = { params: { id: "626b9f56e54ad72dea6b1f5e" } };
    expect(HelperService.helperTodoPatch(param)).toBe(true);
  });

  it("shoud call the todoHelper with a wrong parameter and receive false", () => {
    let param = { params: { id: "" } };
    expect(HelperService.helperTodoPatch(param)).toBe(false);

    param = { params: { id: 1234 } };
    expect(HelperService.helperTodoPatch(param)).toBe(false);

    param = { params: null };
    expect(HelperService.helperTodoPatch(param)).toBe(false);

    param = "hello";
    expect(HelperService.helperTodoPatch(param)).toBe(false);
  });
});
