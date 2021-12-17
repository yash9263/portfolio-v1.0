import Link from 'next/link'
import Chilling from '../SVGs/Chiling'

const Contact = () => {
  return (
    <div>
      <Chilling/>
      <div>
        <h2>I&apos;m always open for a chat.</h2>
        <p>
          <span>
            <Link href='mailto:yashwant8530@gmail.com'>
              email me
            </Link> at yashwant8530@gmail.com
          </span>
          <span>or dm me on social media.</span>
        </p>
        <div><Link href='#'>twitter</Link><Link href='#'>linkedin</Link></div>
      </div>
    </div>
  )
}

export default Contact
