import React from 'react'

const Header = () => {

    console.log('Header rendered');

  return (
    <div>Header</div>
  )
}

export default React.memo(Header) // React.memo is used to prevent unnecessary re-renders of the Header component