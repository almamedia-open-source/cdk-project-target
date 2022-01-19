import { Account, AccountType, AccountWithEnvironments } from './accounts';
import { EnvironmentLabel } from './environments';

export interface ProjectAccounts1xProps {
  readonly [AccountType.SHARED]: Account;
}

export class ProjectAccounts1x {
  readonly [AccountType.SHARED]: AccountWithEnvironments;

  constructor(props: ProjectAccounts1xProps) {
    this[AccountType.SHARED] = {
      ...props[AccountType.SHARED],
      environments: [
        EnvironmentLabel.DEVELOPMENT,
        EnvironmentLabel.FEATURE,
        EnvironmentLabel.TEST,
        EnvironmentLabel.STAGING,
        EnvironmentLabel.PREPRODUCTION,
        EnvironmentLabel.PRODUCTION,
      ],
    };
  }
}
