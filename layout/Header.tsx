import { LinkIcon } from '@chakra-ui/icons'
import {
  chakra,
  Spacer,
  Button,
  Select,
  Image,
  ButtonGroup,
  Text,
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
        <span style={{ color: 'red' }}>S</span>
        <span style={{ color: 'blue' }}>S</span>
        <span style={{ color: 'green' }}>S</span>
        Finance
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
