import chai, {expect} from 'chai';

var Nexmo = require('../lib/Nexmo');
const config = require('./config');

describe('members', () => {

    let nexmo;

    beforeEach(() => {
        nexmo = new Nexmo({
            apiKey: config.API_KEY,
            apiSecret: config.API_SECRET,
            privateKey: config.PRIVATE_KEY,
            applicationId: config.APP_ID
        }, {debug: config.DEBUG});
    });

    it('should allow a member to be added to a conversation', (done) => {
        nexmo.conversations.members.add(config.CONVERSATION_ID, {
            "action": "invite",
            "user_id": config.USER_ID,
            "channel": {
                "type": "app"
            }
        }, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.id).to.have.string("MEM");
            done();
        });
    });

    it('should allow a member to be retrieved by id', (done) => {
        nexmo.conversations.members.get(config.CONVERSATION_ID, config.MEMBER_ID, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.id).to.have.string("MEM");
            done();
        });
    });

    it('should allow all members to be retrieved', (done) => {
        nexmo.conversations.members.get(config.CONVERSATION_ID, {}, (error, result) => {
            if (error)
                done(new Error(`${error.statusCode} - ${error.message}`));
            expect(result.length).to.be.at.least(1);
            done();
        });
    });

});
