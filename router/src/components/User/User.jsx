import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}  = useParams()
  return (
    <div>
      <h1 className='bg-orange-400 text-3xl p-3 text-center'>
        User : {userid}
      </h1>
    </div>
  )
}

export default User

