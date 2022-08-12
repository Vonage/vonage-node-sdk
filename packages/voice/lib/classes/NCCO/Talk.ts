import { TalkAction } from '../../interfaces/NCCO/TalkAction'
import { Serializable } from '../../ncco'

export class Talk implements TalkAction, Serializable {
    public action: string = 'talk'
    public text: string
    public bargeIn?: boolean
    public loop?: number
    public level?: number
    public language?: string
    public style?: string
    public premium?: boolean

    constructor(
        text: string,
        bargeIn?: boolean,
        loop?: number,
        level?: number,
        language?: string,
        style?: string,
        premium?: boolean
    ) {
        this.text = text

        if (bargeIn) {
            this.bargeIn = bargeIn
        }
        if (loop) {
            this.loop = loop
        }
        if (level) {
            this.level = level
        }
        if (language) {
            this.language = language
        }
        if (style) {
            this.style = style
        }
        if (premium) {
            this.premium = premium
        }
    }

    serializeToNCCO() {
        const data: TalkAction = {
            action: this.action,
            text: this.text,
        }

        if (this.loop) {
            data.loop = this.loop
        }
        if (this.bargeIn) {
            data.bargeIn = this.bargeIn
        }
        if (this.level) {
            data.level = this.level
        }
        if (this.language) {
            data.language = this.language
        }
        if (this.style) {
            data.style = this.style
        }
        if (this.premium) {
            data.premium = this.premium
        }

        return data
    }
}
