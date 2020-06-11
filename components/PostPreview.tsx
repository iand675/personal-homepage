import Link from 'next/link'
import { FC } from 'react'

interface PostPreviewProps {
  post: {
    slug: string,
    title: string
  }
}
export const PostPreview: FC<PostPreviewProps> = function PostPreview({post}) {
  return (
    <div>
      <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    </div>
  )
}

export default PostPreview
