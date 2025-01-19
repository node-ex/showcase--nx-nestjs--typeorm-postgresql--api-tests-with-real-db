import type { DataSource } from 'typeorm';
import type { Client } from 'pg';

declare global {
  /**
   * Available in the global Node.js context
   */
  // eslint-disable-next-line no-var
  var __GLOBAL_TYPEORM_DATA_SOURCE_TEMPLATE_DATABASE__: DataSource;

  /**
   * Available in the test environment class
   */
  // eslint-disable-next-line no-var
  var __TEST_ENVIRONMENT_PG_CLIENT_SYSTEM_DATABASE__: Client;

  /**
   * Available in the isolated test context
   */
  // eslint-disable-next-line no-var
  var __TYPEORM_DATA_SOURCE_TEST_DATABASE__: DataSource;
  // eslint-disable-next-line no-var
  var __PG_CLIENT_TEST_DATABASE__: Client;
}

export {};
