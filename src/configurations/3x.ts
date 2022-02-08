import { Account } from '@almamedia-open-source/cdk-project-context';
import { AccountConfiguration, AccountType } from './accounts';
import { EnvironmentLabel } from './environments';


export interface ProjectAccounts3xProps {
  readonly [AccountType.DEV]: AccountConfiguration;
  readonly [AccountType.PREPROD]: AccountConfiguration;
  readonly [AccountType.PROD]: AccountConfiguration;
}

/**
 * Enables triple account strategy.
 *
 * 1. `dev` account with environments:
 *    - development
 *    - feature/*
 *    - test
 *    - staging
 * 2. `preprod` account with environments:
 *    - qaN
 *    - preproduction
 * 3. `prod` account with environments:
 *    - production
 *
 * @example
 * new ProjectAccounts3x({
 *   dev: {
 *     id: '111111111111',
 *   },
 *   preprod: {
 *     id: '222222222222',
 *   },
 *   prod: {
 *     id: '333333333333',
 *   },
 * }),
 */
export class ProjectAccounts3x implements Record<string, Account> {
  [accountType: string]: Account;

  constructor(props: ProjectAccounts3xProps) {
    this[AccountType.DEV] = {
      ...props[AccountType.DEV],
      environments: [
        EnvironmentLabel.DEVELOPMENT,
        EnvironmentLabel.FEATURE,
        EnvironmentLabel.TEST,
        EnvironmentLabel.STAGING,
      ],
    };

    this[AccountType.PREPROD] = {
      ...props[AccountType.PREPROD],
      environments: [
        EnvironmentLabel.QA,
        EnvironmentLabel.PREPRODUCTION,
      ],
    };

    this[AccountType.PROD] = {
      ...props[AccountType.PROD],
      environments: [
        EnvironmentLabel.PRODUCTION,
      ],
    };
  }
}
