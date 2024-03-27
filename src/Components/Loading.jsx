import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="loading-container-whole-screen__wrapper flex flex-center">
        <div className="loading-container-main-content__wrapper flex flex-col flex-center" style={{height: '100vh'}}>
          <div className="loading__gif__wrapper flex flex-col flex-center flex-gap-20">
            <div className="loading-dots__wrapper flex flex-center">
              <div className="loading__dots"></div>
              <div className="loading__dots"></div>
              <div className="loading__dots"></div>
              <div className="loading__dots"></div>
              <div className="loading__dots"></div>
              <div className="loading__dots"></div>
            </div>
            <p className="p-normal loading-text">Loading...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
