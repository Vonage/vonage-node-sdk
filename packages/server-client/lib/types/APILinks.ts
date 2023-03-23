import { APILink } from './APILink';

export type APILinks = {
    _links: {
        self: APILink
        next?: APILink
        prev?: APILink
    }
}
