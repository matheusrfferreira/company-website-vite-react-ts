import React from 'react'
import { Features } from '@components'
import { FeatureProps } from 'components/features/feature'

const Services: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: '',
      title: '',
      text: ''
    }
  ]
  return (
    <div>
      <Features features={features} />
    </div>
  )
}

export default Services
