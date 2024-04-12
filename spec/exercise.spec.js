describe("Exercise 1: myName variable", function () {
  it("should be defined", function () {
    expect(myName).toBeDefined();
  });

  it("should be a string", function () {
    expect(typeof myName).toBe("string");
  });

  it("should log the correct name to the console", function () {
    spyOn(console, "log");
    console.log(myName);
    expect(console.log).toHaveBeenCalledWith(myName);
  });
});

describe("Exercise 2: myAge variable", function () {
  it("should be defined", function () {
    expect(myAge).toBeDefined();
  });

  it("should be a number", function () {
    expect(typeof myAge).toBe("number");
  });

  it("should log the age to the console", function () {
    spyOn(console, "log");
    console.log(myAge);
    expect(console.log).toHaveBeenCalledWith(myAge);
  });
});

describe("Exercise 3: myHobbies variable", function () {
  it("should be defined", function () {
    expect(myHobbies).toBeDefined();
  });

  it("should be an array", function () {
    expect(Array.isArray(myHobbies)).toBeTruthy();
  });

  it("should log the hobbies to the console", function () {
    spyOn(console, "log");
    console.log(myHobbies);
    expect(console.log).toHaveBeenCalledWith(myHobbies);
  });
});

describe("Exercise 4: myDog variable", function () {
  it("should be defined", function () {
    expect(myDog).toBeDefined();
  });

  it("should be an object", function () {
    expect(typeof myDog).toBe("object");
  });

  it("should log the dog object to the console", function () {
    spyOn(console, "log");
    console.log(myDog);
    expect(console.log).toHaveBeenCalledWith(myDog);
  });
});

describe("Exercise 5: myInfo object", function () {
  it("should be defined", function () {
    expect(myInfo).toBeDefined();
  });

  it("should include all properties", function () {
    expect(myInfo.name).toBe(myName);
    expect(myInfo.age).toBe(myAge);
    expect(myInfo.hobbies).toEqual(myHobbies);
    expect(myInfo.dog).toEqual(myDog);
  });

  it("should log the myInfo object to the console", function () {
    spyOn(console, "log");
    console.log(myInfo);
    expect(console.log).toHaveBeenCalledWith(myInfo);
  });
});

describe("Exercise 6: sayHello function", function () {
  it("should log 'Hello, name'", function () {
    spyOn(console, "log");
    sayHello("Test Name");
    expect(console.log).toHaveBeenCalledWith("Hello, Test Name");
  });
});

describe("Exercise 7: sayHello usage in a loop", function () {
  it("should log 'Hello, name' for each name in the array", function () {
    const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];
    spyOn(console, "log");
    names.forEach((name) => sayHello(name));
    names.forEach((name) => {
      expect(console.log).toHaveBeenCalledWith(`Hello, ${name}`);
    });
  });
});

describe("Exercise 8: sum function", function () {
  it("should console.log the sum of two numbers", function () {
    spyOn(console, "log");
    sum(5, 3);
    expect(console.log).toHaveBeenCalledWith(8);
  });
});

describe("Exercise 9: convertToUpper function", function () {
  it("should convert a string to uppercase", function () {
    spyOn(console, "log");
    convertToUpper("hello world");
    expect(console.log).toHaveBeenCalledWith("HELLO WORLD");
  });
});

describe("Exercise 10: checkEvenOdd function", function () {
  it("should log 'Even' for even numbers", function () {
    spyOn(console, "log");
    checkEvenOdd(2);
    expect(console.log).toHaveBeenCalledWith("Even");
  });

  it("should log 'Odd' for odd numbers", function () {
    spyOn(console, "log");
    checkEvenOdd(3);
    expect(console.log).toHaveBeenCalledWith("Odd");
  });
});

describe("Exercise 11: sumArray function", function () {
  it("should return the sum of all numbers in an array", function () {
    const result = sumArray([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });
});

describe("Exercise 12: splitString function", function () {
  it("should split a string into an array of characters", function () {
    const result = splitString("hello");
    expect(result).toEqual(["h", "e", "l", "l", "o"]);
  });
});

describe("Exercise 13: reverseString function", function () {
  it("should reverse the array of a given string", function () {
    spyOn(console, "log");
    reverseString("hello");
    expect(console.log).toHaveBeenCalledWith(["o", "l", "l", "e", "h"]);
  });
});

describe("Exercise 14: arrayToString function", function () {
  it("should convert an array of characters back to a string", function () {
    const characters = ["o", "l", "l", "e", "h"];
    const result = arrayToString(characters);
    expect(result).toBe("olleh");
  });
});

describe("Exercise 15: isPalindrome function", function () {
  it("should return true if the word is a palindrome", function () {
    expect(isPalindrome("anna")).toBeTrue();
  });

  it("should return false if the word is not a palindrome", function () {
    expect(isPalindrome("hello")).toBeFalse();
  });
});


describe("Exercise 16: fizzBuzz function", function() {
    it("should correctly replace numbers with 'Fizz', 'Buzz', or 'FizzBuzz'", function() {
        spyOn(console, 'log');
        fizzBuzz(10);
        expect(console.log.calls.argsFor(0)).toEqual([1]);
        expect(console.log.calls.argsFor(1)).toEqual([2]);
        expect(console.log.calls.argsFor(2)).toEqual(["Fizz"]);
        expect(console.log.calls.argsFor(3)).toEqual([4]);
        expect(console.log.calls.argsFor(4)).toEqual(["Buzz"]);
    });
});


describe("Exercise 17: findLongestString function", function() {
    it("should find and log the longest string in an array", function() {
        spyOn(console, 'log');
        findLongestString(["apple", "banana", "grapefruit"]);
        expect(console.log).toHaveBeenCalledWith("grapefruit");
    });
});
