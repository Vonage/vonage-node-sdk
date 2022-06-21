import { DTMFSettings } from "./DTMFSettings"
import { SpeechSettings } from "./SpeechSettings"

export interface InputAction {
    action: string
    type: string[]
    dtmf?: DTMFSettings
    speech?: SpeechSettings
    eventUrl?: string[]
    eventMethod?: string
}