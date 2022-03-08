import { LinkIcon } from '@chakra-ui/icons'
import {
  chakra,
  Spacer,
  Button,
  Select,
  Image,
  ButtonGroup,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import { MyLink } from '../components/MyLink'

export const Header = () => {
  return (
    <chakra.header
      display='flex'
      gridGap='4'
      alignItems='center'
      bg='white'
      h='16'
      shadow='base'
      px='16'
      color='black'
      borderBottom='1px'
    >
      <MyLink href='/' fontWeight='bold' fontSize='30'>
        <Flex>
          <Flex my='auto'>
            <Box color='red'>S</Box>
            <Box color='blue'>S</Box>
            <Box color='green'>S</Box>
            <Box> Finance</Box>
          </Flex>
        </Flex>
      </MyLink>
      <Spacer />
      <MyLink href='/'>Home</MyLink>
      <MyLink href='/mypage'>MyPage</MyLink>
      <MyLink href='/dashboard'>Dashboard</MyLink>
      <MyLink href='/earn'>Earn</MyLink>
      <MyLink href='/gov'>Gov</MyLink>
      <Button
        variant='outline'
        border='1px'
        leftIcon={<LinkIcon />}
        color='black'
      >
        Connect Wallet
      </Button>
    </chakra.header>
  )
}
