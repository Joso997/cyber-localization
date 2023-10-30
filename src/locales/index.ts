import { hrDictionary } from '@/locales/hr-HR'
import { enDictionary } from '@/locales/en-EN'

export type TranslationKeys = {
  email: string,
  name: string,
  aboutUser: string,
  login: string,
  register: string,
  discoverFuture: string,
  harnessPower: string,
  smartControl: string,
  tailoredIoTSolutions: string,
  dataAnalytics: string,
  useAppAnalytics: string,
  infrastructureManagement: string,
  manageIoTInfrastructure: string,
  smartCities: string,
  ourSolutionFacilitates: string,
  smartCamps: string,
  improveOrganization: string,
  smartInfrastructure: string,
  enhanceInfrastructureProjects: string,
  meetOurClients: string,
  efficientlyManagingCityLights: string,
  enjoyingFlawlessPowerControl: string,
  readyToGetStarted: string,
  formSubmissionSuccessful: string,
  toActivateThisForm: string,
  errorSendingMessage: string,
  about: string,
  contact: string,
  english: string,
  croatian: string
  language: string,
  search: string,
  profile: string,
  administration: string,
  firmSelection: string,
  openReport: string,
  logOut: string,
  report: string,
  map: string,
  entities: string,
  permissions: string,
  groups: string,
  divisions: string,
  scan: string,
  add: string,
  cancel: string,
  save: string,
  reSort: string,
  delete: string,
  selectFirm: string,
  viewImages: string,
  viewPDFs: string,
  edit: string,
  form: string,
  autoGenerate: string,
  entityNotFound: string,
  toggleLegend: string,
  open: string,
  code: string,
  entitiesWithSameCoordinates: string,
  enterEntityCode: string,
  longitude: string,
  latitude: string,
  get: string,
  changeOrientation: string,
  vertical: string,
  horizontal: string,
  deleteCheckDataPrev: string,
  deleteCheckDataAfter: string,
  deleteCheckDataPrev2: string,
  deleteCheckDataAfter2: string,
  cannotDelete: string,
  yes: string,
  no: string,
  ok: string,
  addAttribute: string,
  ascending: string,
  descending: string,
  filterByCode: string,
  filterByGroup: string,
  filterByDivision: string,
}

export type Translations = {
  en: TranslationKeys,
  hr: TranslationKeys
}

export const translations: Translations = {
  en: enDictionary,
  hr: hrDictionary
}

export const $t = translations[(localStorage.getItem('lang') || 'en') as keyof Translations]