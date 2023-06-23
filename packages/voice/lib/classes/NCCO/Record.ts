import { RecordingFormat } from '../../enums/NCCO/RecordingFormat'
import { RecordAction } from '../../interfaces/NCCO/RecordAction'

export class Record implements RecordAction {
    action: string = 'record'
    format?: RecordingFormat
    protected wrappedSplit?: string
    protected wrappedChannels?: number
    protected wrappedEndOnSilence?: number
    protected wrappedEndOnKey?: string
    protected wrappedTimeOut?: number
    beepStart?: boolean
    eventUrl?: string[]
    eventMethod?: string

    constructor(
        format?: RecordingFormat,
        split?: string,
        channels?: number,
        endOnSilence?: number,
        endOnKey?: string,
        timeout?: number,
        beepStart?: boolean,
        eventUrl?: string,
        eventMethod?: string
    ) {
        if (format) {
            this.format = format
        }
        if (split) {
            this.split = split
        }
        if (channels) {
            this.channels = channels
        }
        if (endOnSilence) {
            this.endOnSilence = endOnSilence
        }
        if (endOnKey) {
            this.endOnKey = endOnKey
        }
        if (timeout) {
            this.timeout = timeout
        }
        if (beepStart) {
            this.beepStart = beepStart
        }
        if (eventUrl) {
            this.eventUrl = [eventUrl]
        }
        if (eventMethod) {
            this.eventMethod = eventMethod
        }
    }

    public get channels(): number {
        return this.wrappedChannels
    }

    public set channels(channels: number) {
        if (channels < 1 || channels > 32) {
            throw new Error('Channels must be between 1 and 32, inclusive')
        }

        if (this.wrappedSplit !== 'conversation') {
            throw new Error(
                "Channels must have split set to 'conversation' before changing channel numbers"
            )
        }

        this.wrappedChannels = channels
    }

    public get endOnKey(): string {
        return this.wrappedEndOnKey
    }

    public set endOnKey(character: string) {
        const re = /^[0-9\*\#]$/
        if (!re.test(character)) {
            throw new Error('Valid characters are 0-9, *, and # only')
        }

        this.wrappedEndOnKey = character
    }

    public get endOnSilence(): number {
        return this.wrappedEndOnSilence
    }

    public set endOnSilence(numSeconds: number) {
        if (numSeconds < 3 || numSeconds > 10) {
            throw new Error(
                'End on Silence must be between 3 and 10 seconds, inclusive'
            )
        }

        this.wrappedEndOnSilence = numSeconds
    }

    public get split(): string {
        return this.wrappedSplit
    }

    public set split(splitType: string) {
        if (splitType !== 'conversation') {
            throw new Error("Recording can only be split to 'conversation'")
        }

        this.wrappedSplit = splitType
    }

    public get timeout(): number {
        return this.wrappedTimeOut
    }

    public set timeout(seconds: number) {
        if (seconds < 3 || seconds > 7200) {
            throw new Error(
                'Recording timeout must be between 3 and 7200 seconds, inclusive'
            )
        }

        this.wrappedTimeOut = seconds
    }

    serializeToNCCO(): RecordAction {
        const data: RecordAction = {
            action: this.action,
        }

        if (this.format) {
            data.format = this.format
        }
        if (this.wrappedSplit) {
            data.split = this.wrappedSplit
        }
        if (this.wrappedChannels) {
            data.channels = this.wrappedChannels
        }
        if (this.wrappedEndOnKey) {
            data.endOnKey = this.endOnKey
        }
        if (this.wrappedEndOnSilence) {
            data.endOnSilence = this.endOnSilence
        }
        if (this.wrappedTimeOut) {
            data.timeOut = this.wrappedTimeOut
        }
        if (this.beepStart) {
            data.beepStart = this.beepStart
        }
        if (this.eventUrl) {
            data.eventUrl = this.eventUrl
        }
        if (this.eventMethod) {
            data.eventMethod = this.eventMethod
        }

        return data
    }
}
