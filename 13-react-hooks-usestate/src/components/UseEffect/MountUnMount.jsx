import React, { useEffect } from 'react'


const MountUnMount = () => {

    useEffect(() => {
        console.log('Component Mounted');
    
        return () => {
        console.log('Component Unmounted');
        }
    });

  return (
    <div>
        <h1>Mount and UnMount</h1>
    </div>
  )
}

export default MountUnMount