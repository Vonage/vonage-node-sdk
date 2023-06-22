import { RecordingResponse } from './recordingResponse';

export type RecordingResponsePage = {
    _embedded: {
        recordings: RecordingResponse[]
    }
}
