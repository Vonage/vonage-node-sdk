/**
 * Enum representing the supported Text-to-Speech (TTS) languages for Nexmo's voice calls.
 */
export enum TTSLanguages {
  /**
   * Afrikaans (af-ZA) - Supported Text-to-Speech (TTS) language.
   */
  AF_ZA = 'af-ZA',

  /**
   * Arabic (ar) - Supported Text-to-Speech (TTS) language.
   */
  AR = 'ar',

  /**
   * Bulgarian (bg-BG) - Supported Text-to-Speech (TTS) language.
   */
  BG_BG = 'bg-BG',

  /**
   * Bengali (bn-IN) - Supported Text-to-Speech (TTS) language.
   */
  BN_IN = 'bn-IN',

  /**
   * Catalan, Valencian (ca-ES) - Supported Text-to-Speech (TTS) language.
   */
  CA_ES = 'ca-ES',

  /**
   * China Chinese, Mandarin (cmn-CN) - Supported Text-to-Speech (TTS) language.
   */
  CMN_CN = 'cmn-CN',

  /**
   * Taiwan Chinese, Mandarin (cmn-TW) - Supported Text-to-Speech (TTS) language.
   */
  CMN_TW = 'cmn-TW',

  /**
   * Czech (cs-CZ) - Supported Text-to-Speech (TTS) language.
   */
  CS_CZ = 'cs-CZ',

  /**
   * Welsh (cy-GB) - Supported Text-to-Speech (TTS) language.
   */
  CY_GB = 'cy-GB',

  /**
   * Danish (da-DK) - Supported Text-to-Speech (TTS) language.
   */
  DA_DK = 'da-DK',

  /**
   * Austria German (de-AT) - Supported Text-to-Speech (TTS) language.
   */
  DE_AT = 'de-AT',

  /**
   * German (de-DE) - Supported Text-to-Speech (TTS) language.
   */
  DE_DE = 'de-DE',

  /**
   * Greek (el-GR) - Supported Text-to-Speech (TTS) language.
   */
  EL_GR = 'el-GR',

  /**
   * Australia English (en-AU) - Supported Text-to-Speech (TTS) language.
   */
  EN_AU = 'en-AU',

  /**
   * United Kingdom English (en-GB) - Supported Text-to-Speech (TTS) language.
   */
  EN_GB = 'en-GB',

  /**
   * Scotland English (en-GB-SCT) - Supported Text-to-Speech (TTS) language.
   */
  EN_GB_SCT = 'en-GB-SCT',

  /**
   * Wales English (en-GB-WLS) - Supported Text-to-Speech (TTS) language.
   */
  EN_GB_WLS = 'en-GB-WLS',

  /**
   * Ireland English (en-IE) - Supported Text-to-Speech (TTS) language.
   */
  EN_IE = 'en-IE',

  /**
   * India English (en-IN) - Supported Text-to-Speech (TTS) language.
   */
  EN_IN = 'en-IN',

  /**
   * New Zealand English (en-NZ) - Supported Text-to-Speech (TTS) language.
   */
  EN_NZ = 'en-NZ',

  /**
   * United States English (en-US) - Supported Text-to-Speech (TTS) language.
   */
  EN_US = 'en-US',

  /**
   * South Africa English (en-ZA) - Supported Text-to-Speech (TTS) language.
   */
  EN_ZA = 'en-ZA',

  /**
   * Colombia Spanish (es-CO) - Supported Text-to-Speech (TTS) language.
   */
  ES_CO = 'es-CO',

  /**
   * Spain Spanish (es-ES) - Supported Text-to-Speech (TTS) language.
   */
  ES_ES = 'es-ES',

  /**
   * Mexico Spanish (es-MX) - Supported Text-to-Speech (TTS) language.
   */
  ES_MX = 'es-MX',

  /**
   * United States Spanish (es-US) - Supported Text-to-Speech (TTS) language.
   */
  ES_US = 'es-US',

  /**
   * Basque (eu-ES) - Supported Text-to-Speech (TTS) language.
   */
  EU_ES = 'eu-ES',

  /**
   * Finnish (fi-FI) - Supported Text-to-Speech (TTS) language.
   */
  FI_FI = 'fi-FI',

  /**
   * Filipino (fil-PH) - Supported Text-to-Speech (TTS) language.
   */
  FIL_PH = 'fil-PH',

  /**
   * Canada French (fr-CA) - Supported Text-to-Speech (TTS) language.
   */
  FR_CA = 'fr-CA',

  /**
   * France French (fr-FR) - Supported Text-to-Speech (TTS) language.
   */
  FR_FR = 'fr-FR',

  /**
   * Spain Galician (gl-ES) - Supported Text-to-Speech (TTS) language.
   */
  GL_ES = 'gl-ES',

