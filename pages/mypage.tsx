import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Spacer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { MypageTabs } from '../components/MypageTabs'
import { Layout } from '../layout'

const MyPage: NextPage = () => {
  return (
    <Layout>
      <Box color='black' fontWeight='bold' fontSize='48'>
        <h1>MyPage</h1>
      </Box>
      <Grid templateColumns='repeat(7, 1fr)' gap={6} h='520' pt='12'>
        <GridItem colSpan={4}>
          <Box
            pt='12'
            px='12'
            bg='gray.100'
            borderRadius='lg'
            boxShadow='2xl'
            h='60'
          >
            <Box color='black' fontSize='sm'>
              Total Value
            </Box>
            <Flex color='black' mt='4'>
              <Box fontSize='lg' fontWeight='bold'>
                123.1
              </Box>
              <Box fontSize='md' pl='4'>
                USDC
              </Box>
            </Flex>
            <Flex>
              <Spacer />
              <CircularProgress value={30} size='120px' />
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box
            py='12'
            px='12'
            bg='gray.100'
            borderRadius='lg'
            boxShadow='2xl'
            h='60'
          >
            <Box color='black' fontSize='sm'>
              TOTAL CLAIMABLE REWARDS
            </Box>
            <Flex color='black' mt='4'>
              <Box fontSize='lg' fontWeight='bold'>
                4.32
              </Box>
              <Box fontSize='md' pl='4'>
                USDC
              </Box>
            </Flex>
            <Button w='100%' bg='green' mt='8'>
              Claim
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={3}></GridItem>
      </Grid>
      <MypageTabs />
    </Layout>
  )
}

export default MyPage
