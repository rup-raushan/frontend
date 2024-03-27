import React from 'react'

export default function About() {
  return (
    <>
      <div className='about-whole-container__wrapper flex flex-center main-bg'>
        <div className="about-content__wrapper flex" style={{gap: "30px", flexDirection: "column"}}>
            <h4>About Aeronotes</h4>
            <p className='p-normal'>Aeronotes is the best solution for the problem of notes that everyone can have in their student Life. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fugit sapiente esse voluptatibus deleniti voluptates totam, quia error voluptate non quas placeat assumenda.</p>
            {/* <h2>Upgrading Soon.......</h2> */}
              <p className='p-normal' style={{marginTop: "50px"}}>Copyright &copy; Aeronotes@1.1.1 2023; &nbsp; All Rights Are Reserved.</p>
        </div>
      </div>
    </>
  )
}
