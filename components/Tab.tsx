import {
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { DetailPlan } from './DetailPlan'

export const TabComponent = () => {
  const colors = useColorModeValue(
    ['red.300', 'blue.300', 'green.300'],
    ['red.500', 'blue.500', 'green.500']
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]
  return (
    <Tabs onChange={(index) => setTabIndex(index)} bg={bg} borderRadius='md'>
      <TabList>
        <Tab>4%</Tab>
        <Tab>8%</Tab>
        <Tab>12%</Tab>
      </TabList>
      <TabPanels p='2rem'>
        <TabPanel>
          <DetailPlan />
        </TabPanel>
        <TabPanel>
          <DetailPlan />
        </TabPanel>
        <TabPanel>
          <DetailPlan />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
