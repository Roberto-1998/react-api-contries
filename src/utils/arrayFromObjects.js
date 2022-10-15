export const arrayOfLanguages = (languagesObject) => {
  const languages = [];

  for (const [, valor] of Object.entries(languagesObject)) {
    languages.push(valor);
  }

  return languages;
};

export const arrayOfCurrencies = (currenciesObject) => {
  const currencies = [];

  for (const [, valor] of Object.entries(currenciesObject)) {
    currencies.push(valor.name);
  }

  return currencies;
};
