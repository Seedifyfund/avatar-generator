import { Flex,Text } from '@chakra-ui/react'
import Image from 'next/image';

const Navbar: React.FC = () => {

    return (
        <>
            <Flex
                h="118px"
                as="nav"
                w="100%"
                maxW="100vw"
                justify="center"
                alignItems="center"
                bgColor="rgba(0, 0, 0, 0.14);"
                backdropFilter="blur(7px)"
                backgroundImage="url('/navBarBackground.png')"
                bgSize="cover"
                backgroundRepeat="no-repeat"
            >
                <Image src="/seedworldLogo.svg" alt="Seedworld logo" width={225} height={65} />              
            </Flex>
        </>
    )
}

export default Navbar;