  /**
   * Gujarati (gu-IN) - Supported Text-to-Speech (TTS) language.
   */
  GU_IN = 'gu-IN',

  /**
   * Hebrew (he-IL) - Supported Text-to-Speech (TTS) language.
   */
  HE_IL = 'he-IL',

  /**
   * Hindi (hi-IN) - Supported Text-to-Speech (TTS) language.
   */
  HI_IN = 'hi-IN',

  /**
   * Hungarian (hu-HU) - Supported Text-to-Speech (TTS) language.
   */
  HU_HU = 'hu-HU',

  /**
   * Indonesian (id-ID) - Supported Text-to-Speech (TTS) language.
   */
  ID_ID = 'id-ID',

  /**
   * Icelandic (is-IS) - Supported Text-to-Speech (TTS) language.
   */
  IS_IS = 'is-IS',

  /**
   * Italian (it-IT) - Supported Text-to-Speech (TTS) language.
   */
  IT_IT = 'it-IT',

  /**
   * Japanese (ja-JP) - Supported Text-to-Speech (TTS) language.
   */
  JA_JP = 'ja-JP',

  /**
   * Kannada (kn-IN) - Supported Text-to-Speech (TTS) language.
   */
  KN_IN = 'kn-IN',

  /**
   * Korean (ko-KR) - Supported Text-to-Speech (TTS) language.
   */
  KO_KR = 'ko-KR',

  /**
   * Latvian (lv-LV) - Supported Text-to-Speech (TTS) language.
   */
  LV_LV = 'lv-LV',

  /**
   * Malayalam (ml-IN) - Supported Text-to-Speech (TTS) language.
   */
  ML_IN = 'ml-IN',

  /**
   * Malay (ms-MY) - Supported Text-to-Speech (TTS) language.
   */
  MS_MY = 'ms-MY',

  /**
   * Norwegian (nb-NO) - Supported Text-to-Speech (TTS) language.
   */
  NB_NO = 'nb-NO',

  /**
   * Belgium Dutch (nl-BE) - Supported Text-to-Speech (TTS) language.
   */
  NL_BE = 'nl-BE',

  /**
   * Netherlands Dutch (nl-NL) - Supported Text-to-Speech (TTS) language.
   */
  NL_NL = 'nl-NL',

  /**
   * Norwegian (no-NO) - Supported Text-to-Speech (TTS) language.
   */
  NO_NO = 'no-NO',

  /**
   * Punjabi (pa-IN) - Supported Text-to-Speech (TTS) language.
   */
  PA_IN = 'pa-IN',

  /**
   * Polish (pl-PL) - Supported Text-to-Speech (TTS) language.
   */
  PL_PL = 'pl-PL',

  /**
   * Brazil Portuguese (pt-BR) - Supported Text-to-Speech (TTS) language.
   */
  PT_BR = 'pt-BR',

  /**
   * Portugal Portuguese (pt-PT) - Supported Text-to-Speech (TTS) language.
   */
  PT_PT = 'pt-PT',

  /**
   * Romanian (ro-RO) - Supported Text-to-Speech (TTS) language.
   */
  RO_RO = 'ro-RO',

  /**
   * Russian (ru-RU) - Supported Text-to-Speech (TTS) language.
   */
  RU_RU = 'ru-RU',

  /**
   * Slovak (sk-SK) - Supported Text-to-Speech (TTS) language.
   */
  SK_SK = 'sk-SK',

  /**
   * Serbian (sr-RS) - Supported Text-to-Speech (TTS) language.
   */
  SR_RS = 'sr-RS',

  /**
   * Swedish (sv-SE) - Supported Text-to-Speech (TTS) language.
   */
  SV_SE = 'sv-SE',

  /**
   * Tamil (ta-IN) - Supported Text-to-Speech (TTS) language.
   */
  TA_IN = 'ta-IN',

  /**
   * Telugu (te-IN) - Supported Text-to-Speech (TTS) language.
   */
  TE_IN = 'te-IN',

  /**
   * Thai (th-TH) - Supported Text-to-Speech (TTS) language.
   */
  TH_TH = 'th-TH',

  /**
   * Turkish (tr-TR) - Supported Text-to-Speech (TTS) language.
   */
  TR_TR = 'tr-TR',

  /**
   * Ukrainian (uk-UA) - Supported Text-to-Speech (TTS) language.
   */
  UK_UA = 'uk-UA',

  /**
   * Vietnamese (vi-VN) - Supported Text-to-Speech (TTS) language.
   */
  VI_VN = 'vi-VN',

  /**
   * China Chinese, Cantonese (yue-CN) - Supported Text-to-Speech (TTS) language.
   */
  YUE_CN = 'yue-CN',
}
