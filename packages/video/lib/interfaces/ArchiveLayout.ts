import { ArchiveLayoutType } from '../enums/ArchiveLayoutType';

export interface ArchiveLayout {
  type: ArchiveLayoutType;
  stylesheet?: string;
  screenshareType?: string;
}
