import chai, {expect} from 'chai';

var Nexmo = require('../lib/Nexmo');
const config = require('./config');

describe('conversations', () => {

    let nexmo;

    beforeEach(() => {
        nexmo = new Nexmo({
            apiKey: config.API_KEY,
            apiSecret: config.API_SECRET,
            privateKey: config.PRIVATE_KEY,
            applicationId: config.APP_ID
        }, {debug: config.DEBUG});
    });

    it('should allow a conversation to be created', (done) => {
        nexmo.conversations.create({
            display_name: 'testing'
        }, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.id).to.have.string("CON");
            done();
        });
    });

    it('should allow a conversation to be retrieved by id', (done) => {
        nexmo.conversations.get(config.CONVERSATION_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.uuid).to.have.string("CON");
            done();
        });
    });

    // TODO: enable once the API is fixed
    xit('should allow conversations to be retrieved', (done) => {
        nexmo.conversations.get({}, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

    // TODO: enable once the API is fixed
    xit('should allow a conversation to be updated', (done) => {
        nexmo.conversations.update(config.CONVERSATION_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

    // TODO: enable once the API is fixed
    xit('should allow a conversation to be deleted', (done) => {
        nexmo.conversations.delete(config.CONVERSATION_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

});
