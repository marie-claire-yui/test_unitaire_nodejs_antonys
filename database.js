// database.js
const sqlite3 = require('sqlite3').verbose();

// Créer une base de données SQLite en mémoire
const db = new sqlite3.Database(':memory:');

// Créer une table Users
db.serialize(() => {
    db.run('CREATE TABLE Users (id INT, username TEXT, email TEXT, role TEXT)');
    db.run('INSERT INTO Users (id, username, email, role) VALUES (?, ?, ?, ?)', [1, 'user1', 'user1@example.com', 'user']);
    db.run('INSERT INTO Users (id, username, email, role) VALUES (?, ?, ?, ?)', [2, 'admin1', 'admin1@example.com', 'admin']);
});

module.exports = db;
