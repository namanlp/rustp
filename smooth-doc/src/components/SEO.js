import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEOQuery = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
  }
`

export function SEO({ title, description, img=null }) {
  const data = useStaticQuery(SEOQuery)
  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle = title || data.site.siteMetadata.title
  const url = data.site.siteMetadata.siteUrl
  const socialImage = data.defaultSocialImage || data.socialImage
  const image = img? img : "https://rustp.org/Static_Images_DND/Social/Rust_Default_Social.png"
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        ...(image
          ? [
              {
                property: 'og:image',
                content: image,
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
            {
                name: 'twitter:image:alt',
                content: title,
            },
              {
                name: 'twitter:image:src',
                content: image,
              },
            ]
          : []),

        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  )
}
