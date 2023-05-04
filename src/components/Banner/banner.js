import React from 'react'
import "./banner.css"
function banner() {
  return (
    <div className='Banner'>
      <div className='Banner1'></div>
        <div className='content'>
          <div className='imge'></div>
          <h1 className='title'>Demon Slayer</h1>
          <div className='Banner_button'>
            <button className='button'>play</button>
            <button className='button'>mylist</button>
          </div>
        </div>
        <h1 className='discription'>
Kimetsu no Yaiba story of Tanjiro Kamado and his sister turned demon, Nezuko. A group of swordsman whose purpose is to eliminate all demons. </h1>
      
      <div className="fadebtm"></div>

    </div>
  )
}

export default banner