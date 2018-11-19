import chai, {expect} from 'chai';

var Nexmo = require('../lib/Nexmo');
const config = require('./config');

describe('users', () => {

    let nexmo;

    beforeEach(() => {
        nexmo = new Nexmo({
            apiKey: config.API_KEY,
            apiSecret: config.API_SECRET,
            privateKey: config.PRIVATE_KEY,
            applicationId: config.APP_ID
        }, {debug: config.DEBUG});
    });

    it('should allow a user to be created', (done) => {
        nexmo.users.create({
            name: new Date().getTime().toString()
        }, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.id).to.have.string("USR");
            done();
        });
    });

    it('should allow a user to be retrieved by id', (done) => {
        nexmo.users.get(config.USER_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.id).to.have.string("USR");
            done();
        });
    });

    it('should allow users to be retrieved', (done) => {
        nexmo.users.get({}, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

    // TODO: enable once the API is fixed
    xit('should allow a user to be updated', (done) => {
        nexmo.users.update(config.USER_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

    // TODO: enable once the API is fixed
    xit('should allow a user to be deleted', (done) => {
        nexmo.users.delete(config.USER_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

});
