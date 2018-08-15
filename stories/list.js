import React from 'react';
import { storiesOf } from '@storybook/react';
import List from '../src/components/List'

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

storiesOf('List', module)
  .add('without text field', () => (
    <List collection={posts} titleKey="title" />
  ))
  .add('with text field', () => (
    <List collection={posts2} titleKey="title" textKey="text" />
  ))
