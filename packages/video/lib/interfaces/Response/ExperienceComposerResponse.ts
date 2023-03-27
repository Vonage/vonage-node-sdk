import { ExperienceComposerResolution } from "../../enums/ExperienceComposerResolution";

export interface ExperienceComposerResponse {
    id: string
    sessionId: string
    applicationId: string
    createdAt: number
    updatedAt: number
    url: string
    resolution: ExperienceComposerResolution
    status: "starting" | "started" | "stopped" | "failed"
    streamId: string
    reason?: string
}