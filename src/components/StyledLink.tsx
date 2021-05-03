import Link from 'next/link'
import styled from 'styled-components'

const CustomLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  color: var(--white);

  &:hover, &:focus {
    color: var(--zeenow-blue);
  }
`

const StyledLink = (props) => {
  // this example is here to illustrate the as prop from styled-components
  // https://styled-components.com/docs/api#as-polymorphic-prop
  const { as, children, href } = props;
  console.log(props)

  // warning from vercel
  // When wrapping a Link from next/link within a styled-component,
  // the as prop provided by styled will collide with the Link's as prop
  // and cause styled-components to throw an Invalid tag error.
  // To avoid this, you can either use the recommended
  // forwardedAs prop from styled-components or use a different
  // named prop to pass to a styled Link.
  return (
    <Link href={href} as={as} passHref>
      <CustomLink>{children}</CustomLink>
    </Link>
  )
}

export default StyledLink
