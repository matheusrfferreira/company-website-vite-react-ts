import React from 'react'
import { Helmet } from 'react-helmet'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Features } from '@components'
import { FeatureProps } from 'components/features/feature'

const Services: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: PhoneIcon,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla faucibus, commodo risus at, eleifend elit. Nulla lobortis dictum lectus ut pellentesque.'
    },
    {
      icon: AddIcon,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla faucibus, commodo risus at, eleifend elit. Nulla lobortis dictum lectus ut pellentesque.'
    },
    {
      icon: WarningIcon,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nulla faucibus, commodo risus at, eleifend elit. Nulla lobortis dictum lectus ut pellentesque.'
    },
  ]
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Services</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Features features={features} />
    </>
  )
}

export default Services
