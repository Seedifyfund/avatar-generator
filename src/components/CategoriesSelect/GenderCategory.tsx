import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Flex, Select } from '@chakra-ui/react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { getSampleURLByGender } from '@/utils/hooks/useAvatars';

const GenderCategory = ({ }) => {
    const { data } = useQuery(
        `queryKeyMale`, async() => await getSampleURLByGender('Male')
    )

    return (
        <Flex justify="space-between" alignItems="center">
            <Flex justify="space-between" alignItems="center" mb="12px">
                <Image src="/categoryMarker.svg" alt="marker" width={36} height={42.5} />
                <Heading color="#FFC453" textTransform="uppercase" fontWeight={400}
                    fontSize="24px"
                    lineHeight="62px"
                    ml={4}
                    as='h1'>
                    Gender
                </Heading>
            </Flex>
            <Select w="60%" placeholder='Select option' borderColor="#FFC453" color="#FFF">
                <option style={{ color: 'black' }} value='option1'>Male</option>
                <option style={{ color: 'black' }} value='option2' disabled>Female</option>

            </Select>
        </Flex>
    )
}

export default GenderCategory;