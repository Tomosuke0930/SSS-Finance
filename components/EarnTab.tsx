import {
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import { EarnPlanDetail } from './EarnDetail'

export const EarnTab = () => {
  const colors = useColorModeValue(
    ['pink', 'pink', 'pink'],
    ['red.500', 'blue.500', 'green.500']
  )
  const [tabIndex, setTabIndex] = React.useState(0)
  const bg = colors[tabIndex]
  return (
    <Box pt='12'>
      <Tabs onChange={(index) => setTabIndex(index)} borderRadius='md'>
        <TabList bg={bg} >
          <Tab>4%</Tab>
          <Tab>8%</Tab>
          <Tab>12%</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EarnPlanDetail />
          </TabPanel>
          <TabPanel>
            <EarnPlanDetail />
          </TabPanel>
          <TabPanel>
            <EarnPlanDetail />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
