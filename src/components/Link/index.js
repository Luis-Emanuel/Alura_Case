import NextLink from "next/link";

export default function Link({ children, href }) {
  return (
    <NextLink href={href}>{children}</NextLink>
  )
}