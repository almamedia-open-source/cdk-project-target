# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="structs"></a>

### Account <a name="@almamedia-open-source/cdk-project-target.Account" id="almamediaopensourcecdkprojecttargetaccount"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Account } from '@almamedia-open-source/cdk-project-target'

const account: Account = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#almamediaopensourcecdkprojecttargetaccountpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`config`](#almamediaopensourcecdkprojecttargetaccountpropertyconfig) | {[ key: string ]: `any`} | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.Account.property.id" id="almamediaopensourcecdkprojecttargetaccountpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `config`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.Account.property.config" id="almamediaopensourcecdkprojecttargetaccountpropertyconfig"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

### AccountWithEnvironments <a name="@almamedia-open-source/cdk-project-target.AccountWithEnvironments" id="almamediaopensourcecdkprojecttargetaccountwithenvironments"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AccountWithEnvironments } from '@almamedia-open-source/cdk-project-target'

const accountWithEnvironments: AccountWithEnvironments = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`config`](#almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyconfig) | {[ key: string ]: `any`} | *No description.* |
| [`environments`](#almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyenvironments)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.EnvironmentLabel`](#@almamedia-open-source/cdk-project-target.EnvironmentLabel)[] | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountWithEnvironments.property.id" id="almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `config`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.AccountWithEnvironments.property.config" id="almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyconfig"></a>

```typescript
public readonly config: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `environments`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.AccountWithEnvironments.property.environments" id="almamediaopensourcecdkprojecttargetaccountwithenvironmentspropertyenvironments"></a>

```typescript
public readonly environments: EnvironmentLabel[];
```

- *Type:* [`@almamedia-open-source/cdk-project-target.EnvironmentLabel`](#@almamedia-open-source/cdk-project-target.EnvironmentLabel)[]

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
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccountspropertydev) | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`mock`](#almamediaopensourcecdkprojecttargetprojectaccountspropertymock) | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`preprod`](#almamediaopensourcecdkprojecttargetprojectaccountspropertypreprod) | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccountspropertyprod) | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`shared`](#almamediaopensourcecdkprojecttargetprojectaccountspropertyshared) | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |

---

##### `dev`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccountspropertydev"></a>

```typescript
public readonly dev: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `mock`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.mock" id="almamediaopensourcecdkprojecttargetprojectaccountspropertymock"></a>

```typescript
public readonly mock: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `preprod`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.preprod" id="almamediaopensourcecdkprojecttargetprojectaccountspropertypreprod"></a>

```typescript
public readonly preprod: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `prod`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccountspropertyprod"></a>

```typescript
public readonly prod: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `shared`<sup>Optional</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts.property.shared" id="almamediaopensourcecdkprojecttargetprojectaccountspropertyshared"></a>

```typescript
public readonly shared: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

### ProjectAccounts1xProps <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps" id="almamediaopensourcecdkprojecttargetprojectaccounts1xprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectAccounts1xProps } from '@almamedia-open-source/cdk-project-target'

const projectAccounts1xProps: ProjectAccounts1xProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`shared`](#almamediaopensourcecdkprojecttargetprojectaccounts1xpropspropertyshared)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |

---

##### `shared`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps.property.shared" id="almamediaopensourcecdkprojecttargetprojectaccounts1xpropspropertyshared"></a>

```typescript
public readonly shared: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

### ProjectAccounts2xProps <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps" id="almamediaopensourcecdkprojecttargetprojectaccounts2xprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectAccounts2xProps } from '@almamedia-open-source/cdk-project-target'

const projectAccounts2xProps: ProjectAccounts2xProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccounts2xpropspropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccounts2xpropspropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccounts2xpropspropertydev"></a>

```typescript
public readonly dev: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccounts2xpropspropertyprod"></a>

```typescript
public readonly prod: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

### ProjectAccounts3xProps <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps" id="almamediaopensourcecdkprojecttargetprojectaccounts3xprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ProjectAccounts3xProps } from '@almamedia-open-source/cdk-project-target'

const projectAccounts3xProps: ProjectAccounts3xProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |
| [`preprod`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertypreprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertydev"></a>

```typescript
public readonly dev: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

##### `preprod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps.property.preprod" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertypreprod"></a>

```typescript
public readonly preprod: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropspropertyprod"></a>

```typescript
public readonly prod: Account;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.Account`](#@almamedia-open-source/cdk-project-target.Account)

---

## Classes <a name="Classes" id="classes"></a>

### ProjectAccounts1x <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1x" id="almamediaopensourcecdkprojecttargetprojectaccounts1x"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1x.Initializer" id="almamediaopensourcecdkprojecttargetprojectaccounts1xinitializer"></a>

```typescript
import { ProjectAccounts1x } from '@almamedia-open-source/cdk-project-target'

new ProjectAccounts1x(props: ProjectAccounts1xProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almamediaopensourcecdkprojecttargetprojectaccounts1xparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1x.parameter.props" id="almamediaopensourcecdkprojecttargetprojectaccounts1xparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts1xProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`shared`](#almamediaopensourcecdkprojecttargetprojectaccounts1xpropertyshared)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |

---

##### `shared`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts1x.property.shared" id="almamediaopensourcecdkprojecttargetprojectaccounts1xpropertyshared"></a>

```typescript
public readonly shared: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---


### ProjectAccounts2x <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2x" id="almamediaopensourcecdkprojecttargetprojectaccounts2x"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2x.Initializer" id="almamediaopensourcecdkprojecttargetprojectaccounts2xinitializer"></a>

```typescript
import { ProjectAccounts2x } from '@almamedia-open-source/cdk-project-target'

new ProjectAccounts2x(props: ProjectAccounts2xProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almamediaopensourcecdkprojecttargetprojectaccounts2xparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2x.parameter.props" id="almamediaopensourcecdkprojecttargetprojectaccounts2xparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts2xProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccounts2xpropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccounts2xpropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2x.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccounts2xpropertydev"></a>

```typescript
public readonly dev: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts2x.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccounts2xpropertyprod"></a>

```typescript
public readonly prod: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---


### ProjectAccounts3x <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x" id="almamediaopensourcecdkprojecttargetprojectaccounts3x"></a>

#### Initializers <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x.Initializer" id="almamediaopensourcecdkprojecttargetprojectaccounts3xinitializer"></a>

```typescript
import { ProjectAccounts3x } from '@almamedia-open-source/cdk-project-target'

new ProjectAccounts3x(props: ProjectAccounts3xProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#almamediaopensourcecdkprojecttargetprojectaccounts3xparameterprops)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps) | *No description.* |

---

##### `props`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x.parameter.props" id="almamediaopensourcecdkprojecttargetprojectaccounts3xparameterprops"></a>

- *Type:* [`@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps`](#@almamedia-open-source/cdk-project-target.ProjectAccounts3xProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`dev`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropertydev)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`preprod`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropertypreprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |
| [`prod`](#almamediaopensourcecdkprojecttargetprojectaccounts3xpropertyprod)<span title="Required">*</span> | [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments) | *No description.* |

---

##### `dev`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x.property.dev" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropertydev"></a>

```typescript
public readonly dev: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `preprod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x.property.preprod" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropertypreprod"></a>

```typescript
public readonly preprod: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

---

##### `prod`<sup>Required</sup> <a name="@almamedia-open-source/cdk-project-target.ProjectAccounts3x.property.prod" id="almamediaopensourcecdkprojecttargetprojectaccounts3xpropertyprod"></a>

```typescript
public readonly prod: AccountWithEnvironments;
```

- *Type:* [`@almamedia-open-source/cdk-project-target.AccountWithEnvironments`](#@almamedia-open-source/cdk-project-target.AccountWithEnvironments)

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

Labels are useful since Environment Name can be complex, such as `feature/foo-bar` or `qa3`, but we need to be able to “label” all `feature/*` and `qaN` environment names as either `feature` or `qa`.

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

