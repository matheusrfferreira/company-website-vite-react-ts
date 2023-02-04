import React, { FC } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import Feature, { FeatureProps } from './feature'

type FeaturesProps = {
  features: FeatureProps[]
}

const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <Box p={4}>
      <Flex align="center" justify="center" wrap="wrap">
        {features.map(({icon, title, text}: FeatureProps)=> (<Feature key={`key-${title}`} icon={icon} title={title} text={text} />))}
        {/* <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={WarningIcon} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        /> */}
      </Flex>
    </Box>
  )
}

export default Features
