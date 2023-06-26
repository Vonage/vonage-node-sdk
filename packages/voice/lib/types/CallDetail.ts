import { BasicCallDetail } from './BasicCallDetail';
import { CommonCallFields } from './CommonCallFields';
import { CallDirection } from '../enums/index';

export type CallDetail = CommonCallFields &
  BasicCallDetail & {
    direction: CallDirection;
    rate: string;
    price: string;
    startTime: string;
    endTime: string;
    network: string;
  };
