import React from 'react'

function Cards({cardsName , changeNumber}) {


    
  return (
    
<div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 mb-5 rounded-2xl bg-red-400">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{cardsName}</span>
    <span className="font-medium text-sky-100">The Anti-Patterns</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-100">
      <span>{changeNumber}</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Cards