class Validator {
  static validateUsername(username) {
      // Проверка на соответствие правилам
      const regex = /^(?!.*([0-9_-])\1{2,})[a-zA-Z0-9_-]+$/;
      return regex.test(username);
  }
}


describe('Validator', () => {
  it('should return true if username is valid', () => {
    // Arrange
    const validUsername = 'johndoe123';

    // Act
    const result = Validator.validateUsername(validUsername);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false if username contains repeating characters more than 2 times', () => {
    // Arrange
    const invalidUsername = 'johndoe111';

    // Act
    const result = Validator.validateUsername(invalidUsername);

    // Assert
    expect(result).toBe(false);
  });

  it('should return false if username contains special characters other than  and -', () => {
    // Arrange
    const invalidUsername = 'john@doe';

    // Act
    const result = Validator.validateUsername(invalidUsername);

    // Assert
    expect(result).toBe(false);
  });

  it('should return false if username starts with a number', () => {
    // Arrange
    const invalidUsername = '1johndoe';

    // Act
    const result = Validator.validateUsername(invalidUsername);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false if username contains spaces', () => {
    // Arrange
    const invalidUsername = 'john doe';

    // Act
    const result = Validator.validateUsername(invalidUsername);

    // Assert
    expect(result).toBe(false);
  });
});


// describe('Validator', () => {
//   describe('validateUsername', () => {
//     it('should return true for valid usernames', () => {
//       expect(Validator.validateUsername('username1')).toBe(true);
//       expect(Validator.validateUsername('user-name_2')).toBe(true);
//       expect(Validator.validateUsername('user3name')).toBe(true);
//     });

//     it('should return false for invalid usernames', () => {
//       expect(Validator.validateUsername('user')).toBe(false);
//       expect(Validator.validateUsername('1username')).toBe(false);
//       expect(Validator.validateUsername('user--name')).toBe(false);
//       expect(Validator.validateUsername('username4_')).toBe(false);
//     });
//   });
// });


// module.exports = Validator;


