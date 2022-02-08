import { Project } from '@almamedia-open-source/cdk-project-context';
import { ProjectAccounts1x } from '../src/configurations/1x';
import { shared } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('1x', () => {
  test('shared', () => {
    const project = new Project({
      ...defaultProject,
      accounts: new ProjectAccounts1x({
        shared,
      }),
    });
    const account = Project.getAccount(project, 'shared');
    expect(account).toEqual({
      ...shared,
      environments: [
        'development',
        'feature/[/a-zA-z0-9-]+',
        'test',
        'qa[0-9]',
        'staging',
        'preproduction',
        'production',
      ],
    });
  });
});
