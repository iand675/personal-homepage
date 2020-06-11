import Link from 'next/link'
import NavHeader from '../../components/NavHeader'

export const articles = [
  {title: 'MDX!', slug: 'mdx', blurb: 'I think mdx is kinda neat', tag: 'draft'},
  {title: 'Using React with GHCJS – Part 1', slug: '2014-12-16-react-js-with-ghcjs', blurb: 'React with GHCJS', tag: 'haskell'},
  {title: 'Introducing Growler, a simple HTTP server toolkit', slug: '2014-11-13-introducing-growler', blurb: 'Growler', tag: 'haskell'},
]

const tagTypes = {
  draft: { fg: 'text-indigo-100', bg: 'bg-indigo-500', text: 'Draft' },
  frontend: { fg: 'text-blue-100', bg: 'bg-blue-500', text: 'Frontend' },
  haskell: { fg: 'text-green-100', bg: 'bg-green-500', text: 'Haskell' },
}

export function Tag({type}) {
  const tagInfo = tagTypes[type]
  return (
    <span className={`inline-flex rounded-full ${tagInfo.fg} ${tagInfo.bg} uppercase px-2 py-1 text-xs font-bold mr-3`}>
      {tagInfo.text}
    </span>
  )
}

export function ArticleCard({title, blurb, tag, slug, className}) {
  return (
  <div className={`rounded bg-white shadow-md p-6 text-gray-900 ${className}`}>
    <Link href={`/posts/${slug}`}>
      <a>
        <Tag type={tag} />
        <article>
          <h1 className="text-2xl">
            {title}
          </h1>
          <div>
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
          <span className="text-6xl text-gray-900">Articles</span>
          <br />
          <small className="text-2xl text-gray-700">Get articles in your inbox on occasion.</small>
        </h1>
        <form className="flex items-center justify-between mb-4">
          <div>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type="email" 
              placeholder="Enter your email" />
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Notify me</button>
          </div>
        </form>
        <a>Atom feed</a>
      </div>
      <div className="row-span-2 col-span-2">
        {articles.map((p) => 
          <ArticleCard 
            key={p.slug} 
            title={p.title} 
            blurb={p.blurb} 
            tag={p.tag} 
            slug={p.slug}
            className="mb-4"
          />
        )}
      </div>
    </div>
  )
}