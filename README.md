# ndt-react-list

> React list by ndt 💪

[![npm version](https://img.shields.io/npm/v/ndt-react-list.svg)](https://www.npmjs.com/package/ndt-react-list)

# Installation
```
npm install --save ndt-react-list
```

# Usage
```
// example.js

import React from 'react'
import ReactDOM from 'react-dom'
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
