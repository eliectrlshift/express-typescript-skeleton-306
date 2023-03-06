import { performance } from 'perf_hooks';

import { DependencyInjection } from './di/dependency-injection';
import { LOGGER } from '@domain/shared';

interface BootstrapResult {
  bootstrapDuration: number;
}

const bootstrap = async (): Promise<BootstrapResult> => {
  const bootstrapStartTime = performance.now();

  LOGGER.info('Bootstrapping infrastructure...');

  const bootstrapEndTime = performance.now();

  LOGGER.info('Initializing DI container...');

  await DependencyInjection.initialize();

  LOGGER.info('DI container initialized!');

  const bootstrapDuration = bootstrapEndTime - bootstrapStartTime;

  LOGGER.info(
    `Infrastructure bootstrap took +${bootstrapDuration} ms to execute!`
  );

  return { bootstrapDuration };
};

export { bootstrap, BootstrapResult };
