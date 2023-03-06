// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-vault-core').config();

const getEnvironmentString = (key: string, defaultValue: string): string =>
  process.env[String(key)] || defaultValue;

const getEnvironmentNumber = (key: string, defaultValue: number): number =>
  Number(process.env[String(key)] || defaultValue);

export { getEnvironmentNumber, getEnvironmentString };
