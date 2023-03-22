import { ExperienceComposerResolution } from "../enums/ExperienceComposerResolution";

export interface ExperienceComposerOptions {
    url: string
    properties?: {
        name?: string
    }
    maxDuration?: number
    resolution?: ExperienceComposerResolution
    statusCallbackUrl?: string
}