import { LogoType } from '../../enums/index';

export type UrlResponse = {
    url: string
    fields: {
        'Content-Type': 'image/png'
        key: string
        logoType: LogoType
        bucket: string
        'X-Amz-Algorithm': string
        'X-Amz-Credential': string
        'X-Amz-Date': string
        'X-Amz-Security-Token': string
        Policy: string
        'X-Amz-Signature': string
    }
}
