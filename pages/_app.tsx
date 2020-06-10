import '../styles/index.css'
import {MDXProvider} from '@mdx-js/react'

const H1 = props => <h1 className="text-3xl" {...props} />
const P = props => <p className="mb-2" {...props} />

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{h1: H1, p: P}}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

