import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
  return (
    <div className="gamePrice">
    {salePrice ? (
      <div>
        <span className="gamePriceNormal">${originalPrice}</span>$
        {salePrice}
      </div>
    ) : (
      <div>${originalPrice}</div>
    )}
  </div>
  )
}

export default Price