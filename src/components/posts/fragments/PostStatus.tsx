import React from 'react'

function PostStatus({status=null}) {
    
    if(!status){
        return <div className="skeleton-line"></div>
    }
    
    return (
        <p>

        </p>
    )
}

export default PostStatus
