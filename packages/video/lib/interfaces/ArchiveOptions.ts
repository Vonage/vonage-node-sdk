import { ArchiveOutputMode } from '../enums/ArchiveOutputMode';
import { Resolution } from '../enums/Resolution';
import { StreamMode } from '../enums/StreamMode';
import { ArchiveLayout } from './ArchiveLayout';

export interface ArchiveOptions {
  hasAudio?: boolean;
  hasVideo?: boolean;
  layout?: ArchiveLayout;
  name?: string;
  outputMode?: ArchiveOutputMode;
  resolution?: Resolution;
  streamMode?: StreamMode;
}
