import { Project } from '@almamedia-open-source/cdk-project-context';
import { Accounts } from '../src/configurations/accounts';
import { mock, shared } from './mock/accounts';
import { defaultProject } from './mock/project';

describe('1x', () => {
  test('mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.one({
        mock,
        shared,
      }),
    });
    const account = Project.getAccount(project, 'mock');
    expect(account).toEqual({
      ...mock,
      environments: ['mock[0-9]'],
    });
  });

  test('shared', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.one({
        mock,
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

  test('works without mock', () => {
    const project = new Project({
      ...defaultProject,
      accounts: Accounts.one({
        shared,
      }),
    });
    const sharedAcc = Project.getAccount(project, 'shared');
    expect(sharedAcc).toEqual({
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
    const mockAcc = Project.getAccount(project, 'mock');
    expect(mockAcc).toEqual({
      ...mock,
      environments: ['mock[0-9]'],
    });
  });
});
