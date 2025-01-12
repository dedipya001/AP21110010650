import React from 'react'


const HomeSectionCard = ({product}) => {
return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[15rem] mx-3 shadow-lg border'>

            <div className='h-[13rem] w-[10rem] p-5'>
                    <img  
                    className='object-cover object-top w-full h-full' src={product.image} 
                    alt="T-shirt"/>
            </div>

            <div className='p-4'>
                    <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
                    <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            </div>

    </div>
)
}

export default HomeSectionCard




