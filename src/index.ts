//import * as cdk from 'aws-cdk-lib';


//export * from './configurations/2x';
//export * from './configurations/3x';
export * from './configurations/accounts'; // TODO clean
export * from './configurations/environments'; // TODO clean
export { AccountContext, AccountContext as AC } from './context/account';
export { EnvironmentContext, EnvironmentContext as EC } from './context/environment';
export { AccountConstruct } from './stage/account';
export { EnvironmentConstruct } from './stage/environment';
