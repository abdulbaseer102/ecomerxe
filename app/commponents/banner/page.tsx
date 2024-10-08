import React from 'react'
import Image from 'next/image'
import banner from '../../image/11134543.jpg'
function Banner() {
    return (
        <div>
            <Image

                src={banner}
                width={0}
                height={0}
                alt='image'
                className='w-auto h-auto'

            />
        </div>
    )
}

export default Banner
