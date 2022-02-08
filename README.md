# ![Alma CDK Project Target](/assets/alma-cdk-project-target.png)

![CDK Version](https://img.shields.io/badge/CDK-v2-informational "CDK v2")
![Stability](https://img.shields.io/badge/Stability-Experimental-yellow "Stability: Experimental")

**Opinionated set of AWS Account & Application Environment configuration combinations and utilities to manage them for CDK Projects.**



<br/>

## Important

**🚧 This tool is work-in-progress and experimental!**

All `@almamedia-open-source/cdk-` prefixed constructs/utilities are based on existing CDK constructs/utilities we've developed & used (in production) internally at [Alma Media](https://www.almamedia.fi/en/) since 2019.

_Breaking changes may occur at any given time without prior warning before first `v1` major is released_, as we rewrite them for CDK v2 and use this opportunity to also redesign & refactor.

[Feedback](https://github.com/almamedia-open-source/cdk-project-target/issues) is most welcome, but do note that we intend to implement these new constructs/utilities and their APIs in such manner that our existing CDK v1 production workloads can easily migrate into these new `@almamedia-open-source/cdk-` constructs/utilities.

<br/>

## Overview

TODO

<br/>

## Installation

1. Ensure you meet following requirements:
    - [NodeJS](https://nodejs.org/en/) `v14.17.6` or newer
    - [AWS Cloud Development Kit](https://aws.amazon.com/cdk/) `v2.0.0` or newer

2. Install peer dependency [`@almamedia-open-source/cdk-project-context`](https://github.com/almamedia-open-source/cdk-project-context):
    ```shell
    npm i -D @almamedia-open-source/cdk-project-context
    ```

3. Install this tool:
    ```shell
    npm i -D @almamedia-open-source/cdk-project-target
    ```

<br/>

## Usage

1. Initialize your CDK App with `Project` construct as documented in [`@almamedia-open-source/cdk-project-context`](https://github.com/almamedia-open-source/cdk-project-context) but also use one of the following classes:

    - `ProjectAccounts1x`
    - `ProjectAccounts2x`
    - `ProjectAccounts3x`

    <br>

    ```ts
    // bin/app.ts
    import { Project } from '@almamedia-open-source/cdk-project-context';
    import { ProjectAccounts2x } from '@almamedia-open-source/cdk-project-target';

    // new Project instead of new App
    const project = new Project({
      name: 'my-cool-project',
      author: {
        organization: 'Acme Corp',
        name: 'Mad Scientists',
        email: 'mad.scientists@acme.example.com',
      },
      defaultRegion: 'eu-west-1', // defaults to one of: $CDK_DEFAULT_REGION, $AWS_REGION or us-east-1
      accounts: new ProjectAccounts2x({
        dev: {
          id: '111111111111',
          config: {
            baseDomain: 'example.net',
          },
        },
        prod: {
          id: '222222222222',
          config: {
            baseDomain: 'example.com',
          },
        },
      }),
    })
    ```

2. TODO

<br/><br/>

## Migration

**This section only applies if you're an Alma Media employee who is migrating from our internal CDK v1 compatible constructs.**

### Account Context

Match `ProjectContext` (`PC`) casing:
```diff
-Ac
+AC
```

Methods follow the format used in `ProjectContext` (where there is overlap):

#### Account ID
```diff
-Ac.getId
+AC.getAccountId
```

#### Account Description
```diff
-Ac.getDescription
```

#### Account Base Domain
```diff
-Ac.getDomain
```

#### Account Type
```diff
-Ac.getType
+AC.getAccountType
```

#### Is Prod account type
```diff
-Ac.isProd
+AC.isProd
```

#### Is Dev account type
```diff
-Ac.isDev
+AC.isDev
```

#### Is PreProd account type
```diff
-Ac.isPreprod
+AC.isPreprod
```
_not used_

#### Is Shared account type
```diff
-Ac.isShared
+AC.isShared
```

#### Is Mock account type
```diff
TODO
```

#### Get Configuration
```diff
-Ac.getConfig(ths, 'path', defaultValue)
+AC.getAccountConfig(this, 'path', defaultValue) # TODO: Implement the lodash path in ProjectContext
```




### Environment Context

#### Environment Name
```diff
-Ec.getName
+EC.getName
```

#### Environment URL/DNS compatible name

```diff
-Ec.getSubdomain   # foo-bar.feature
+EC.getUrlName     # feature-foo-bar
```

### Environment Label (New)

```diff
+Ec.getLabel
```

#### Environment Type (Category)
```diff
-Ec.getType
+EC.getCategory
```

Return values:
```diff
mock
development
-preview
+feature
verification
stable
```


#### Environment Description
```diff
-Ec.getDescription
```

#### Environment Domain

Implemented in separate construct.

```diff
-Ec.getDomain
```


#### Preview (Feature) Environment Info
```diff
-Ec.getPreviewInfo
+EC.getFeatureInfo
```

#### Is Mock Environment
```diff
-Ec.isMock
+EC.isMock
```

#### Is Development Environment
```diff
-Ec.isDevelopment
+EC.isDevelopment
```

#### Is Preview (Feature) Environment
```diff
-Ec.isPreview
+EC.isFeature
```

#### Is Pre Environment
```diff
-Ec.isPre
+EC.isVerification
```

#### Is Stable Environment
```diff
-Ec.isStable
+EC.isStable
```


### Stack Context

Removed completely: Use [`@almamedia-open-source/cdk-project-stack`](https://github.com/almamedia-open-source/cdk-project-stack/) instead.
