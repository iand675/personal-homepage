import NavHeader from 'components/NavHeader'

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    return (
      <>
        <div className="container mx-auto">
          <NavHeader />
        </div>
        <div className="container mx-auto">
          <h1 className="text-5xl font-serif leading-tight mt-4 mb-4">{frontMatter.title}</h1>
          {content}
        </div>
      </>
    )
  }
}