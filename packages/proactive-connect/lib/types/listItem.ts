export type ListItem<DataType> = {
    id: string
    listId: string
    createdAt?: string
    updatedAt?: string
    data: DataType
}
