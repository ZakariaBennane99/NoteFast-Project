import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/fb.svg' alt='facebook-logo' width={35} height={35} />
          <p>Facebook</p>
        </div>
          what the fuck
        <div>
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/tweet.svg' alt='twitter-logo' width={35} height={35} />
           <p>Twitter</p>
        </div>
        <div>
          What hfasdf
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/link.svg' alt='linkedIn-logo' width={35} height={35} />
          <p>LinkedIn</p>
        </div>
        <div>
          What
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/insta.svg' alt='instagram-logo' width={35} height={35} />
          <p>Instagram</p>
        </div>
        <div>
          Maan I like You
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/pin.svg' alt='pinterst-logo' width={35} height={35} />
          <p>Pinterest</p>
        </div>
        <div>
           Wha
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/redd.svg' alt='reddit-logo' width={35} height={35} />
          <p>Reddit</p>
        </div>
        <div>
          Woooow
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/tik.svg' alt='facebook-logo' width={35} height={35} />
          <p>TikTok</p>
        </div>
        <div>
          What the duck
        </div>
      </div>
      <div className='social-card'>
        <div>
          <Image src='/dashboard/ytb.svg' alt='youtube-logo' width={35} height={35} />
          <p>YouTube</p>
        </div>
        <div>
          Man
        </div>
      </div>
    </main>
  )
}
