import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className="rounded-lg shadow-lg border border-gray-800 bg-gray-900">
      <div className="flex justify-center">
         <img 
           src={data.avatar_url} 
           alt="Avatar"
           className="rounded-full m-3 w-24 h-24"
         />
      </div>   
      <div className="p-4">
        <div className="text-white text-lg font-bold mb-1 flex flex-col">
          <a href={data.html_url} target='_blank' rel='noreferrer' className='hover:underline'>{data.login}</a>
          <p className='max-w-[250px] text-gray-200 text-sm flex-wrap overflow-hidden'>
          {data.bio}
          </p>
        </div>
        <div>
          <span className="text-gray-400 text-sm font-semibold mr-2">Name:</span> 
          <span className="text-white text-sm">{data.name}</span>
        </div> 
        <div className="mt-2"> 
          <span className="text-gray-400 text-sm font-semibold mr-2">Repos:</span>
          <span className="text-white text-sm">{data.public_repos}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-400 text-sm font-semibold mr-2">Gists:</span>
          <span className="text-white text-sm">{data.public_gists}</span>   
        </div>     
        <div className="mt-2">
          <span className="text-gray-400 text-sm font-semibold mr-2">Created:</span>
          <span className="text-white text-sm">{new Date(data.created_at).toLocaleString('en-CA', 'en-CA')}</span>
        </div>
      </div>
    </div>
  )
}

export default UserCard