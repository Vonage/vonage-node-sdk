import { MediaItem } from '../mediaItem';

export type MediaItemResponse = {
  original_file_name: string;
  mime_type: string;
  account_id: string;
  store_id: string;
  max_downloads_allowed: number;
  times_downloaded: number;
  media_size: number;
  time_created: string;
  time_last_updated: string;
  public: boolean;
  metadata_primary: string;
  metadata_secondary: string;
} & Pick<MediaItem, 'id' | 'etag'>;
