// test/test-database.js
const { expect } = require('chai');
const db = require('../database');

const { validateEmails } = require('../src/email');


describe('Database Tests', () => {
    it('should retrieve users from the database', (done) => {
        db.all('SELECT * FROM Users', (error, rows) => {
            expect(error).to.be.null;
            expect(rows).to.have.lengthOf(2);
            done();
        });
    });

    it('should validate email formats', async () => {
        const result = await validateEmails(db);
        expect(result).to.equal('All email addresses are correctly formatted');
    });

});



