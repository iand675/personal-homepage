import Head from 'next/head'
import Link from 'next/link'
import NavHeader from '../components/NavHeader'
import PostPreview from '../components/PostPreview'
import { NextSeo } from 'next-seo'
import {frontMatter as postPages} from './posts/*.mdx'

const maxPostsOnPage = 10
const recentPosts = postPages.slice(0, maxPostsOnPage)

export default function Home() {
  return (
    <div className="h-screen bg-teamlab">
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

      <div className="container mx-auto">
        <NavHeader />
      </div>
      <div className="flex container mx-auto">
        <div className="md:w-2/5">
          <div className="my-4 relative bg-indigo-800 rounded p-4 shadow-md text-indigo-100">
            <div className="absolute h-full"></div>
            <main>
              <article>
                <h1 className="text-4xl font-serif leading-snug">
                  About
                </h1>
                <p className="mb-2">
                  I'm <a className="underline" href="https://twitter.com/iand675">@iand675</a>. I write code and enjoy life with my family. Data & Infrastructure Engineering Lead at Forge Global, previously at Betterteam & CircleCI.
                </p>
                <p className="mb-2">
                  I lived in Japan for a while, and now I'm in the Bay Area.
                </p>
                <p className="mb-2">
                  I love engineering techniques and systems thinking (technical + social) that leads to stable, fast, and ergonomic products.
                  This often skews towards type systems (Haskell, Rust, Scala), schemas (PostgreSQL), and functional programming, but I'm not above getting my hands dirty with a
                  bit of C or JavaScript either as the need arises.
                </p>
              </article>
            </main>

            <div>
              <Link href="/posts">
                <a>
                  <h2 className="text-3xl font-serif leading-snug">Recent Articles</h2>
                </a>
              </Link>
              {recentPosts.map((p) => <PostPreview key={p.__resourcePath} post={p} />)}        
              {(postPages.length && recentPosts.length && postPages.length > recentPosts.length) && 
                <i>
                  <Link href="/posts"><a>Older articles available here</a></Link>
                </i>
              }
            </div>
          </div>
        </div>
      </div>
      <footer>
      </footer>
    </div>
  )
}
