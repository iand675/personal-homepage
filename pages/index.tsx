import Head from 'next/head'
import Link from 'next/link'
import NavHeader from '../components/NavHeader'
import PostPreview from '../components/PostPreview'
import { NextSeo } from 'next-seo'
import { articles } from './articles'

const maxPostsOnPage = 10
const recentPosts = articles.slice(0, maxPostsOnPage)

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="iankduncan.com – Ian Duncan"
        description="I'm Ian Duncan. I build things."
        twitter={{
          handle: '@iand675'
        }}
      />

      <div className="flex container mx-auto">
        <div className="w-2/5">
          <NavHeader />
          <main className="">
            <article>
              <h1 className="text-2xl">
                About
              </h1>
              <p>
                I'm @iand675. I write code and enjoy life with my family. Data & Infrastructure Engineering Lead at Forge Global, previously at Betterteam & CircleCI.
              </p>
              <p>
                I lived in Japan for a while, and now I'm in the Bay Area.
              </p>
              <p>
                I love engineering techniques and systems thinking (technical + social) that leads to stable, fast, and ergonomic products.
                This often skews towards type systems (Haskell, Rust, Scala), schemas (PostgreSQL), and functional programming, but I'm not above getting my hands dirty with a
                bit of C or JavaScript either as the need arises.
              </p>
            </article>
          </main>

          <div>
            <Link href="articles">
              <a>
                <h2 className="text-2xl">Recent Articles</h2>
              </a>
            </Link>
            {recentPosts.map((p) => <PostPreview key={p.slug} post={p} />)}        
            {(articles.length || recentPosts.length) && 
              <i>
                Older articles available{' '}
                <Link href="articles"><a>here</a></Link>
              </i>
            }
          </div>

        </div>
      </div>
      <footer>
        Noodle
      </footer>
    </>
  )
}
