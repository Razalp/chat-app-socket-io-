import { Box, Container,Text , Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      
      <Box
      className='chatbg'
      d='flex'
      justifyContent='center'
      p={3}
      w='100%'
      m='40px 0 15px 0'
      borderRadius='lg'
      borderWidth='1px'
      >
        <Text fontSize='4xl' fontFamily='work sans' color='black' textAlign='center'><b>Chat-Make-Friends</b></Text>
        </Box>
        <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px' color='black' >
      <Tabs variant='enclosed'>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
        
    </Container>
  );
}

export default Home;
