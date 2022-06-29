import { Project, ProjectContext } from '@almamedia-open-source/cdk-project-context';
import { Accounts } from '../src/configurations/accounts';
import { AccountConstruct } from '../src/stage/account';
import { mock, shared } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('stage', () => {
  test('AccountConstruct should have empty environment', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.one({
        mock,
        shared,
      }),
      context: {
        'account-type': 'dev',
        'environment': 'staging',
      },
    });

    const accountConstruct = new AccountConstruct(project);
    const env = ProjectContext.tryGetEnvironment(accountConstruct);
    expect(env).toEqual('');
  });
});
