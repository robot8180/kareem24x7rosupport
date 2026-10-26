import { PageRoute } from '../types';

export interface BrandThemeConfig {
  id: string;
  name: string;
  primary: string;
  hover: string;
  lightBg: string;
  borderColor: string;
  gradientFrom: string;
  gradientTo: string;
  badgeBg: string;
  bannerBg: string;
  buttonBg: string;
  phoneTextColor: string;
}

export const DEFAULT_THEME: BrandThemeConfig = {
  id: 'default',
  name: '24x7 RO Support',
  primary: '#0070e0',
  hover: '#005ec4',
  lightBg: '#EFF6FF',
  borderColor: '#BFDBFE',
  gradientFrom: '#38bdf8',
  gradientTo: '#06b6d4',
  badgeBg: '#0070e0',
  bannerBg: '#0060c8',
  buttonBg: '#0070e0',
  phoneTextColor: '#0070e0',
};

export const BRAND_THEME_MAP: Record<string, BrandThemeConfig> = {
  '/kent-service': {
    id: 'kent',
    name: 'Kent',
    primary: '#1B3F8C',
    hover: '#153270',
    lightBg: '#EFF6FF',
    borderColor: '#BFDBFE',
    gradientFrom: '#38bdf8',
    gradientTo: '#06b6d4',
    badgeBg: '#1B3F8C',
    bannerBg: '#1B3F8C',
    buttonBg: '#1B3F8C',
    phoneTextColor: '#1B3F8C',
  },
  '/aquaguard-service': {
    id: 'aquaguard',
    name: 'Aquaguard',
    primary: '#0072BC',
    hover: '#005C96',
    lightBg: '#F0F9FF',
    borderColor: '#BAE6FD',
    gradientFrom: '#2dd4bf',
    gradientTo: '#38bdf8',
    badgeBg: '#0072BC',
    bannerBg: '#0072BC',
    buttonBg: '#0072BC',
    phoneTextColor: '#0072BC',
  },
  '/pureit-service': {
    id: 'pureit',
    name: 'Pureit',
    primary: '#2B2A6B',
    hover: '#202052',
    lightBg: '#F5F3FF',
    borderColor: '#DDD6FE',
    gradientFrom: '#818cf8',
    gradientTo: '#38bdf8',
    badgeBg: '#2B2A6B',
    bannerBg: '#2B2A6B',
    buttonBg: '#2B2A6B',
    phoneTextColor: '#2B2A6B',
  },
  '/aosmith-service': {
    id: 'aosmith',
    name: 'AO Smith',
    primary: '#00843D',
    hover: '#006830',
    lightBg: '#F0FDF4',
    borderColor: '#BBF7D0',
    gradientFrom: '#34d399',
    gradientTo: '#10b981',
    badgeBg: '#00843D',
    bannerBg: '#00843D',
    buttonBg: '#00843D',
    phoneTextColor: '#00843D',
  },
  '/lg-service': {
    id: 'lg',
    name: 'LG',
    primary: '#A50034',
    hover: '#85002A',
    lightBg: '#FFF1F2',
    borderColor: '#FECDD3',
    gradientFrom: '#fb7185',
    gradientTo: '#f43f5e',
    badgeBg: '#A50034',
    bannerBg: '#A50034',
    buttonBg: '#A50034',
    phoneTextColor: '#A50034',
  },
  '/bluestar-service': {
    id: 'bluestar',
    name: 'Blue Star',
    primary: '#0D47A1',
    hover: '#0a3880',
    lightBg: '#EFF6FF',
    borderColor: '#BFDBFE',
    gradientFrom: '#3b82f6',
    gradientTo: '#1d4ed8',
    badgeBg: '#0D47A1',
    bannerBg: '#0D47A1',
    buttonBg: '#0D47A1',
    phoneTextColor: '#0D47A1',
  },
  '/livpure-service': {
    id: 'livpure',
    name: 'Livpure',
    primary: '#582C83',
    hover: '#48206d',
    lightBg: '#FAF5FF',
    borderColor: '#E9D5FF',
    gradientFrom: '#9333ea',
    gradientTo: '#6b21a8',
    badgeBg: '#582C83',
    bannerBg: '#582C83',
    buttonBg: '#582C83',
    phoneTextColor: '#582C83',
  },
  '/havells-service': {
    id: 'havells',
    name: 'Havells',
    primary: '#DC2626',
    hover: '#b91c1c',
    lightBg: '#FEF2F2',
    borderColor: '#FECACA',
    gradientFrom: '#ef4444',
    gradientTo: '#dc2626',
    badgeBg: '#DC2626',
    bannerBg: '#DC2626',
    buttonBg: '#DC2626',
    phoneTextColor: '#DC2626',
  },
};

export function getBrandTheme(currentRoute: string, lastBrandRoute?: string | null): BrandThemeConfig {
  if (BRAND_THEME_MAP[currentRoute]) {
    return BRAND_THEME_MAP[currentRoute];
  }

  // If user is on a policy page or other secondary page and arrived from a brand page
  if (currentRoute !== '/' && lastBrandRoute && BRAND_THEME_MAP[lastBrandRoute]) {
    return BRAND_THEME_MAP[lastBrandRoute];
  }

  return DEFAULT_THEME;
}
