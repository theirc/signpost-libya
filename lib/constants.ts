import { AlgoliaSearchIndex } from '@ircsignpost/signpost-base/dist/src/search-common';
import { LatLngExpression } from 'leaflet';

export const SITE_TITLE = 'Malomat';

export const COUNTRY_ID = 123;

export const MAP_DEFAULT_COORDS: LatLngExpression = [26.3351, 17.2283];

// Cache statically generated pages for 1 hour. The timeout was chosen
// arbitrarily. Our website has static, non-urgent resources, so we probably do
// not need to serve content faster.
export const REVALIDATION_TIMEOUT_SECONDS: number = 1 * 60 * 60;

// The "about us" article ID.
//
// TODO
export const ABOUT_US_ARTICLE_ID: number = 123;

export const USE_CAT_SEC_ART_CONTENT_STRUCTURE = false;

export const CATEGORY_ICON_NAMES: { [key: string]: string } = {
  '14674080914461': 'home',
  '14700121764381': 'work',
  '14700123077789': 'apartment',
  '14700138106781': 'enhanced_encryption',
  '14700163732253': 'family_restroom',
  '14700129260573': 'local_hospital',
  '14700101907869': 'woman',
  '14700100429085': 'wash',
  '14700128557085': 'campaign',
};

export const SECTION_ICON_NAMES: { [key: string]: string } = {
  '123': 'home_work', // Placeholder
};

export const CATEGORIES_TO_HIDE: number[] = [
  14484797099805, 14485122232221, 14484840389149,
];

export const DYNAMIC_CONTENT_LOCALES: { [key: string]: number } = {
  'en-us': 1,
  ar: 66,
  fr: 16,
};

export const ZENDESK_AUTH_HEADER = {
  Authorization: 'Bearer ' + process.env.ZENDESK_OAUTH_TOKEN,
};

export const GOOGLE_ANALYTICS_IDS = [
  process.env.NEXT_PUBLIC_GA_ID ?? '',
  process.env.NEXT_PUBLIC_GA4_ID ?? '',
];

// Algolia search app ID, Search API key and search index name:
// https://www.algolia.com/account/api-keys/
export const ALGOLIA_SEARCH_APP_ID = 'BWATZIXLX6';
export const ALGOLIA_SEARCH_API_KEY = '0d9093280e7b2bc2b6ca12ed4180fd0a';
export const ALGOLIA_SEARCH_API_KEY_WRITE =
  process.env.ALGOLIA_SEARCH_API_KEY_WRITE ?? '';

export const ALGOLIA_ARTICLE_INDEX_NAME = 'zendesk_signpost-libya_articles';
export const ALGOLIA_QUERY_INDEX_NAME =
  'zendesk_signpost-afghanistan_articles_query_suggestions';

export const SEARCH_BAR_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_QUERY_INDEX_NAME,
};

export const SEARCH_RESULTS_PAGE_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_ARTICLE_INDEX_NAME,
};

export const DIRECTUS_AUTH_TOKEN = process.env.DIRECTUS_TOKEN ?? '';
export const DIRECTUS_COUNTRY_ID = 26;
export const DIRECTUS_INSTANCE = 'https://directus-irc.azurewebsites.net/';
