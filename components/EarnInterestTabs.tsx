import {
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  Flex,
  Box,
} from '@chakra-ui/react'
import React from 'react'

export const EarnInterestTabs = () => {
  return (
    <Tabs
      variant='soft-rounded'
      colorScheme='green'
      color='green.400'
      border='4'
      _hover={{ border: 'none' }}
    >
      <TabPanels>
        <TabPanel>
          <Flex color='black' mt='4'>
            <Box fontSize='lg' fontWeight='bold'>
              0
            </Box>
            <Box fontSize='md' pl='4' my='auto'>
              USDC
            </Box>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex color='black' mt='4'>
            <Box fontSize='lg' fontWeight='bold'>
              0
            </Box>
            <Box fontSize='md' pl='4' my='auto'>
              USDC
            </Box>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex color='black' mt='4'>
            <Box fontSize='lg' fontWeight='bold'>
              0
            </Box>
            <Box fontSize='md' pl='4' my='auto'>
              USDC
            </Box>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Flex color='black' mt='4'>
            <Box fontSize='lg' fontWeight='bold'>
              0
            </Box>
            <Box fontSize='md' pl='4' my='auto'>
              USDC
            </Box>
          </Flex>
        </TabPanel>
      </TabPanels>
      <TabList
        border='2px'
        borderRadius='3xl'
        justifyContent='center'
        margin='0'
        letterSpacing='tight'
      >
        <Tab>
          <Box textAlign='center'>
            YEAR
          </Box>
        </Tab>
        <Tab>MONTH</Tab>
        <Tab>WEEK</Tab>
        <Tab>DAY</Tab>
      </TabList>
    </Tabs>
  )
}
