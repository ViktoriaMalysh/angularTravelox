export const locale = [
  {
    text: "ARGENTINA",
    value: "ARGENTINA",
    key: "es_AR",
  },
  {
    text: "BOLIVIA",
    value: "BOLIVIA",
    key: "es_BO",
  },
  {
    text: "BRAZIL",
    value: "BRAZIL",
    key: "pt_BR",
  },
  {
    text: "CANADA",
    value: "CANADA",
    key: "en_CA",
  },
  {
    text: "CHILE",
    value: "CHILE",
    key: "es_CL",
  },
  {
    text: "COLOMBIA",
    value: "COLOMBIA",
    key: "es_CO",
  },
  {
    text: "COSTA RICA",
    value: "COSTA RICA",
    key: "es_CR",
  },
  {
    text: "MEXICO",
    value: "MEXICO",
    key: "en_MX",
  },
  {
    text: "PANAMA",
    value: "PANAMA",
    key: "es_PA",
  },
  {
    text: "PERU",
    value: "PERU",
    key: "es_PE",
  },
  {
    text: "UNITED STATES",
    value: "UNITED STATES",
    key: "es_US",
  },
  {
    text: "VENEZUELA",
    value: "VENEZUELA",
    key: "es_VE",
  },
  {
    text: "AUSTRIA",
    value: "AUSTRIA",
    key: "de_AT",
  },
  {
    text: "DENMARK",
    value: "DENMARK",
    key: "da_DK",
  },
  {
    text: "ESTONIA",
    value: "ESTONIA",
    key: "et_EE",
  },
  {
    text: "FINLAND",
    value: "FINLAND",
    key: "fi_FI",
  },
  {
    text: "FRANCE",
    value: "FRANCE",
    key: "fr_FR",
  },
  {
    text: "GERMANY",
    value: "GERMANY",
    key: "de_DE",
  },
  {
    text: "GREECE",
    value: "GREECE",
    key: "el_GR",
  },
  {
    text: "ITALY",
    value: "ITALY",
    key: "it_IT",
  },
  {
    text: "LATVIA",
    value: "LATVIA",
    key: "lv_LV",
  },
  {
    text: "NORWAY",
    value: "NORWAY",
    key: "no_NO",
  },
  {
    text: "POLAND",
    value: "POLAND",
    key: "pl_PL",
  },
  {
    text: "PORTUGAL",
    value: "PORTUGAL",
    key: "pt_PT",
  },
  {
    text: "SPAIN",
    value: "SPAIN",
    key: "es_ES",
  },
  {
    text: "UKRAINE",
    value: "UKRAINE",
    key: "uk_UA",
  },
  {
    text: "INDIA",
    value: "INDIA",
    key: "en_IN",
  },
  {
    text: "JAPAN",
    value: "JAPAN",
    key: "ja_JP",
  },
  {
    text: "KOREA",
    value: "KOREA",
    key: "en_KR",
  },
  {
    text: "TURKEY",
    value: "TURKEY",
    key: "tr_TR",
  },
  {
    text: "ISRAEL",
    value: "ISRAEL",
    key: "iw_IL",
  },
  {
    text: "SOUTH_AFRICA",
    value: "SOUTH_AFRICA",
    key: "en_ZA",
  },
];

const test = {
  currency: 'USD',
  eapid: 1,
  locale: 'es_AR',
  siteId: 300000001,
  destination: { regionId: '6054439' },
  checkInDate: { day: 19, month: 11, year: 2023 },
  checkOutDate: { day: 20, month: 11, year: 2023 },
  rooms: [ { adults: 1 } ],
  resultsStartingIndex: 0,
  resultsSize: 200,
  sort: 'PRICE_LOW_TO_HIGH',
  filters: { price: { min: 100, max: 150 }, star: [ '50' ] }
}

const test2 = {
  currency: 'USD',
  eapid: 1,
  locale: 'pt_BR',
  siteId: 300000001,
  destination: { regionId: '6054439' },
  checkInDate: { day: 19, month: 11, year: 2023 },
  checkOutDate: { day: 12, month: 11, year: 2023 },
  rooms: [ { adults: 1 } ],
  resultsStartingIndex: 0,
  resultsSize: 200,
  sort: 'PRICE_LOW_TO_HIGH',
  filters: { price: { min: 100, max: 150 }, star: [ '50' ] }
}
