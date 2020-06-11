import { useRouter } from 'next/router'
import NavHeader from '../../components/NavHeader'
import ArticleContents from '../../content/about.mdx'

export default function Article() {
  const router = useRouter()
  const { article } = router.query

  return (
    <div>
      <NavHeader />
      Article {article}
      <ArticleContents/>
    </div>
  )
}