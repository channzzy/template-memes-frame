import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  const idAsNumber = id ? Number(id) : 1

  const nextId = idAsNumber + 1
  let prevId;
  if(idAsNumber > 1){
    prevId = idAsNumber - 1; ;
  }else{
    prevId = 1;
  }

  if (idAsNumber === 5) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 4</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/show-in-frame/show-${id}.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta property="fc:frame:button:2" content="Share" />
    <meta property="fc:frame:button:2:action" content="link" />
    <meta property="fc:frame:button:2:target" content="https://warpcast.com/~/compose?text=Get%20Template%20Memes!%20Frame%20by%20@chanzy10&embeds[]=https://moxieframe.vercel.app/basic" />
    <meta property="fc:frame:button:1" content="Download Template" />
    <meta name="fc:frame:button:1:action" content="link" />
    <meta name="fc:frame:button:1:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/original-file/template-${id}.jpg" />
    </head></html>`)
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Template Meme Number ${id}</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/thumbnail.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/show-in-frame/show-${id}.png" />
    <meta property="fc:frame:image:aspect_ratio" content="1:1" />
    <meta name="fc:frame:button:1" content="Prev Template" />
    <meta property="fc:frame:button:1:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=${prevId}" />
    <meta property="fc:frame:button:2" content="Download Template" />
    <meta name="fc:frame:button:2:action" content="link" />
    <meta name="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/original-file/template-${id}.jpg" />
    <meta property="fc:frame:button:3" content="Next Template" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=${nextId}" />
  </head></html>`)
}



export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'