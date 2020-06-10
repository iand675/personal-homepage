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
      <Link href="/articles/[slug]" as={`/articles/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    </div>
  )
}

export default PostPreview
