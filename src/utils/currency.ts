export type SupportedCurrency = 'ARS' | 'USD' | 'EUR' | 'GBP' | 'MXN' | 'CLP';

export const ASTROPAY_PAYMENT_LINK =
  'https://onetouch.astropay.com/payment?external_reference_id=vzAiAKLGHKHPj1bgRAXJEWIERL6oiUDN';

export interface BankField {
  label: string;
  value: string;
  copyable?: boolean;
}

export interface CurrencyConfig {
  code: SupportedCurrency;
  symbol: string;
  flag: string;
  name: string;
  country: string;
  rate: number;
  decimals: number;
  paymentTitle: string;
  paymentDetails: {
    method: string;
    accountHolder: string;
    bankName: string;
    accountLabel: string;
    accountValue: string;
    secondaryLabel?: string;
    secondaryValue?: string;
    // Granular bank fields for USA, Europe, UK, etc.
    fields?: BankField[];
    astropayLink?: string;
    instructions: string;
  };
}

export const CURRENCIES: Record<SupportedCurrency, CurrencyConfig> = {
  ARS: {
    code: 'ARS',
    symbol: '$',
    flag: '🇦🇷',
    name: 'Peso Argentino',
    country: 'Argentina',
    rate: 1,
    decimals: 0,
    paymentTitle: 'Transferencia Bancaria · Alias Mercado Pago o CBU',
    paymentDetails: {
      method: 'Mercado Pago / Transferencia (Argentina)',
      accountHolder: 'Sol Jimena Duran',
      bankName: 'Mercado Pago',
      accountLabel: 'Alias Mercado Pago',
      accountValue: 'liorah.ok',
      secondaryLabel: 'CBU',
      secondaryValue: '0000003100094821568912',
      fields: [
        { label: 'Titular de la cuenta', value: 'Sol Jimena Duran', copyable: false },
        { label: 'Alias Mercado Pago', value: 'liorah.ok', copyable: true },
        { label: 'CBU', value: '0000003100094821568912', copyable: true },
        { label: 'Billetera / Banco', value: 'Mercado Pago Argentina', copyable: false },
      ],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Transferí desde Mercado Pago o cualquier banco argentino al alias liorah.ok y enviá el comprobante por WhatsApp para iniciar el diseño.',
    },
  },
  USD: {
    code: 'USD',
    symbol: 'US$',
    flag: '🇺🇸',
    name: 'Dólar Estadounidense',
    country: 'Estados Unidos & Internacional',
    rate: 1 / 1200,
    decimals: 0,
    paymentTitle: 'Transferencia Bancaria USA (ACH / Wire / SWIFT) · AstroPay',
    paymentDetails: {
      method: 'Cuenta Bancaria USA (SSB Bank) / AstroPay',
      accountHolder: 'Sol Jimena Duran',
      bankName: 'SSB Bank',
      accountLabel: 'Número de cuenta',
      accountValue: '182703983165',
      secondaryLabel: 'Número de ruta (Routing / ABA)',
      secondaryValue: '043087080',
      fields: [
        { label: 'Titular de la cuenta', value: 'Sol Jimena Duran', copyable: false },
        { label: 'Número de cuenta', value: '182703983165', copyable: true },
        { label: 'Número de ruta (Routing)', value: '043087080', copyable: true },
        { label: 'Código SWIFT', value: 'SSBAUS32', copyable: true },
        { label: 'Tipo de cuenta', value: 'CHECKING', copyable: false },
        { label: 'Banco', value: 'SSB Bank', copyable: false },
        {
          label: 'Dirección del banco',
          value: '8700 Perry Hwy, Pittsburgh, Pennsylvania, 15237, USA',
          copyable: true,
        },
      ],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Transferí en dólares directamente a nuestra cuenta bancaria en SSB Bank (USA) vía ACH, Wire o SWIFT internacional. También podés pagar directo por AstroPay con cualquier tarjeta o banco.',
    },
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    flag: '🇪🇺',
    name: 'Euro',
    country: 'Unión Europea & España',
    rate: 1 / 1300,
    decimals: 0,
    paymentTitle: 'Transferencia SEPA (IBAN) · AS LHV Pank · AstroPay',
    paymentDetails: {
      method: 'Transferencia Bancaria SEPA / AstroPay',
      accountHolder: 'Sol Jimena Duran',
      bankName: 'AS LHV Pank',
      accountLabel: 'IBAN',
      accountValue: 'EE447777000166843985',
      secondaryLabel: 'BIC / SWIFT',
      secondaryValue: 'LHVBEE22',
      fields: [
        { label: 'Titular de la cuenta', value: 'Sol Jimena Duran', copyable: false },
        { label: 'IBAN', value: 'EE447777000166843985', copyable: true },
        { label: 'BIC / SWIFT', value: 'LHVBEE22', copyable: true },
        { label: 'Banco', value: 'AS LHV Pank', copyable: false },
        { label: 'Dirección del banco', value: 'Tartu mnt 2, 10145 Tallinn', copyable: true },
        { label: 'País del banco', value: 'EE (Estonia - Unión Europea)', copyable: false },
      ],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Transferencia SEPA en euros sin comisiones a nuestra cuenta bancaria en AS LHV Pank o realizá el pago instantáneo con tu tarjeta/banco mediante AstroPay.',
    },
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    flag: '🇬🇧',
    name: 'Libra Esterlina',
    country: 'Reino Unido (UK)',
    rate: 1 / 1550,
    decimals: 0,
    paymentTitle: 'Transferencia Bancaria UK (IBAN / SWIFT) · LHV Bank · AstroPay',
    paymentDetails: {
      method: 'Transferencia Bancaria UK / AstroPay',
      accountHolder: 'Sol Jimena Duran',
      bankName: 'LHV Bank Limited',
      accountLabel: 'IBAN',
      accountValue: 'GB67LHVB04030819282380',
      secondaryLabel: 'BIC / SWIFT',
      secondaryValue: 'LHVBGB2L',
      fields: [
        { label: 'Titular de la cuenta', value: 'Sol Jimena Duran', copyable: false },
        { label: 'IBAN', value: 'GB67LHVB04030819282380', copyable: true },
        { label: 'BIC / SWIFT', value: 'LHVBGB2L', copyable: true },
        { label: 'Banco', value: 'LHV Bank Limited', copyable: false },
        { label: 'Dirección del banco', value: '1 Angel Court, London EC2R 7HJ', copyable: true },
        { label: 'País del banco', value: 'GB (Reino Unido)', copyable: false },
      ],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Transferencia en libras esterlinas (GBP) a nuestra cuenta de LHV Bank Limited en Londres o pagá en 1 clic con AstroPay desde cualquier entidad bancaria.',
    },
  },
  MXN: {
    code: 'MXN',
    symbol: '$',
    flag: '🇲🇽',
    name: 'Peso Mexicano',
    country: 'México',
    rate: 19.8 / 1200,
    decimals: 0,
    paymentTitle: 'AstroPay OneTouch · México',
    paymentDetails: {
      method: 'AstroPay OneTouch',
      accountHolder: 'Sol Jimena Duran (LIORAH STUDIO)',
      bankName: 'AstroPay',
      accountLabel: 'Pasarela Oficial',
      accountValue: 'AstroPay OneTouch',
      fields: [],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Aboná en pesos mexicanos (MXN) en 1 toque con tus tarjetas o medios locales a través de la pasarela protegida AstroPay OneTouch.',
    },
  },
  CLP: {
    code: 'CLP',
    symbol: '$',
    flag: '🇨🇱',
    name: 'Peso Chileno',
    country: 'Chile',
    rate: 0.8,
    decimals: 0,
    paymentTitle: 'AstroPay OneTouch · Chile',
    paymentDetails: {
      method: 'AstroPay OneTouch',
      accountHolder: 'Sol Jimena Duran (LIORAH STUDIO)',
      bankName: 'AstroPay',
      accountLabel: 'Pasarela Oficial',
      accountValue: 'AstroPay OneTouch',
      fields: [],
      astropayLink: ASTROPAY_PAYMENT_LINK,
      instructions:
        'Aboná en pesos chilenos (CLP) a través de AstroPay OneTouch con tarjetas locales y medios de pago habituales.',
    },
  },
};

