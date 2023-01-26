import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Flex, Select } from '@chakra-ui/react';
import Image from 'next/image';


interface AvatarCategoryProps {
    title: string;
    options: Array<string>;
}
const AvatarCategory = ({ title, options }: AvatarCategoryProps) => {

    return (
        <Flex justify="space-between" alignItems="center">
            <Flex justify="space-between" alignItems="center" mb="12px">
                <Image src="/categoryMarker.svg" alt="marker" width={36} height={42.5} />
                <Heading color="#FFC453" textTransform="uppercase" fontWeight={400}
                    fontSize="24px"
                    lineHeight="62px"
                    ml={4}
                    as='h1'>
                    {title}
                </Heading>
            </Flex>
            <Select w="60%" placeholder='Select option' borderColor="#FFC453" color="#FFF">
                {options && options.map((option: string) => (<option value={option}>{option}</option>))}
            </Select>
        </Flex>
    )
}

export default AvatarCategory;