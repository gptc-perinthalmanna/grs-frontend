import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Logo() {
    return (
        <div className='text-center justify-content-center d-flex mb-4'>
             <StaticImage
              src="../../images/logo-transperant.png"
              placeholder="blurred"
              layout="fixed"
              height={150}
              className="logo-transperant"
              alt=""
            />
        </div>
    )
}

export default Logo
