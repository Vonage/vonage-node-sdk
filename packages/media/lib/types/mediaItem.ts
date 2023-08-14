export type MediaItem = {
  id: string;
  title?: string;
  description?: string;
  originalFileName: string;
  mimeType: string;
  accountId: string;
  storeId: string;
  maxDownloadsAllowed: number;
  timesDownloaded: number;
  etag: string;
  mediaSize: number;
  timeCreated: string;
  timeLastUpdated: string;
  public: boolean;
  metadataPrimary: string;
  metadataSecondary: string;
};
