import React from 'react'


const colors = {
    veryLow : "green",
    low : "teal",
    medium : "cyan",
    high : "yellow",
    important : "red",
}

function PostPriority({priority}) {

    if(!priority){
        return <div className="skeleton-line"></div>
    }
    
    return (
        <p className={`badge bg-${colors[priority]}-lt`}>
            {priority.toUpperCase()}
        </p>
    )
}

export default PostPriority
