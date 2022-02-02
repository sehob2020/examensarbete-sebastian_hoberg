import { HStack } from '@chakra-ui/layout';
import { motion } from "framer-motion"
import Social from '../components/Social';

function Home() {
  return (
      <HStack display="flex" alignItems="center" justifyContent="center" h="full" w="100%">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Social />
        </motion.div>  
      </HStack>
  );
}

export default Home;
