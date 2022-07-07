import { ArchiveLayoutType } from "../enums/ArchiveLayoutType"
import { ArchiveOutputMode } from "../enums/ArchiveOutputMode"
import { ArchiveResolution } from "../enums/ArchiveResolution"
import { ArchiveStreamMode } from "../enums/ArchiveStreamMode"
import { ArchiveLayout } from "./ArchiveLayout"

export interface ArchiveOptions {
    hasAudio?: boolean
    hasVideo?: boolean
    layout?: ArchiveLayout
    name?: string
    outputMode?: ArchiveOutputMode
    resolution?: ArchiveResolution
    streamMode?: ArchiveStreamMode 
}