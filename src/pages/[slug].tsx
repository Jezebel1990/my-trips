import client from 'graphql/client'
import { GET_PAGE_BY_SLUG, GET_PAGES } from 'graphql/queries'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { useRouter } from 'next/dist/client/router'
import { GetStaticProps } from 'next'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body}: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

 return <PageTemplate heading={heading} body={body}/>
}  

 export async function getStaticPaths() {
  const { pages} = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug}) => ({
    params: { slug }
  }))

return { paths, fallback: true }
 }  
   
 export const getStaticProps: GetStaticProps = async ({ params }) => {
 const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
  slug: `${params?.slug}`
 })

 if (!page) return { notFound: true}
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
 }

