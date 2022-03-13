# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AccountConstruct <a name="@almamedia-open-source/cdk-project-target.AccountConstruct" id="almamediaopensourcecdkprojecttargetaccountconstruct"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.AccountConstruct.Initializer" id="almamediaopensourcecdkprojecttargetaccountconstructinitializer"></a>

```typescript
import { AccountConstruct } from '@almamedia-open-source/cdk-project-target'

new AccountConstruct(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkprojecttargetaccountconstructparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountConstruct.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountconstructparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---





### AccountStage <a name="@almamedia-open-source/cdk-project-target.AccountStage" id="almamediaopensourcecdkprojecttargetaccountstage"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.AccountStage.Initializer" id="almamediaopensourcecdkprojecttargetaccountstageinitializer"></a>

```typescript
import { AccountStage } from '@almamedia-open-source/cdk-project-target'

new AccountStage(scope: Construct, props?: AccountStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkprojecttargetaccountstageparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`props`](#almamediaopensourcecdkprojecttargetaccountstageparameterprops) | [`@almamedia-open-source/cdk-project-target.AccountStageProps`](#@almamedia-open-source/cdk-project-target.AccountStageProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountStage.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountstageparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountStage.parameter.props" id="almamediaopensourcecdkprojecttargetaccountstageparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountStageProps`](#@almamedia-open-source/cdk-project-target.AccountStageProps)

---





### EnvironmentConstruct <a name="@almamedia-open-source/cdk-project-target.EnvironmentConstruct" id="almamediaopensourcecdkprojecttargetenvironmentconstruct"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.EnvironmentConstruct.Initializer" id="almamediaopensourcecdkprojecttargetenvironmentconstructinitializer"></a>

```typescript
import { EnvironmentConstruct } from '@almamedia-open-source/cdk-project-target'

new EnvironmentConstruct(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkprojecttargetenvironmentconstructparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentConstruct.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentconstructparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---





### EnvironmentStage <a name="@almamedia-open-source/cdk-project-target.EnvironmentStage" id="almamediaopensourcecdkprojecttargetenvironmentstage"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.EnvironmentStage.Initializer" id="almamediaopensourcecdkprojecttargetenvironmentstageinitializer"></a>

```typescript
import { EnvironmentStage } from '@almamedia-open-source/cdk-project-target'

new EnvironmentStage(scope: Construct, props?: EnvironmentStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#almamediaopensourcecdkprojecttargetenvironmentstageparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`props`](#almamediaopensourcecdkprojecttargetenvironmentstageparameterprops) | [`@almamedia-open-source/cdk-project-target.EnvironmentStageProps`](#@almamedia-open-source/cdk-project-target.EnvironmentStageProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentStage.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentstageparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `props`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentStage.parameter.props" id="almamediaopensourcecdkprojecttargetenvironmentstageparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.EnvironmentStageProps`](#@almamedia-open-source/cdk-project-target.EnvironmentStageProps)

---





## Structs <a name="Structs" id="structs"></a>

### AccountConfiguration <a name="@almamedia-open-source/cdk-project-target.AccountConfiguration" id="almamediaopensourcecdkprojecttargetaccountconfiguration"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountConfiguration } from '@almamedia-open-source/cdk-project-target'

const accountConfiguration: AccountConfiguration = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#almamediaopensourcecdkprojecttargetaccountconfigurationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`config`](#almamediaopensourcecdkprojecttargetaccountconfigurationpropertyconfig) | {[ key: string ]: `any`} | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountConfiguration.property.id" id="almamediaopensourcecdkprojecttargetaccountconfigurationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `config`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountConfiguration.property.config" id="almamediaopensourcecdkprojecttargetaccountconfigurationpropertyconfig"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

### AccountsOneProps <a name="@almamedia-open-source/cdk-project-target.AccountsOneProps" id="almamediaopensourcecdkprojecttargetaccountsoneprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountsOneProps } from '@almamedia-open-source/cdk-project-target'

const accountsOneProps: AccountsOneProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`shared`](#almamediaopensourcecdkprojecttargetaccountsonepropspropertyshared)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`mock`](#almamediaopensourcecdkprojecttargetaccountsonepropspropertymock) | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |

---

##### `shared`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountsOneProps.property.shared" id="almamediaopensourcecdkprojecttargetaccountsonepropspropertyshared"></a>

```typescript
public readonly shared: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `mock`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountsOneProps.property.mock" id="almamediaopensourcecdkprojecttargetaccountsonepropspropertymock"></a>

```typescript
public readonly mock: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

### AccountStageProps <a name="@almamedia-open-source/cdk-project-target.AccountStageProps" id="almamediaopensourcecdkprojecttargetaccountstageprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountStageProps } from '@almamedia-open-source/cdk-project-target'

const accountStageProps: AccountStageProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`accountType`](#almamediaopensourcecdkprojecttargetaccountstagepropspropertyaccounttype)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#almamediaopensourcecdkprojecttargetaccountstagepropspropertyregion) | `string` | *No description.* |

---

##### `accountType`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountStageProps.property.accountType" id="almamediaopensourcecdkprojecttargetaccountstagepropspropertyaccounttype"></a>

```typescript
public readonly accountType: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountStageProps.property.region" id="almamediaopensourcecdkprojecttargetaccountstagepropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

### AccountsTwoProps <a name="@almamedia-open-source/cdk-project-target.AccountsTwoProps" id="almamediaopensourcecdkprojecttargetaccountstwoprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountsTwoProps } from '@almamedia-open-source/cdk-project-target'

const accountsTwoProps: AccountsTwoProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetaccountstwopropspropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetaccountstwopropspropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`mock`](#almamediaopensourcecdkprojecttargetaccountstwopropspropertymock) | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountsTwoProps.property.dev" id="almamediaopensourcecdkprojecttargetaccountstwopropspropertydev"></a>

```typescript
public readonly dev: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountsTwoProps.property.prod" id="almamediaopensourcecdkprojecttargetaccountstwopropspropertyprod"></a>

```typescript
public readonly prod: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `mock`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountsTwoProps.property.mock" id="almamediaopensourcecdkprojecttargetaccountstwopropspropertymock"></a>

```typescript
public readonly mock: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

### AccountThreeProps <a name="@almamedia-open-source/cdk-project-target.AccountThreeProps" id="almamediaopensourcecdkprojecttargetaccountthreeprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountThreeProps } from '@almamedia-open-source/cdk-project-target'

const accountThreeProps: AccountThreeProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetaccountthreepropspropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`preprod`](#almamediaopensourcecdkprojecttargetaccountthreepropspropertypreprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetaccountthreepropspropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |
| [`mock`](#almamediaopensourcecdkprojecttargetaccountthreepropspropertymock) | [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountThreeProps.property.dev" id="almamediaopensourcecdkprojecttargetaccountthreepropspropertydev"></a>

```typescript
public readonly dev: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `preprod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountThreeProps.property.preprod" id="almamediaopensourcecdkprojecttargetaccountthreepropspropertypreprod"></a>

```typescript
public readonly preprod: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountThreeProps.property.prod" id="almamediaopensourcecdkprojecttargetaccountthreepropspropertyprod"></a>

```typescript
public readonly prod: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

##### `mock`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountThreeProps.property.mock" id="almamediaopensourcecdkprojecttargetaccountthreepropspropertymock"></a>

```typescript
public readonly mock: AccountConfiguration;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountConfiguration`](#@almamedia-open-source/cdk-project-target.AccountConfiguration)

---

### EnvironmentStageProps <a name="@almamedia-open-source/cdk-project-target.EnvironmentStageProps" id="almamediaopensourcecdkprojecttargetenvironmentstageprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { EnvironmentStageProps } from '@almamedia-open-source/cdk-project-target'

const environmentStageProps: EnvironmentStageProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`environmentType`](#almamediaopensourcecdkprojecttargetenvironmentstagepropspropertyenvironmenttype)<span title="Required">*</span> | `string` | *No description.* |
| [`region`](#almamediaopensourcecdkprojecttargetenvironmentstagepropspropertyregion) | `string` | *No description.* |

---

##### `environmentType`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentStageProps.property.environmentType" id="almamediaopensourcecdkprojecttargetenvironmentstagepropspropertyenvironmenttype"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* `string`

---

##### `region`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentStageProps.property.region" id="almamediaopensourcecdkprojecttargetenvironmentstagepropspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

### ProjectAccounts <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts" id="almamediaopensourcecdkprojecttargetprojectaccounts"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectAccounts } from '@almamedia-open-source/cdk-project-target'

const projectAccounts: ProjectAccounts = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccountspropertydev) | [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account) | *No description.* |
| [`mock`](#almamediaopensourcecdkprojecttargetprojectaccountspropertymock) | [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account) | *No description.* |
| [`preprod`](#almamediaopensourcecdkprojecttargetprojectaccountspropertypreprod) | [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccountspropertyprod) | [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account) | *No description.* |
| [`shared`](#almamediaopensourcecdkprojecttargetprojectaccountspropertyshared) | [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account) | *No description.* |

---

##### `dev`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccountspropertydev"></a>

```typescript
public readonly dev: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)

---

##### `mock`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.mock" id="almamediaopensourcecdkprojecttargetprojectaccountspropertymock"></a>

```typescript
public readonly mock: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)

---

##### `preprod`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.preprod" id="almamediaopensourcecdkprojecttargetprojectaccountspropertypreprod"></a>

```typescript
public readonly preprod: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)

---

##### `prod`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccountspropertyprod"></a>

```typescript
public readonly prod: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)

---

##### `shared`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.shared" id="almamediaopensourcecdkprojecttargetprojectaccountspropertyshared"></a>

```typescript
public readonly shared: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-context.Account`](#@almamedia-open-source/cdk-project-context.Account)

---

## Classes <a name="Classes" id="classes"></a>

### AccountContext <a name="@almamedia-open-source/cdk-project-target.AccountContext" id="almamediaopensourcecdkprojecttargetaccountcontext"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.AccountContext.Initializer" id="almamediaopensourcecdkprojecttargetaccountcontextinitializer"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

new AccountContext()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`getAccountConfig`](#almamediaopensourcecdkprojecttargetaccountcontextgetaccountconfig) | *No description.* |
| [`getAccountId`](#almamediaopensourcecdkprojecttargetaccountcontextgetaccountid) | *No description.* |
| [`getAccountType`](#almamediaopensourcecdkprojecttargetaccountcontextgetaccounttype) | *No description.* |
| [`isDev`](#almamediaopensourcecdkprojecttargetaccountcontextisdev) | *No description.* |
| [`isMock`](#almamediaopensourcecdkprojecttargetaccountcontextismock) | *No description.* |
| [`isPreProd`](#almamediaopensourcecdkprojecttargetaccountcontextispreprod) | *No description.* |
| [`isProd`](#almamediaopensourcecdkprojecttargetaccountcontextisprod) | *No description.* |
| [`isShared`](#almamediaopensourcecdkprojecttargetaccountcontextisshared) | *No description.* |

---

##### `getAccountConfig` <a name="@almamedia-open-source/cdk-project-target.AccountContext.getAccountConfig" id="almamediaopensourcecdkprojecttargetaccountcontextgetaccountconfig"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.getAccountConfig(scope: Construct, key: string)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

###### `key`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.key" id="almamediaopensourcecdkprojecttargetaccountcontextparameterkey"></a>

- *Type:* `string`

---

##### `getAccountId` <a name="@almamedia-open-source/cdk-project-target.AccountContext.getAccountId" id="almamediaopensourcecdkprojecttargetaccountcontextgetaccountid"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.getAccountId(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `getAccountType` <a name="@almamedia-open-source/cdk-project-target.AccountContext.getAccountType" id="almamediaopensourcecdkprojecttargetaccountcontextgetaccounttype"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.getAccountType(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `isDev` <a name="@almamedia-open-source/cdk-project-target.AccountContext.isDev" id="almamediaopensourcecdkprojecttargetaccountcontextisdev"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.isDev(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `isMock` <a name="@almamedia-open-source/cdk-project-target.AccountContext.isMock" id="almamediaopensourcecdkprojecttargetaccountcontextismock"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.isMock(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `isPreProd` <a name="@almamedia-open-source/cdk-project-target.AccountContext.isPreProd" id="almamediaopensourcecdkprojecttargetaccountcontextispreprod"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.isPreProd(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `isProd` <a name="@almamedia-open-source/cdk-project-target.AccountContext.isProd" id="almamediaopensourcecdkprojecttargetaccountcontextisprod"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.isProd(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `isShared` <a name="@almamedia-open-source/cdk-project-target.AccountContext.isShared" id="almamediaopensourcecdkprojecttargetaccountcontextisshared"></a>

```typescript
import { AccountContext } from '@almamedia-open-source/cdk-project-target'

AccountContext.isShared(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountContext.parameter.scope" id="almamediaopensourcecdkprojecttargetaccountcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---



### Accounts <a name="@almamedia-open-source/cdk-project-target.Accounts" id="almamediaopensourcecdkprojecttargetaccounts"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.Accounts.Initializer" id="almamediaopensourcecdkprojecttargetaccountsinitializer"></a>

```typescript
import { Accounts } from '@almamedia-open-source/cdk-project-target'

new Accounts()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`one`](#almamediaopensourcecdkprojecttargetaccountsone) | Enables single account strategy. |
| [`three`](#almamediaopensourcecdkprojecttargetaccountsthree) | Enables triple account strategy. |
| [`two`](#almamediaopensourcecdkprojecttargetaccountstwo) | Enables dual account strategy. |

---

##### `one` <a name="@almamedia-open-source/cdk-project-target.Accounts.one" id="almamediaopensourcecdkprojecttargetaccountsone"></a>

```typescript
import { Accounts } from '@almamedia-open-source/cdk-project-target'

Accounts.one(props: AccountsOneProps)
```

###### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.Accounts.parameter.props" id="almamediaopensourcecdkprojecttargetaccountsparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountsOneProps`](#@almamedia-open-source/cdk-project-target.AccountsOneProps)

---

##### `three` <a name="@almamedia-open-source/cdk-project-target.Accounts.three" id="almamediaopensourcecdkprojecttargetaccountsthree"></a>

```typescript
import { Accounts } from '@almamedia-open-source/cdk-project-target'

Accounts.three(props: AccountThreeProps)
```

###### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.Accounts.parameter.props" id="almamediaopensourcecdkprojecttargetaccountsparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountThreeProps`](#@almamedia-open-source/cdk-project-target.AccountThreeProps)

---

##### `two` <a name="@almamedia-open-source/cdk-project-target.Accounts.two" id="almamediaopensourcecdkprojecttargetaccountstwo"></a>

```typescript
import { Accounts } from '@almamedia-open-source/cdk-project-target'

Accounts.two(props: AccountsTwoProps)
```

###### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.Accounts.parameter.props" id="almamediaopensourcecdkprojecttargetaccountsparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountsTwoProps`](#@almamedia-open-source/cdk-project-target.AccountsTwoProps)

---



### EnvironmentContext <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext" id="almamediaopensourcecdkprojecttargetenvironmentcontext"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.Initializer" id="almamediaopensourcecdkprojecttargetenvironmentcontextinitializer"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

new EnvironmentContext()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="static-functions"></a>

| **Name** | **Description** |
| --- | --- |
| [`getCategory`](#almamediaopensourcecdkprojecttargetenvironmentcontextgetcategory) | Get Environment Category. |
| [`getFeatureInfo`](#almamediaopensourcecdkprojecttargetenvironmentcontextgetfeatureinfo) | Get Feature Info. |
| [`getLabel`](#almamediaopensourcecdkprojecttargetenvironmentcontextgetlabel) | Get Environment Label. |
| [`getName`](#almamediaopensourcecdkprojecttargetenvironmentcontextgetname) | Get Environment Name. |
| [`getUrlName`](#almamediaopensourcecdkprojecttargetenvironmentcontextgeturlname) | Get Environment URL/DNS Compatible Name. |
| [`isDevelopment`](#almamediaopensourcecdkprojecttargetenvironmentcontextisdevelopment) | Check if Environment is part of `development` category. |
| [`isFeature`](#almamediaopensourcecdkprojecttargetenvironmentcontextisfeature) | Check if Environment is part of `feature` category. |
| [`isMock`](#almamediaopensourcecdkprojecttargetenvironmentcontextismock) | Check if Environment is part of `mock` category. |
| [`isStable`](#almamediaopensourcecdkprojecttargetenvironmentcontextisstable) | Check if Environment is part of `stable` category. |
| [`isVerification`](#almamediaopensourcecdkprojecttargetenvironmentcontextisverification) | Check if Environment is part of `verification` category. |

---

##### `getCategory` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.getCategory" id="almamediaopensourcecdkprojecttargetenvironmentcontextgetcategory"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.getCategory(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `getFeatureInfo` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.getFeatureInfo" id="almamediaopensourcecdkprojecttargetenvironmentcontextgetfeatureinfo"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.getFeatureInfo(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `getLabel` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.getLabel" id="almamediaopensourcecdkprojecttargetenvironmentcontextgetlabel"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.getLabel(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `getName` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.getName" id="almamediaopensourcecdkprojecttargetenvironmentcontextgetname"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.getName(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `getUrlName` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.getUrlName" id="almamediaopensourcecdkprojecttargetenvironmentcontextgeturlname"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.getUrlName(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `isDevelopment` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.isDevelopment" id="almamediaopensourcecdkprojecttargetenvironmentcontextisdevelopment"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.isDevelopment(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `isFeature` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.isFeature" id="almamediaopensourcecdkprojecttargetenvironmentcontextisfeature"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.isFeature(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `isMock` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.isMock" id="almamediaopensourcecdkprojecttargetenvironmentcontextismock"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.isMock(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `isStable` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.isStable" id="almamediaopensourcecdkprojecttargetenvironmentcontextisstable"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.isStable(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---

##### `isVerification` <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.isVerification" id="almamediaopensourcecdkprojecttargetenvironmentcontextisverification"></a>

```typescript
import { EnvironmentContext } from '@almamedia-open-source/cdk-project-target'

EnvironmentContext.isVerification(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.EnvironmentContext.parameter.scope" id="almamediaopensourcecdkprojecttargetenvironmentcontextparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

Construct.

---




## Enums <a name="Enums" id="enums"></a>

### AccountType <a name="AccountType" id="accounttype"></a>

| **Name** | **Description** |
| --- | --- |
| [`MOCK`](#almamediaopensourcecdkprojecttargetaccounttypemock) | *No description.* |
| [`SHARED`](#almamediaopensourcecdkprojecttargetaccounttypeshared) | *No description.* |
| [`DEV`](#almamediaopensourcecdkprojecttargetaccounttypedev) | *No description.* |
| [`PREPROD`](#almamediaopensourcecdkprojecttargetaccounttypepreprod) | *No description.* |
| [`PROD`](#almamediaopensourcecdkprojecttargetaccounttypeprod) | *No description.* |

---

#### `MOCK` <a name="@almamedia-open-source/cdk-project-target.AccountType.MOCK" id="almamediaopensourcecdkprojecttargetaccounttypemock"></a>

---


#### `SHARED` <a name="@almamedia-open-source/cdk-project-target.AccountType.SHARED" id="almamediaopensourcecdkprojecttargetaccounttypeshared"></a>

---


#### `DEV` <a name="@almamedia-open-source/cdk-project-target.AccountType.DEV" id="almamediaopensourcecdkprojecttargetaccounttypedev"></a>

---


#### `PREPROD` <a name="@almamedia-open-source/cdk-project-target.AccountType.PREPROD" id="almamediaopensourcecdkprojecttargetaccounttypepreprod"></a>

---


#### `PROD` <a name="@almamedia-open-source/cdk-project-target.AccountType.PROD" id="almamediaopensourcecdkprojecttargetaccounttypeprod"></a>

---


### EnvironmentCategory <a name="EnvironmentCategory" id="environmentcategory"></a>

| **Name** | **Description** |
| --- | --- |
| [`MOCK`](#almamediaopensourcecdkprojecttargetenvironmentcategorymock) | *No description.* |
| [`DEVELOPMENT`](#almamediaopensourcecdkprojecttargetenvironmentcategorydevelopment) | *No description.* |
| [`FEATURE`](#almamediaopensourcecdkprojecttargetenvironmentcategoryfeature) | *No description.* |
| [`VERIFICATION`](#almamediaopensourcecdkprojecttargetenvironmentcategoryverification) | *No description.* |
| [`STABLE`](#almamediaopensourcecdkprojecttargetenvironmentcategorystable) | *No description.* |

---

Availalbe Enviroment Categories.

Categories are useful grouping to make distinction between `stable` environments (`staging` & `production`) from `feature` or `verification` environments (such as `test` or `preproduction`).

#### `MOCK` <a name="@almamedia-open-source/cdk-project-target.EnvironmentCategory.MOCK" id="almamediaopensourcecdkprojecttargetenvironmentcategorymock"></a>

---


#### `DEVELOPMENT` <a name="@almamedia-open-source/cdk-project-target.EnvironmentCategory.DEVELOPMENT" id="almamediaopensourcecdkprojecttargetenvironmentcategorydevelopment"></a>

---


#### `FEATURE` <a name="@almamedia-open-source/cdk-project-target.EnvironmentCategory.FEATURE" id="almamediaopensourcecdkprojecttargetenvironmentcategoryfeature"></a>

---


#### `VERIFICATION` <a name="@almamedia-open-source/cdk-project-target.EnvironmentCategory.VERIFICATION" id="almamediaopensourcecdkprojecttargetenvironmentcategoryverification"></a>

---


#### `STABLE` <a name="@almamedia-open-source/cdk-project-target.EnvironmentCategory.STABLE" id="almamediaopensourcecdkprojecttargetenvironmentcategorystable"></a>

---


### EnvironmentLabel <a name="EnvironmentLabel" id="environmentlabel"></a>

| **Name** | **Description** |
| --- | --- |
| [`MOCK`](#almamediaopensourcecdkprojecttargetenvironmentlabelmock) | *No description.* |
| [`DEVELOPMENT`](#almamediaopensourcecdkprojecttargetenvironmentlabeldevelopment) | *No description.* |
| [`FEATURE`](#almamediaopensourcecdkprojecttargetenvironmentlabelfeature) | *No description.* |
| [`TEST`](#almamediaopensourcecdkprojecttargetenvironmentlabeltest) | *No description.* |
| [`STAGING`](#almamediaopensourcecdkprojecttargetenvironmentlabelstaging) | *No description.* |
| [`QA`](#almamediaopensourcecdkprojecttargetenvironmentlabelqa) | *No description.* |
| [`PREPRODUCTION`](#almamediaopensourcecdkprojecttargetenvironmentlabelpreproduction) | *No description.* |
| [`PRODUCTION`](#almamediaopensourcecdkprojecttargetenvironmentlabelproduction) | *No description.* |

---

Available Environment Labels.

Labels are useful since Environment Name can be complex, such as `feature/foo-bar` or `qa3`, but we need to be able to “label” all `feature/*` and `qaN` environments as either `feature` or `qa`.

#### `MOCK` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.MOCK" id="almamediaopensourcecdkprojecttargetenvironmentlabelmock"></a>

---


#### `DEVELOPMENT` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.DEVELOPMENT" id="almamediaopensourcecdkprojecttargetenvironmentlabeldevelopment"></a>

---


#### `FEATURE` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.FEATURE" id="almamediaopensourcecdkprojecttargetenvironmentlabelfeature"></a>

---


#### `TEST` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.TEST" id="almamediaopensourcecdkprojecttargetenvironmentlabeltest"></a>

---


#### `STAGING` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.STAGING" id="almamediaopensourcecdkprojecttargetenvironmentlabelstaging"></a>

---


#### `QA` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.QA" id="almamediaopensourcecdkprojecttargetenvironmentlabelqa"></a>

---


#### `PREPRODUCTION` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.PREPRODUCTION" id="almamediaopensourcecdkprojecttargetenvironmentlabelpreproduction"></a>

---


#### `PRODUCTION` <a name="@almamedia-open-source/cdk-project-target.EnvironmentLabel.PRODUCTION" id="almamediaopensourcecdkprojecttargetenvironmentlabelproduction"></a>

---

