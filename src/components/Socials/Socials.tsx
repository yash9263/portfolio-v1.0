import Link from 'next/link'
import { Codepen, GitHub, Instagram, Linkedin, Twitter } from 'react-feather'

const Socials = () => {
  return (
    <div>
      <div><Link href='#' passHref><GitHub/></Link></div>
      <div><Link href='#' passHref><Instagram/></Link></div>
      <div><Link href='#' passHref><Linkedin/></Link></div>
      <div><Link href='#' passHref><Twitter/></Link></div>
      <div><Link href='#' passHref><Codepen/></Link></div>
    </div>
  )
}

export default Socials
