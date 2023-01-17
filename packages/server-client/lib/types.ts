export type APILink = {
    href: string
    // TODO Add more from RFC 5988?
}

export type APILinks = {
    _links: {
        self: APILink
        next?: APILink
        prev?: APILink
    }
}
