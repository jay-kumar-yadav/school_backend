const db = require('../config/database');

const School = {
  create: (schoolData, callback) => {
    const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.execute(query, 
      [schoolData.name, schoolData.address, schoolData.city, schoolData.state, schoolData.contact, schoolData.image, schoolData.email_id],
      callback
    );
  },

  getAll: (callback) => {
    const query = 'SELECT id, name, address, city, image FROM schools';
    db.execute(query, callback);
  }
};

module.exports = School;