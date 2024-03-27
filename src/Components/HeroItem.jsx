import React from 'react'
import PropTypes from 'prop-types'


export default function HeroItem(props) {
    const {num,text,} = props;
  return (
    // <div className='hero-items__wrapper'>
      <div className='hero-items__list__wrapper'>
        <div className="hero-item__number__wrapper">
          <h5 className="hero-items__number">{num}+</h5>
        </div>
        <div className="hero-items__text__wrapper">
          <h5 className="hero-items__text">{text}</h5>
        </div>
      </div>
    // </div>
  )
}

HeroItem.propTypes ={
    num: PropTypes.number,
    text: PropTypes.string
}