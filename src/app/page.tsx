import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meme Templates',
  description: 'Meme Templates By Chanzy 10',
  openGraph: {
    title: 'Meme Templates',
    description: 'Meme Templates By Chanzy 10',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api?id=1`,
    'fc:frame:button:1': 'Start',
    'fc:frame:button:2': 'Share',
    'fc:frame:button:2:action' : "link",
    'fc:frame:button:2:target' : "https://warpcast.com/~/compose?text=Get%20Template%20Memes!%20Frame%20by%20@chanzy10&embeds[]=https://meme-templates-frame.vercel.app/"
  },
}

export default function Page() {
  return (
    <div>
        <h1 >Meme Templates By <a href="https://warpcast.com/chanzy10">@chanzy10</a></h1>
    </div>
  )
}