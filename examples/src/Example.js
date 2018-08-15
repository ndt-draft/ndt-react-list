import React from 'react'
import ReactDOM from 'react-dom'
import List from '../../src/components/List'

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