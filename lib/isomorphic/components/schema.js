import React from 'react'
import { config } from 'config'

export default function Schema(props) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': config.address_city,
          'addressRegion': config.address_state,
          'postalCode': config.address_zipcode,
          'streetAddress': config.address_street,
          'addressCountry': config.address_contry,
          'areaServed': config.address_area,
          'telephone': config.phone_number,
        },
        'email': config.email,
        'logo': config.logo,
        'name': config.name,
        'legalName': config.legal_name,
        'url': config.url,
      })}}
    />
  )
}
