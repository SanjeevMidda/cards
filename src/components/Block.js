import React, { useState } from 'react'

function Block({letter, classAdd, color}) {

    const [transform, setTransform] = useState(true);

    let styles = {
        background: `linear-gradient(${color.one}, ${color.two})`
    }
  return (
    <div className={transform? `block ${classAdd.initial}` : `block ${classAdd.transform}`} onClick={() => setTransform(!transform)}>
        <h1>{letter}</h1>
        <div className='blockStyling'>
            <div className="circle" style={styles}></div>
        </div>
    </div>
  )
}

export default Block