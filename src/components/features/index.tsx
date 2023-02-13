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
        {features.map(({icon, title, text}: FeatureProps, index: number)=> (<Feature key={`feature-${index}`} icon={icon} title={title} text={text} />))}
      </Flex>
    </Box>
  )
}

export default Features
