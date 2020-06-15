import 'styles/index.css'
import {MDXProvider} from '@mdx-js/react'
import { useAmp } from 'next/amp'
import { FC, ImgHTMLAttributes } from 'react'

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
const Img: FC<ImgHTMLAttributes<HTMLImageElement>> = props => {
  const isAmp = useAmp()
  if (isAmp) {
    return <amp-img {...props}/>
  } else {
    return <img {...props}/>
  }
}

export default function MyApp({ Component, pageProps }) {

  return (
    <MDXProvider components={{
      h1: H1, 
      h2: H2, 
      h3: H3, 
      h4: H4, 
      h5: H5, 
      p: P,
      code: Code,
      img: Img
    }}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

