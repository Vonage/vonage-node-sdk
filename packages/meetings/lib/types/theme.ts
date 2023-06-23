import { ThemeDomain } from '../enums/index';

export type Theme = {
    themeId?: string
    themeName?: string
    domain?: ThemeDomain
    accountId?: string
    applicationId?: string
    mainColor: string
    shortCompanyUrl?: string
    brandText: string
    brandImageColored?: string
    brandImageWhite?: string
    brandedFavicon?: string
    brandImageWhiteUrl?: string
    brandImageColoredUrl?: string
    brandedFaviconUrl?: string
}
