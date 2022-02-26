import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Card } from '../components/Card'
import { DetailPlan } from '../components/DetailPlan'
import { TabComponent } from '../components/Tab'
import { Layout } from '../layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Box pt='8'></Box>
      <Box py='12' px='12' bg='gray.100' borderRadius='md' boxShadow='2xl'>
        <Flex>
          <Box width='33%'>
            <Box color='black' fontWeight='bold' fontSize='48'>
              <h1>SSSFinance</h1>
            </Box>
            <Box color='gray.900'>
              <p>
                <span
                  style={{ color: 'red', fontWeight: 'bold', fontSize: '30px' }}
                >
                  S
                </span>
                tableCoin
              </p>
              <p>
                <span
                  style={{
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '30px',
                  }}
                >
                  S
                </span>
                tableReward
              </p>
              <p>
                <span
                  style={{
                    color: 'green',
                    fontWeight: 'bold',
                    fontSize: '30px',
                  }}
                >
                  S
                </span>
                ustainableEcosystem
              </p>
            </Box>
          </Box>

          <Box width='70%'>
            <Box bg='gray.200' p='6' ml='6'>
              <Flex>
                <Box color='black' fontWeight='bold' fontSize='30'>
                  TVL
                </Box>
                <Spacer />
                <Box color='black' fontSize='30'>
                  $300,000,000
                </Box>
              </Flex>
            </Box>
            <Flex>
              <Image
                src='https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=200&height=200&name=USDC.png'
                alt='usdc'
              />
              <Image
                src='https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=200&height=200&name=USDC.png'
                alt='usdc'
              />
              <Image
                src='https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=200&height=200&name=USDC.png'
                alt='usdc'
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt='12'>
        <TabComponent />
      </Box>

      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
        <GridItem>
          <Card />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Home
