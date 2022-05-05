import Head from 'next/head'

export const description = 'I\'m an experienced CIO / Team Lead / Fullstack Developer with a 10+ years experience of working in the internet industry. Specializes in PHP, MySQL, JavaScript, NodeJS, Prebid and customer relationship management (CRM). Always ready for new challenges. In my free time, I improve skills and learn about technological innovations.'
export const siteTitle = 'Furmatech - Mateusz Furs'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main>{children}</main>
    </>
  )
}
