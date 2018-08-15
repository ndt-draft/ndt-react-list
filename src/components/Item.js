import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
)

Item.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
}

export default Item
