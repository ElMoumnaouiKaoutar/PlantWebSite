import React, {props} from 'react'
import { ReactComponent as ImageSun } from '../assets/sun.svg'
import { ReactComponent as ImageWater }from '../assets/water.svg'
const CareScale = (props) => {
  return (
    <div>
      { (props.scaleType==="Sun") ?(
        <ImageSun/>
      )
        :(
        <ImageWater/>
        )
      }
    </div>
  )
}

export default CareScale