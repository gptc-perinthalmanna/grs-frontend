import React, { useRef, useEffect } from "react"
import { Post } from "../../api/posts"
import draftToHtml from "draftjs-to-html"

function ViewPost({ post }: { post: Post }) {
  const ref = useRef(null)
  let html = draftToHtml(JSON.parse(post.content))
  useEffect(() => {
    ref.current.innerHTML = html
  }, [])
  return <div ref={ref}></div>
}

export default ViewPost
