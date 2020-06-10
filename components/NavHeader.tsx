import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, FC, AnchorHTMLAttributes, MutableRefObject, ForwardRefRenderFunction } from 'react'

const spacing = 6
const linkClasses = `mr-${spacing} py-2 inline-block text-lg font-medium`

interface LinkProps {
  className?: string,
  href?: string
}

const innerA: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = function A(props, ref) {
  const router = useRouter()
  const activeClass = router.pathname === props.href ? 'text-red-500' : ''
  return (
    <a ref={ref} href={props.href} className={`${linkClasses} ${activeClass} ${props.className}`}>
      {props.children}
    </a>
  )
}
export const A: FC<LinkProps> = forwardRef(innerA)

interface NavHeaderProps {
  className?: string
}
const NavHeader: FC<NavHeaderProps> = function NavHeader({className}) {
  return (
    <header className={className}>
      <Link href="/" passHref>
        <A className={`${linkClasses} text-pink-300 ml-${spacing}`}>Home</A>
      </Link>
      <Link href="/articles" passHref>
        <A className={`${linkClasses} text-purple-300`}>Articles</A>
      </Link>
      <Link href="/newsletter" passHref>
        <A className={`${linkClasses} text-indigo-300`}>Newsletter</A>
      </Link>
      <Link href="/about" passHref>
        <A className={`${linkClasses} text-blue-300`}>About</A>
      </Link>
    </header>
  )
}
export default NavHeader