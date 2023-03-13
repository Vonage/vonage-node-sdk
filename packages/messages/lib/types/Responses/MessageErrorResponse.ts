export type MessageErrorResponse = {
    type: string
    title: string
    detail: string
    instance: string
    invalid_parameters?: {
        name: string
        reason: string
    }
}
