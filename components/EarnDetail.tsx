import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
} from '@chakra-ui/react'
export const EarnPlanDetail = () => {
  return (
    <Grid templateColumns='repeat(7, 2fr)' gap={4} h='600' pt='6'>
      <GridItem colSpan={4}>
        <Box
          py='12'
          px='12'
          bg='gray.100'
          borderRadius='lg'
          boxShadow='2xl'
          h='48'
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
          <Flex my='4'>
            <Spacer />
            <Button bg='gray' mr='2'>
              Deposit
            </Button>
            <Button borderColor='gray' color='gray' border='1px'>
              Withdraw
            </Button>
          </Flex>
        </Box>
      </GridItem>
      <GridItem colSpan={3} rowSpan={2}>
        <Box
          py='12'
          px='12'
          bg='gray.100'
          borderRadius='lg'
          boxShadow='2xl'
          h='100%'
        >
          <Box color='black' fontSize='sm'>
            INTEREST
          </Box>
          <Box textAlign='center'>
            <Box
              fontSize='sm'
              bg='gray'
              width='16'
              borderRadius='full'
              mx='auto'
            >
              APY
            </Box>
            <Box fontSize='4xl' color='#4BDB4B' pt='4'>
              4%
            </Box>
          </Box>
          <Button w='100%' bg='green' mt='8'>
            Claim
          </Button>
        </Box>
      </GridItem>
      <GridItem colSpan={3}></GridItem>
    </Grid>
  )
}
