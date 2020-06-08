import React from 'react'

const Flag = ({ image, isSelected, ...props }) => (
  <img alt="flag" src={image} className={isSelected ? 'flag selected' : 'flag'} {...props} />
)

export default Flag
