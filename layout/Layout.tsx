import { Box, Container, ContainerProps } from '@chakra-ui/react'
import { ReactNode, VFC } from 'react'
// import { Header } from './Header'

type Props = ContainerProps & {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children, maxW = '6xl' }) => {
  return (
    <>
      {/* <Header /> */}

      <Container maxW={maxW}>
        {children}
        <Box h='16' />
      </Container>
    </>
  )
}