const STORAGE_KEY = 'liorah_selected_currency';

export function getSavedCurrency(): SupportedCurrency {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as SupportedCurrency;
    if (saved && CURRENCIES[saved]) {
      return saved;
    }
  } catch (e) {
    console.error('Error reading currency from storage', e);
  }
  return 'ARS';
}

export function saveSelectedCurrency(currency: SupportedCurrency): void {
  try {
    localStorage.setItem(STORAGE_KEY, currency);
    window.dispatchEvent(new CustomEvent('liorah-currency-change', { detail: currency }));
  } catch (e) {
    console.error('Error saving currency to storage', e);
  }
}

/**
 * Converts an ARS baseline price into the target currency amount
 */
export function convertFromArs(arsAmount: number, currency: SupportedCurrency): number {
  const config = CURRENCIES[currency] || CURRENCIES.ARS;
  if (currency === 'ARS') return arsAmount;
  const raw = arsAmount * config.rate;
  // Round nicely for presentation
  if (currency === 'USD' || currency === 'EUR' || currency === 'GBP') {
    return Math.round(raw);
  }
  if (currency === 'MXN') {
    // Round to nearest 10 or 5 for clean store numbers
    return Math.round(raw / 10) * 10;
  }
  if (currency === 'CLP') {
    // Round to nearest 1000
    return Math.round(raw / 1000) * 1000;
  }
  return Math.round(raw);
}

/**
 * Formats an ARS baseline amount into the target currency string
 * e.g. "$70.000 ARS", "$58 USD", "£45 GBP", "$1.150 MXN", "€54 EUR", "$56.000 CLP"
 */
export function formatPrice(
  arsAmount: number,
  currency: SupportedCurrency = 'ARS',
  showCode: boolean = true
): string {
  const config = CURRENCIES[currency] || CURRENCIES.ARS;
  const converted = convertFromArs(arsAmount, currency);

  let formattedNumber = '';
  if (currency === 'EUR') {
    formattedNumber = converted.toLocaleString('es-ES');
    return showCode ? `€${formattedNumber} EUR` : `€${formattedNumber}`;
  } else if (currency === 'GBP') {
    formattedNumber = converted.toLocaleString('en-GB');
    return showCode ? `£${formattedNumber} GBP` : `£${formattedNumber}`;
  } else if (currency === 'USD') {
    formattedNumber = converted.toLocaleString('en-US');
    return showCode ? `$${formattedNumber} USD` : `$${formattedNumber}`;
  } else if (currency === 'MXN') {
    formattedNumber = converted.toLocaleString('es-MX');
    return showCode ? `$${formattedNumber} MXN` : `$${formattedNumber}`;
  } else if (currency === 'CLP') {
    formattedNumber = converted.toLocaleString('es-CL');
    return showCode ? `$${formattedNumber} CLP` : `$${formattedNumber}`;
  } else {
    // ARS default
    formattedNumber = converted.toLocaleString('es-AR');
    return showCode ? `$${formattedNumber} ARS` : `$${formattedNumber}`;
  }
}
