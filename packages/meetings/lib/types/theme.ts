import { ThemeDomain } from '../enums';

/**
 * Represents a theme configuration for meeting rooms.
 */
export type Theme = {
  /**
   * The unique identifier for the theme.
   */
  themeId?: string;

  /**
   * The name of the theme (must be unique). If null, a UUID will automatically be generated.
   */
  themeName?: string;

  /**
   * The domain of the theme, which must be one of 'VCP' or 'VBC'.
   */
  domain?: ThemeDomain;

  /**
   * The application's account ID (ApiKey).
   */
  accountId?: string;

  /**
   * The application ID.
   */
  applicationId?: string;

  /**
   * The main color that will be used for the meeting room.
   */
  mainColor: string;

  /**
   * The URL that will represent every meeting room with this theme. The value must be unique across Vonage.
   */
  shortCompanyUrl?: string;

  /**
   * The text that will appear on the meeting homepage, in the case that there is no brand image.
   */
  brandText: string;

  /**
   * Colored logo's key in the storage system.
   */
  brandImageColored?: string;

  /**
   * White logo's key in the storage system.
   */
  brandImageWhite?: string;

  /**
   * Favicon key in the storage system.
   */
  brandedFavicon?: string;

  /**
   * Colored logo's link.
   */
  brandImageColoredUrl?: string;

  /**
   * White logo's link.
   */
  brandImageWhiteUrl?: string;

  /**
   * Favicon link.
   */
  brandedFaviconUrl?: string;
};
