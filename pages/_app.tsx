import '../styles/index.css'
import {MDXProvider} from '@mdx-js/react'

const H1 = props => <h1 className="text-3xl" {...props} />
const H2 = props => <h1 className="text-2xl" {...props} />
const H3 = props => <h1 className="text-xl" {...props} />
const H4 = props => <h1 className="text-3xl" {...props} />
const H5 = props => <h1 className="text-3xl" {...props} />
const P = props => <p className="mb-2" {...props} />
const Code = props => (
  <div className="rounded bg-gray-800 p-4 mb-4" >
    <code {...props} />
  </div>
)

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{
      h1: H1, 
      h2: H2, 
      h3: H3, 
      h4: H4, 
      h5: H5, 
      p: P,
      code: Code
    }}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

