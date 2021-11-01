import React from 'react'

const colors = {
    draft : "blue",
    open : "orange",
    replied : "indigo",
    authorResponded : "purple",
    adminResponded : "purple",
    closed : "green",
    deleted : "red",
    hidden : "red",
    priorityChanged : "yellow",
    solved : "teal",
}

function PostStatus({className, status=null}: {className?: string, status: string}) {
    
    if(!status){
        return <div className="skeleton-line"></div>
    }
    
    return (
        <p className={`badge bg-${colors[status]} ${className}`}>
            {status.toUpperCase()}
        </p>
    )
}

export default PostStatus
