import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { EarnTab } from '../components/EarnTab'
import { Layout } from '../layout'

const Earn: NextPage = () => {
  return (
    <Layout>
      <Box color='black' fontWeight='bold' fontSize='48'>
        <h1>Earn</h1>
      </Box>
      <EarnTab />
    </Layout>
  )
}

export default Earn
