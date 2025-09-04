import React, { useEffect } from 'react'

function Github() {

  const data = useLoaderData()
  
  return (
    <div>
      <h1 className='bg-orange-400 text-3xl p-3 text-center'>
        Github : {`${data.name}`}
      </h1>
    </div>
  )
}

export default Github

export const githubInfoLoader = ()=>{
  const res = fetch('https://api.github.com/users/shravan-g-k')
  return res.json()
}
