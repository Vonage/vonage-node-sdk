import { GenericErrors } from '@vonage/server-client';

export type VerifyErrors = {
    EXPIRED: 'expired'
    CONFLICT: 'conflict'
} & GenericErrors
