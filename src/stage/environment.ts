import { AccountType, EnvironmentType, Project } from '@almamedia-open-source/cdk-project-context';
import { Stage } from 'aws-cdk-lib';
import { pascalCase } from 'change-case';
import { Construct } from 'constructs';
import { EnvironmentContext } from '../context/environment';

export interface EnvironmentStageProps {
  readonly environmentType: string;
  readonly region?: string;
}

/**
 * Doesn't seem to work as expected.
 * @deprecated
 */
export class EnvironmentStage extends Stage {
  constructor(scope: Construct, props?: EnvironmentStageProps) {
    const type = EnvironmentContext.getName(scope);
    const id = `${pascalCase(type)}Environment`;

    // Set environment type context explicitly if provided via prop instead of CLI context
    if (props?.environmentType) {
      const projectConfiguration = Project.getConfiguration(scope);
      const accountType = AccountType.matchFromEnvironment(scope, projectConfiguration.accounts, props.environmentType);
      AccountType.set(scope, accountType);
      EnvironmentType.set(scope, props.environmentType);
    }

    super(scope, id, { env: { region: props?.region } });
  }
}

export class EnvironmentConstruct extends Construct {
  constructor(scope: Construct) {
    const type = EnvironmentContext.getName(scope);
    const id = `${pascalCase(type)}Environment`;
    super(scope, id);
  }
}


