import { ArticleCard } from "../posts"
import AboutContents from "../../content/about.mdx"
import NavHeader from '../../components/NavHeader'

export default function About() {
  return (
    <div className="container mx-auto">
      <NavHeader />
      <AboutContents />
    </div>
  )
}