import { Flex, VStack } from '@chakra-ui/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <VStack p={5} h="full" w="full">
          <Nav />
          <Header />
        <Flex w="100%">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Flex>
      </VStack>
    </BrowserRouter>
  );
}

export default App;
