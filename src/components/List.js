import React from 'react'
import PropTypes from 'prop-types';
import Item from './Item.js'

const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {collection.map(item =>
      <Item
        key={item.id}
        text={item[textKey]}
        title={item[titleKey]}
      />
    )}
  </ul>
)

List.propTypes = {
  collection: PropTypes.array,
  textKey: PropTypes.string,
  titleKey: PropTypes.string,
}

export default List
