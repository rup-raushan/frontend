import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = ({list}) => {
    const location = useLocation()
  return (
    <div className='bottom-bar-whole-container__wrapper'>
        <div className="bottom-bar-main-content__wrapper">
            <ul className='flex flex-center flex-gap-20'>
                {list.map(e=>{
                    return  <li key={e.path}
                                className={`p-normal bottom-list__items ${location.pathname===`/${e.path}`?"active": ""}`}>
                                <Link to={`/${e.path}`}>
                                    <span className={`${location.pathname===`/${e.path}`?"active": ""}`}>
                                        {e.name}
                                    </span>
                                </Link>
                            </li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default BottomBar
