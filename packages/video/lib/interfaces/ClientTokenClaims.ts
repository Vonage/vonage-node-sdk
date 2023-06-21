export interface ClientTokenClaims {
    scope: string,
    session_id: string,
    role: string,
    initial_layout_class_list: string
    data?: string
    exp?: number
    connection_data?: string
    sub: string,
    acl: {
        paths: {
            [key: string]: object
        }
    }
}