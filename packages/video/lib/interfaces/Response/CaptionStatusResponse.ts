import { CaptionStatus } from "../../enums/CaptionStatus";

export interface CaptionStatusResponse {
    captionId: string
    applicationId: string
    sessionId: string
    status: CaptionStatus
    createdAt: number
    updatedAt: number
    duration: number
    languageCode: "en-us"
    provider: "aws-transcribe"
    reason?: string
}