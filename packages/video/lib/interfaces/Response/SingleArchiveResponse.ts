export interface SingleArchiveResponse {
    createdAt: number
    duration: number
    hasAudio: boolean
    hasVideo: boolean
    id: string
    name: string
    outputMode: string
    projectId: string
    reason: string
    resolution: string
    sessionId: string
    size: number
    status: string
    streamMode: string
    url?: string
    streams?: string[]
}