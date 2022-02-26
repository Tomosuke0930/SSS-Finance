import { Box, Button, Flex, Image, Spacer } from '@chakra-ui/react'
import { MyLink } from './MyLink'

export const Card = () => {
  return (
    <Box
      //   py='12'
      //   px='12'
      bg='gray.100'
      borderRadius='md'
      boxShadow='2xl'
      mt='12'
      justifyContent='center'
      textAlign='center'
    >
      <Box color='black' fontWeight='bold' fontSize='48' my='auto'>
        <Box>4%</Box>
      </Box>
      <Image
        src='https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=200&height=200&name=USDC.png'
        alt='usdc'
        boxSize='24'
        mx='auto'
      />

      <Box textAlign='center'>
        <Flex px='8'>
          <Box>Total Supply</Box>
          <Spacer />
          <Box>$111,111.000</Box>
        </Flex>
        <Flex px='8'>
          <Box>Total Supply</Box>
          <Spacer />
          <Box>$111,111.000</Box>
        </Flex>
        <Flex px='8'>
          <Box>Total Supply</Box>
          <Spacer />
          <Box>$111,111.000</Box>
        </Flex>
        <MyLink href='/earn'>
          <Button
            bg='red'
            boxSize='12'
            px='12'
            color='white'
            boxShadow='xl'
            m='4'
          >
            Earn
          </Button>
        </MyLink>
      </Box>
    </Box>
  )
}
