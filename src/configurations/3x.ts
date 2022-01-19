import { Account, AccountType, AccountWithEnvironments } from './accounts';
import { EnvironmentLabel } from './environments';


export interface ProjectAccounts3xProps {
  readonly [AccountType.DEV]: Account;
  readonly [AccountType.PREPROD]: Account;
  readonly [AccountType.PROD]: Account;
}

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
