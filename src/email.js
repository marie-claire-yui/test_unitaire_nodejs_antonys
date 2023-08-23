// your-test-scripts.js
const sqlite3 = require('sqlite3').verbose();

// Fonction de validation d'adresses email
function validateEmails(db) {
    return new Promise((resolve, reject) => {
        db.get(`
            SELECT
                CASE
                    WHEN Email LIKE '%@%.%' 
                    THEN 'All email addresses are correctly formatted'
                    ELSE 'Email format test failed'
                END AS Result
            FROM Users;
        `, (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row.Result);
            }
        });
    });
}

module.exports = {
    validateEmails
};
