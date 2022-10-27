import { LayoutType } from '../enums/LayoutType';

export interface ArchiveLayout {
  type: LayoutType;
  stylesheet?: string;
  screenshareType?: string;
}
