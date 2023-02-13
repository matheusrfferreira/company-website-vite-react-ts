import React, { FC, ReactNode } from 'react'
import { Text, Stack, Flex, Icon } from '@chakra-ui/react'

export type FeatureProps = {
  title: string;
  text: string;
  icon: any;
}

const Feature: FC<FeatureProps> = ({ title, text, icon }) => {
  return (
    <Stack w={200} h={300} m="auto">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        <Icon as={icon}/>
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default Feature
