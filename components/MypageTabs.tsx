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

export const MypageTabs = () => {
  return (
    <Tabs
      variant='soft-rounded'
      colorScheme='red'
      color='gray.200'
      border='4'
      _hover={{ border: 'none' }}
      // width='75%'
      mx='auto'
    >
      <TabList
        border='2px'
        borderRadius='full'
        justifyContent='center'
        margin='0'
        letterSpacing='tight'
        bg='gray.200'
      >
        <Tab>
          <Box textAlign='center' px='77px' py='4'>
            ALL
          </Box>
        </Tab>
        <Tab>
          <Box textAlign='center' px='77px' py='4'>
            REWARD
          </Box>
        </Tab>
        <Tab>
          <Box textAlign='center' px='77px' py='4'>
            EARN
          </Box>
        </Tab>
        <Tab>
          <Box textAlign='center' px='77px' py='4'>
            GOVERN
          </Box>
        </Tab>
        <Tab>
          <Box textAlign='center' px='77px' py='4'>
            HISTORY
          </Box>
        </Tab>
      </TabList>
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
    </Tabs>
  )
}
