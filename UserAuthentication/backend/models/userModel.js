const db = require('../config/dbConfig');

class User {
  static getByEmail(email, callback) {
    const query = "SELECT * FROM user_details WHERE email = ?";
    db.query(query, [email], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results[0]);
    });
  }

  static create(newUser, callback) {
    const query = "INSERT INTO user_details (firstname, lastname, email, city, state, zip,termsAccepted) VALUES (?, ?, ?, ?, ?, ?,?)";
    const values = [
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.city,
      newUser.state,
      newUser.zip,
      newUser.termsAccepted
    ];
    db.query(query, values, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results.insertId);
    });
  }

  static setupPassword(password, callback) {
    const query = "UPDATE user_details SET password = ? WHERE id = ?"; // Assuming there's an ID associated with the user
    const userId = 1; // Replace with actual user ID
    db.query(query, [password, userId], (error) => {
      if (error) {
        return callback(error);
      }
      return callback(null);
    });
  }
}

module.exports = User;
