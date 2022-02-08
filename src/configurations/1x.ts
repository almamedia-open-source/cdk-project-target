import { Account } from '@almamedia-open-source/cdk-project-context';
import { AccountConfiguration, AccountType } from './accounts';
import { EnvironmentLabel } from './environments';

export interface ProjectAccounts1xProps {
  readonly [AccountType.SHARED]: AccountConfiguration;
}

/**
 * Enables single account strategy.
 *
 * 1. `shared` account with environments:
 *    - development
 *    - feature/*
 *    - test
 *    - qaN
 *    - staging
 *    - preproduction
 *    - production
 *
 * @example
 * new ProjectAccounts1x({
 *   shared: {
 *     id: '111111111111',
 *   },
 * }),
 */
export class ProjectAccounts1x implements Record<string, Account> {
  [accountType: string]: Account;

  constructor(props: ProjectAccounts1xProps) {
    this[AccountType.SHARED] = {
      ...props[AccountType.SHARED],
      environments: [
        EnvironmentLabel.DEVELOPMENT,
        EnvironmentLabel.FEATURE,
        EnvironmentLabel.TEST,
        EnvironmentLabel.QA,
        EnvironmentLabel.STAGING,
        EnvironmentLabel.PREPRODUCTION,
        EnvironmentLabel.PRODUCTION,
      ],
    };
  }
}
