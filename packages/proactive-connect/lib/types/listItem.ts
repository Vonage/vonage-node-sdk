/**
 * Represents an item within a list, with associated metadata and data of a generic type.
 * @template DataType - The type of data associated with the list item.
 */
export type ListItem<DataType> = {
  /**
   * The unique identifier for the list item.
   */
  id: string;

  /**
   * The unique identifier of the list to which this item belongs.
   */
  listId: string;

  /**
   * The creation date and time of the list item (optional).
   */
  createdAt?: string;

  /**
   * The last update date and time of the list item (optional).
   */
  updatedAt?: string;

  /**
   * The data associated with the list item.
   */
  data: DataType;
};
