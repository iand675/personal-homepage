import Link from 'next/link'
import { FC } from 'react'

interface PostPreviewProps {
  post: {
    __resourcePath: string,
    title: string
  }
}

function formatPath(p) {
  return p.replace(/\.mdx$/, '')
}

export const PostPreview: FC<PostPreviewProps> = function PostPreview({post}) {
  return (
    <div>
      <Link href={formatPath(post.__resourcePath)}>
        <a className="text-lg font-semibold">{post.title}</a>
      </Link>
    </div>
  )
}

export default PostPreview
