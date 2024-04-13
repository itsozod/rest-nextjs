export interface Country {
  capital: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  region: string;
  subregion: string;
  currencies: any;
  borders: string[];
  altSpellings: string[];
  languages: any;
  tld: string[];
}
