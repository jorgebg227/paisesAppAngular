export interface Country {
    currencies:   Currency[];
    translations: Translations;
    flag:         string;
    name:         string;
    alpha2Code:   string;
    alpha3Code:   string;
    capital:      string;
    altSpellings: string[];
    region:       string;
    subregion:    string;
    population:   number;
    nativeName:   string;
    numericCode:  string;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
}
