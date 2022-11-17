import { Auth } from '@vonage/auth';
import nock from 'nock';
import { Applications } from '../lib/applications';
import { Application } from '../lib/interfaces/Application';

const BASE_URL = 'https://api.nexmo.com';

describe('applications', () => {
    let client;

    beforeEach(() => {
        client = new Applications(new Auth({
            apiKey: 'abcd',
            apiSecret: '1234',
        }));
    });

    afterEach(() => {
        client = null;
    });

    test('can list available applications', async () => {
        const expectedResponse = {
            page_size: 10,
            page: 1,
            total_items: 6,
            total_pages: 1,
            _embedded: {
                applications: [
                    {
                        id: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
                        name: 'My Application',
                        capabilities: {
                            voice: {
                                webhooks: {
                                    answer_url: {
                                        address: 'https://example.com/webhooks/answer',
                                        http_method: 'POST',
                                        connection_timeout: 500,
                                        socket_timeout: 3000,
                                    },
                                    fallback_answer_url: {
                                        address: 'https://fallback.example.com/webhooks/answer',
                                        http_method: 'POST',
                                        connection_timeout: 500,
                                        socket_timeout: 3000,
                                    },
                                    event_url: {
                                        address: 'https://example.com/webhooks/event',
                                        http_method: 'POST',
                                        connection_timeout: 500,
                                        socket_timeout: 3000,
                                    },
                                },
                            },
                            messages: {
                                webhooks: {
                                    inbound_url: {
                                        address: 'https://example.com/webhooks/inbound',
                                        http_method: 'POST',
                                    },
                                    status_url: {
                                        address: 'https://example.com/webhooks/status',
                                        http_method: 'POST',
                                    },
                                },
                            },
                            rtc: {
                                webhooks: {
                                    event_url: {
                                        address: 'https://example.com/webhooks/event',
                                        http_method: 'POST',
                                    },
                                },
                            },
                            vbc: {},
                        },
                        privacy: {
                            improve_ai: true,
                        },
                    },
                ],
            },
        };

        nock(BASE_URL)
            .persist()
            .get('/v2/applications')
            .reply(200, expectedResponse);

        const resp = await client.listApplications();
        expect(resp.page_size).toEqual(10);
        expect(resp.page).toEqual(1);
        expect(resp.total_items).toEqual(6);
        expect(resp.total_pages).toEqual(1);
        expect(resp._embedded.applications.length).toEqual(1);
    });

    test('can create a new application', async () => {
        const expectedResponse = {
            id: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            name: 'Test App',
            capabilities: {
                voice: {
                    webhooks: {
                        answer_url: {
                            address: 'https://example.com/webhooks/answer',
                            http_method: 'GET',
                        },
                    },
                },
            },
            privacy: {
                improve_ai: true,
            },
            keys: {
                public_key: '---publickey---',
                private_key: '---privatekey---',
            },
        };

        nock(BASE_URL)
            .persist()
            .post('/v2/applications')
            .reply(200, expectedResponse);

        const app: Application = {
            name: 'Test App',
            capabilities: {
                voice: {
                    webhooks: {
                        answer_url: {
                            address: 'https://example.com/webhooks/answer',
                        },
                    },
                },
            },
            privacy: {
                improve_ai: false,
            },
        };
        const resp = await client.createApplication(app);
        expect(resp.id).toEqual('78d335fa-323d-0114-9c3d-d6f0d48968cf');
        expect(resp.keys.public_key).toEqual('---publickey---');
    });

    test('can get a single application', async () => {
        const expectedResponse = {
            id: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            name: 'My Application',
            capabilities: {
                voice: {
                    webhooks: {
                        answer_url: {
                            address: 'https://example.com/webhooks/answer',
                            http_method: 'POST',
                            connection_timeout: 500,
                            socket_timeout: 3000,
                        },
                        fallback_answer_url: {
                            address: 'https://fallback.example.com/webhooks/answer',
                            http_method: 'POST',
                            connection_timeout: 500,
                            socket_timeout: 3000,
                        },
                        event_url: {
                            address: 'https://example.com/webhooks/event',
                            http_method: 'POST',
                            connection_timeout: 500,
                            socket_timeout: 3000,
                        },
                    },
                },
                messages: {
                    webhooks: {
                        inbound_url: {
                            address: 'https://example.com/webhooks/inbound',
                            http_method: 'POST',
                        },
                        status_url: {
                            address: 'https://example.com/webhooks/status',
                            http_method: 'POST',
                        },
                    },
                },
                rtc: {
                    webhooks: {
                        event_url: {
                            address: 'https://example.com/webhooks/event',
                            http_method: 'POST',
                        },
                    },
                },
                vbc: {},
            },
            privacy: {
                improve_ai: true,
            },
        };

        nock(BASE_URL)
            .persist()
            .get('/v2/applications/78d335fa-323d-0114-9c3d-d6f0d48968cf')
            .reply(200, expectedResponse);

        const resp = await client
            .getApplication('78d335fa-323d-0114-9c3d-d6f0d48968cf');
        expect(resp.id).toEqual('78d335fa-323d-0114-9c3d-d6f0d48968cf');
    });

    test('can update an application', async () => {
        const expectedResponse = {
            id: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            name: 'Test App',
            capabilities: {
                voice: {
                    webhooks: {
                        answer_url: {
                            address: 'https://example.com/webhooks/new-answer',
                            http_method: 'GET',
                        },
                    },
                },
            },
            privacy: {
                improve_ai: true,
            },
            keys: {
                public_key: '---publickey---',
                private_key: '---privatekey---',
            },
        };

        nock(BASE_URL)
            .persist()
            .put('/v2/applications/78d335fa-323d-0114-9c3d-d6f0d48968cf')
            .reply(200, expectedResponse);

        const app: Application = {
            id: '78d335fa-323d-0114-9c3d-d6f0d48968cf',
            name: 'Test App',
            capabilities: {
                voice: {
                    webhooks: {
                        answer_url: {
                            address: 'https://example.com/webhooks/new-answer',
                        },
                    },
                },
            },
            privacy: {
                improve_ai: false,
            },
        };
        const resp = await client.updateApplication(app);
        expect(resp.id).toEqual('78d335fa-323d-0114-9c3d-d6f0d48968cf');
        expect(resp.keys.public_key).toEqual('---publickey---');
    });

    test('can delete an application', async () => {
        nock(BASE_URL)
            .persist()
            .delete('/v2/applications/78d335fa-323d-0114-9c3d-d6f0d48968cf')
            .reply(204);

        await client.deleteApplication('78d335fa-323d-0114-9c3d-d6f0d48968cf');
        expect(nock.isDone()).toBeTruthy();
    });
});
