import { ExperienceComposerResolution } from '../../lib/enums/ExperienceComposerResolution'
import { ExperienceComposerOptions } from '../../lib/interfaces/ExperienceComposerOptions'

const renderInformation = {
    "id": "1248e7070b81464c9789f46ad10e7764",
    "sessionId": "2_MX4xMDBfjE0Mzc2NzY1NDgwMTJ-TjMzfn4",
    "projectId": "e2343f23456g34709d2443a234",
    "createdAt": 1437676551000,
    "updatedAt": 1437676551000,
    "url": "https://webapp.customer.com",
    "resolution": "1280x720",
    "status": "starting",
    "streamId": "e32445b743678c98230f238" 
}
const renderInformation2 = {
    "id": "o89hergjkhaldfg",
    "sessionId": "lioaherfgiolae",
    "projectId": "e2343f23456g34709d2443a234",
    "createdAt": 1437676551000,
    "updatedAt": 1437676551000,
    "url": "https://webapp.customer.com",
    "resolution": "1280x720",
    "status": "starting",
    "streamId": "e32445b743678c98230f238" 
}

const mutliRenderResponse = {
    count: 2,
    items: [renderInformation, renderInformation2]
}

export default [
    {
        label: "Start an experience render",
        request: [
            '/v2/project/abcd-1234/render',
            'POST',
            {
                sessionId: "1234",
                token: "q34h9uit",
                url: "https://example.com",
                maxDuration: 1800,
                resolution: ExperienceComposerResolution.HD_LANDSCAPE,
                properties: {
                    name: "Sample Render"
                }
            }
        ],
        response: [
            200,
            renderInformation
        ],
        method: 'post',
        clientMethod: 'startExperienceComposerRender',
        parameters: [
            "1234",
            "q34h9uit",
            {
                url: "https://example.com",
                maxDuration: 1800,
                resolution: ExperienceComposerResolution.HD_LANDSCAPE,
                properties: {
                    name: "Sample Render"
                }

            } as ExperienceComposerOptions
        ],
        expected: renderInformation
    },
    {
        label: "Stop an experience render",
        request: [
            '/v2/project/abcd-1234/render/1248e7070b81464c9789f46ad10e7764',
            'DELETE'
        ],
        response: [
            204
        ],
        method: 'delete',
        clientMethod: 'stopExperienceComposerRender',
        parameters: [
            "1248e7070b81464c9789f46ad10e7764",
        ],
        expected: undefined
    },
    {
        label: "Get information about a render",
        request: [
            '/v2/project/abcd-1234/render/1248e7070b81464c9789f46ad10e7764',
            'GET'
        ],
        response: [
            200,
            renderInformation
        ],
        method: 'delete',
        clientMethod: 'getExperienceComposerRender',
        parameters: [
            "1248e7070b81464c9789f46ad10e7764",
        ],
        expected: renderInformation
    },
    {
        label: "List available renders",
        request: [
            '/v2/project/abcd-1234/render',
            'GET'
        ],
        response: [
            200,
            mutliRenderResponse
        ],
        method: 'get',
        clientMethod: 'listExperienceComposerRenders',
        parameters: [],
        expected: mutliRenderResponse
    }
]