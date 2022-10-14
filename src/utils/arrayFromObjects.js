export const arrayOfLanguages = (languagesObject) => {
  const languages = [];

  for (const [clave, valor] of Object.entries(languagesObject)) {
    languages.push(valor);
  }

  return languages;
};

export const arrayOfCurrencies = (currenciesObject) => {
  const currencies = [];

  for (const [clave, valor] of Object.entries(currenciesObject)) {
    currencies.push(valor.name);
  }

  return currencies;
};
