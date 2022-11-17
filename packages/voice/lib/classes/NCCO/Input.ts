import { DTMFSettings } from '../../interfaces/NCCO/DTMFSettings';
import { InputAction } from '../../interfaces/NCCO/InputAction';
import { SpeechSettings } from '../../interfaces/NCCO/SpeechSettings';
import { Serializable } from '../../ncco';

export class Input implements InputAction, Serializable {
    public action = 'input';
    public type: string[] = [];
    public dtmf?: DTMFSettings;
    public speech?: SpeechSettings;
    public eventUrl?: string[] = [];
    public eventMethod?: string;

    constructor(
        dtmf?: DTMFSettings,
        speech?: SpeechSettings,
        eventUrl?: string,
        eventMethod?: string,
    ) {
        if (dtmf) {
            this.type.push('dtmf');
            this.dtmf = dtmf;
        }

        if (speech) {
            this.type.push('speech');
            this.speech = speech;
        }

        if (eventUrl) {
            this.eventUrl.push(eventUrl);
        }
        if (eventMethod) {
            this.eventMethod = eventMethod;
        }

        if (this.type.length === 0) {
            throw new TypeError(
                // eslint-disable-next-line max-len
                'Input action must have at least either DTMF or Speech settings',
            );
        }
    }

    serializeToNCCO() {
        const data: InputAction = {
            action: this.action,
            type: this.type,
        };

        if (this.dtmf) {
            data.dtmf = this.dtmf;
        }
        if (this.speech) {
            data.speech = this.speech;
        }
        if (this.eventUrl) {
            data.eventUrl = this.eventUrl;
        }
        if (this.eventMethod) {
            data.eventMethod = this.eventMethod;
        }

        return data;
    }
}
