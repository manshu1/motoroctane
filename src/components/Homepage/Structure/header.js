import React from 'react'
import Partfirst from './subcomponents/partfirst'
import Partsecond from './subcomponents/partsecond'
import Partthree from './subcomponents/partthree'

export const header = () => {
  return (
    <>
    <div className='main_header'>
      <Partfirst/>
      <Partsecond/>
      <Partthree/>
      </div>
    </>
  )
}
export default header;
