
describe("Concatenate the types of data and return it - moreAboutHome", function() {
  it("Defines moreAboutHome", function() {
    expect(typeof moreAboutHome).toBe("function");
  });

  it("Defines createManager", function() {
    expect(typeof moreAboutHome()).toBe("string");
  });

  it("Concatenate the type of ('Amazon', 78, true)", function() {
    let actualResult = moreAboutHome("Amazon", 78, true);

    let expectedResult = "stringnumberboolean";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Concatenate the type of (12, 78, 10)", function() {
    let actualResult = moreAboutHome(12, 78, 10);

    let expectedResult = "numbernumbernumber";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Concatenate the type of (true, true, NaN)", function() {
    let actualResult = moreAboutHome(true, true, NaN);

    let expectedResult = "booleanbooleannumber";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Concatenate the type of (undefined, true, 'NaN')", function() {
    let actualResult = moreAboutHome(undefined, true, "NaN");

    let expectedResult = "undefinedbooleanstring";

    expect(actualResult).toEqual(expectedResult);
  });
});


describe("Check if the arguments passed corresponds to the given data types  - moreAboutKaren", function() {
  it("Defines moreAboutKaren", function() {
    expect(typeof moreAboutKaren).toBe("function");
  });

  it("Defines moreAboutKaren", function() {
    expect(typeof moreAboutKaren()).toBe("boolean");
  });

  it("Return true the arguments passed are in the order string, number and boolean", function() {
    let actualResult = moreAboutKaren("Lily & Harold", 0, true);

    let expectedResult = true;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return false if the arguments passed are not in the order string, number and boolean", function() {
    let actualResult = moreAboutKaren("Lily & Harold", true, 0);

    let expectedResult = false;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return false if no arguments are passed", function() {
    let actualResult = moreAboutKaren();

    let expectedResult = false;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return false if any arguments are missing", function() {
    let actualResult = moreAboutKaren("Lily & Harold", 0);

    let expectedResult = false;

    expect(actualResult).toEqual(expectedResult);
  });
});


describe("Check which of the argument passed is of type NaN  - doesFriendExist", function() {
  it("Defines doesFriendExist", function() {
    expect(typeof doesFriendExist).toBe("function");
  });

  it("Return NaN for the arguments(NaN,25)", function() {
    let actualResult = doesFriendExist(NaN, 25);

    let expectedResult = NaN;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return NaN for the arguments(NaN,NaN)", function() {
    let actualResult = doesFriendExist(NaN, NaN);

    let expectedResult = NaN;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'NaN' for the arguments('NaN',NaN)", function() {
    let actualResult = doesFriendExist("NaN", NaN);

    let expectedResult = "NaN";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return NaN for the arguments('',NaN)", function() {
    let actualResult = doesFriendExist("", NaN);

    let expectedResult = NaN;

    expect(actualResult).toEqual(expectedResult);
  });
});


describe("Calculate the number of sweets Karen's friend eats  - sweetTooth", function() {
  it("Defines sweetTooth", function() {
    expect(typeof sweetTooth).toBe("function");
  });

  it("Return 'No sweets for Karen's friend' when any of the parameters is not of type number", function() {
    let actualResult = sweetTooth("hi", 25, 14, 12);

    let expectedResult = "No sweets for Karen's friend";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'No sweets for Karen's friend' when no parameters are passed", function() {
    let actualResult = sweetTooth();

    let expectedResult = "No sweets for Karen's friend";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 0 when all parameters are 0", function() {
    let actualResult = sweetTooth(0, 0, 0, 0);

    let expectedResult = 0;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 0 when Karen eats all the sweets before reaching the river", function() {
    let actualResult = sweetTooth(22, 6, 2, 8);

    let expectedResult = 0;

    expect(actualResult).toEqual(expectedResult);
  });
});


describe("Convert the temperature from farenheit to celsius - convertToCelsius", function() {
  it("Defines convertToCelsius", function() {
    expect(typeof convertToCelsius).toBe("function");
  });

  it("Return temperature in celsius", function() {
    let actualResult = convertToCelsius(32);

    let expectedResult = 0;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return temperature in celsius", function() {
    let actualResult = convertToCelsius(14);

    let expectedResult = -10;

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Technical Error!' when input is of type undefined", function() {
    let actualResult = convertToCelsius(undefined);

    let expectedResult = "Technical Error!";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Technical Error!' when input is of type string", function() {
    let actualResult = convertToCelsius("32");

    let expectedResult = "Technical Error!";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Technical Error!' when input is of type object", function() {
    let actualResult = convertToCelsius([]);

    let expectedResult = "Technical Error!";

    expect(actualResult).toEqual(expectedResult);
  });
});


describe("Decide what actions Karen will take next - aDifficultChoice", function() {
  it("Defines aDifficultChoice", function() {
    expect(typeof aDifficultChoice).toBe("function");
  });

  it("Return 'Take her daughter to a doctor' when choice is 1", function() {
    let actualResult = aDifficultChoice(1);

    let expectedResult = "Take her daughter to a doctor";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Break down and give up all hope' when choice is -1", function() {
    let actualResult = aDifficultChoice(-1);

    let expectedResult = "Break down and give up all hope";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Wasn't able to decide' when choice is undefined", function() {
    let actualResult = aDifficultChoice(undefined);

    let expectedResult = "Wasn't able to decide";

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return 'Refused to do anything for Karen' when choice is 'I give up'", function() {
    let actualResult = aDifficultChoice("I give up");

    let expectedResult = "Refused to do anything for Karen";

    expect(actualResult).toEqual(expectedResult);
  });
});
