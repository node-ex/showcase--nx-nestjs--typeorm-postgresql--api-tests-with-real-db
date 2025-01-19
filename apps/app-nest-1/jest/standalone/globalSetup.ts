import type { Config } from '@jest/types';
import { debug as _debug } from 'debug';
import { createCliDataSource } from '../../src/shared/utils/cli-data-source.utils';

const debug = _debug('jest-postgres:setup:custom');

/**
 * Important steps:
 * - Create and initialize a new TypeORM DataSource for the template database
 * - Store a reference to the initialized TypeORM DataSource in globalThis
 */
export default async (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): Promise<void> => {
  /** For outputting next debug message on a new line */
  debug('');
  debug('standalone setup.ts');

  const appDataSource = await createCliDataSource();
  await appDataSource.initialize();

  globalThis.__GLOBAL_TYPEORM_DATA_SOURCE_TEMPLATE_DATABASE__ = appDataSource;
};
