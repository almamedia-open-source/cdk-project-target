import { Account, AccountType, AccountWithEnvironments } from './accounts';
import { EnvironmentLabel } from './environments';


export interface ProjectAccounts3xProps {
  readonly [AccountType.DEV]: Account;
  readonly [AccountType.PREPROD]: Account;
  readonly [AccountType.PROD]: Account;
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
export class ProjectAccounts3x {
  readonly [AccountType.DEV]: AccountWithEnvironments;
  readonly [AccountType.PREPROD]: AccountWithEnvironments;
  readonly [AccountType.PROD]: AccountWithEnvironments;

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
