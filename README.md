# ndt-react-list

> React list by ndt 💪

[![npm version](https://img.shields.io/npm/v/ndt-react-list.svg)](https://www.npmjs.com/package/ndt-react-list)

# Installation
```
npm install --save ndt-react-list
```

# Usage

## Without text field

```
// example.js

import React from 'react'
import List from 'ndt-react-list'

const posts = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
  },
]

const Example = () => (
  <div className="example">
    <List collection={posts} titleKey="title" />
  </div>
)

export default Example
```

## With text field
```
// example.js

import React from 'react'
import List from 'ndt-react-list'

const posts2 = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
    text: 'text field 1'
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
    text: 'text field 2'
  },
]

const Example = () => (
  <div className="example">
    <List collection={posts2} titleKey="title" textKey="text" />
  </div>
)

export default Example
```

# Development
## Development server for demo site
```
npm start
```

## Storybook
```
npm run storybook
```

## Test locally
In this package
```
npm link
```

Go to other project (package)

```
npm link ndt-react-list
```

to link this package locally

## Publish demo site to github
```
npm run publish-demo
```

# Resources
* https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220
