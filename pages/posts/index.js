import Link from 'next/link'
import NavHeader from 'components/NavHeader'
import {frontMatter as postPages} from './*.mdx'

const tagTypes = {
  draft: { fg: 'text-indigo-100', bg: 'bg-indigo-500', text: 'Draft' },
  frontend: { fg: 'text-blue-100', bg: 'bg-blue-500', text: 'Frontend' },
  haskell: { fg: 'text-green-100', bg: 'bg-green-500', text: 'Haskell' },
}

export function Tag({type}) {
  const tagInfo = tagTypes[type]
  return type ? (
    <span className={`inline-flex rounded-full ${tagInfo.fg} ${tagInfo.bg} uppercase px-2 py-1 text-xs font-bold mr-3`}>
      {tagInfo.text}
    </span>
  ) : null
}

function formatPath(p) {
  return p.replace(/\.mdx$/, '')
}

export function ArticleCard({title, blurb, tag, slug, className}) {
  return (
  <div className={`rounded bg-white shadow-md p-6 text-gray-900 ${className}`}>
    <Link href={slug}>
      <a>
        <Tag type={tag} />
        <article>
          <h1 className="text-2xl font-serif leading-tight mb-2">
            {title}
          </h1>
          <div className="leading-snug">
            {blurb}
          </div>
        </article>
      </a>
    </Link>
  </div>)
}

export default function Articles() {
  return (
    <div className="container mx-auto grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3">
        <NavHeader className="flex flex-col items-end mt-10"/>
      </div>
      <div className="row-span-1 col-span-2">
        <h1 className="leading-tight mt-8 mb-4">
          <span className="text-6xl text-gray-100 font-serif">Articles</span>
          <br />
          <small className="text-2xl text-gray-500">
            Receive articles in your inbox when a new article comes along. 
            I promise to go easy on the inbox.
          </small>
        </h1>
        <form className="flex items-center mb-4">
          <div>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-full" 
              type="email" 
              placeholder="Enter your email" />
          </div>

          <div className="ml-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Notify me</button>
          </div>
        </form>
        <a>Atom feed</a>
      </div>
      <div className="col-span-2 grid grid-flow-row lg:grid-cols-2 gap-4">
        {postPages.map((p) => 
          <ArticleCard 
            key={p.slug} 
            title={p.title} 
            blurb={p.blurb} 
            tag={p.tag} 
            slug={formatPath(p.__resourcePath)}
          />
        )}
      </div>
    </div>
  )
}