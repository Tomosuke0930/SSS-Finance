import { Box, Button, Flex, Image } from '@chakra-ui/react'
export const DetailPlan = () => {
  return (
    <Box
      //   py='12'
      //   px='12'
      bg='gray.100'
      borderRadius='md'
      boxShadow='2xl'
      //   mt='12'
    >
      <Flex>
        <Box width='50%'>
          <Image
            src='https://defirate.com/wp-content/uploads/2019/07/image4-17.png'
            alt='graph'
          />
        </Box>

        <Box bg='gray.300' width='50%' p='6' ml='6'>
          <Box>4%</Box>
          <Button bg='red'>Deposit</Button>
        </Box>
      </Flex>
    </Box>
  )
}
