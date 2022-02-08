import { Account } from '@almamedia-open-source/cdk-project-context';
import { AccountConfiguration, AccountType } from './accounts';
import { EnvironmentLabel } from './environments';

export interface ProjectAccounts2xProps {
  readonly [AccountType.DEV]: AccountConfiguration;
  readonly [AccountType.PROD]: AccountConfiguration;
}

/**
 * Enables dual account strategy.
 *
 * 1. `dev` account with environments:
 *    - development
 *    - feature/*
 *    - test
 *    - qaN
 *    - staging
 * 2. `prod` account with environments:
 *    - preproduction
 *    - production
 *
 * @example
 * new ProjectAccounts2x({
 *   dev: {
 *     id: '111111111111',
 *   },
 *   prod: {
 *     id: '222222222222',
 *   },
 * }),
 */
export class ProjectAccounts2x implements Record<string, Account> {
  [accountType: string]: Account;

  constructor(props: ProjectAccounts2xProps) {
    this[AccountType.DEV] = {
      ...props[AccountType.DEV],
      environments: [
        EnvironmentLabel.DEVELOPMENT,
        EnvironmentLabel.FEATURE,
        EnvironmentLabel.TEST,
        EnvironmentLabel.QA,
        EnvironmentLabel.STAGING,
      ],
    };

    this[AccountType.PROD] = {
      ...props[AccountType.PROD],
      environments: [
        EnvironmentLabel.PREPRODUCTION,
        EnvironmentLabel.PRODUCTION,
      ],
    };
  }
}
