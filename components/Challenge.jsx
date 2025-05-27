import React from 'react'

const Challenge = () => {
  return (
        
        <div className="w-full container mx-auto flex justify-end py-2 px-4 sm:px-6 md:px-8 lg:px-10">
            
            {/* se  quiser fixar a div em algum canto bota: fixed bottom-0 right-0 left-0*/}

            <div className="flex items-center text-sm">

                <span className="ml-1 mr-1 dark:text-gray-400"> 
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                </span>

            </div>

            <div className="flex items-center text-sm">

                <span className="ml-1 mr-1 text-gray-900 dark:text-gray-400"> 
                    Coded by <a href="https://github.com/luan-services">Luan Peixoto</a>.
                </span>

            </div>

  </div>
  )
}

export default Challenge
