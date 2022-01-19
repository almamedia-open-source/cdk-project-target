
/**
 * Availalbe Enviroment Categories.
 *
 * Categories are useful grouping to make distinction between `stable`
 * environments (`staging` & `production`) from `feature` or `verification`
 * environments (such as `test` or `preproduction`).
 */
export enum EnvironmentCategory {
  MOCK = 'mock',
  DEVELOPMENT = 'development',
  FEATURE = 'feature',
  VERIFICATION = 'verification',
  STABLE = 'stable',
}

/**
 * Available Environment Labels.
 *
 * Labels are useful since Environment Name can be complex,
 * such as `feature/foo-bar` or `qa3`,
 * but we need to be able to “label” all `feature/*` and `qaN` environment names
 * as either `feature` or `qa`.
 */
export enum EnvironmentLabel {
  MOCK='mock',
  DEVELOPMENT='development',
  FEATURE='feature',
  TEST='test', // replaces "prestaging"
  STAGING='staging',
  QA='qa',
  PREPRODUCTION='preproduction',
  PRODUCTION='production',
}

/**
 * Map Environment Type to Environment Category.
 * I.e. `staging` and `production` are considered being `stable` environments.
 */
export const labelToCategory: Record<EnvironmentLabel, EnvironmentCategory> = {
  [EnvironmentLabel.MOCK]: EnvironmentCategory.MOCK,
  [EnvironmentLabel.DEVELOPMENT]: EnvironmentCategory.DEVELOPMENT,
  [EnvironmentLabel.FEATURE]: EnvironmentCategory.FEATURE,
  [EnvironmentLabel.TEST]: EnvironmentCategory.VERIFICATION,
  [EnvironmentLabel.STAGING]: EnvironmentCategory.STABLE,
  [EnvironmentLabel.QA]: EnvironmentCategory.VERIFICATION,
  [EnvironmentLabel.PREPRODUCTION]: EnvironmentCategory.VERIFICATION,
  [EnvironmentLabel.PRODUCTION]: EnvironmentCategory.STABLE,
};
