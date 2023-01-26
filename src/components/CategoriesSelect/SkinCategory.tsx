import { getSampleURLBySkinType } from '@/utils/hooks/useAvatars';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Flex, Select } from '@chakra-ui/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';


const SkinCategory = ({ }) => {
    const { data } = useQuery(
        `queryKey`, async() => await getSampleURLBySkinType('Black')
    )
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(data);

    const onSubmit = (data: any) => console.log(data)
    return (
        <Flex justify="space-between" alignItems="center">
            <Flex justify="space-between" alignItems="center" mb="12px">
                <Image src="/categoryMarker.svg" alt="marker" width={36} height={42.5} />
                <Heading color="#FFC453" textTransform="uppercase" fontWeight={400}
                    fontSize="24px"
                    lineHeight="62px"
                    ml={4}
                    as='h1'>
                    Skin Type
                </Heading>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Select {...register('skin')}  w="60%" placeholder='Select option' borderColor="#FFC453" color="#FFF" onSelect={() => handleSubmit(onSubmit)} >
                <option style={{ color: 'black' }} value='option1'>Asian</option>
                <option style={{ color: 'black' }} value='option2'>Black</option>
                <option style={{ color: 'black' }} value='option3'>Caucasian</option>

            </Select>
            </form>
        </Flex>
    )
}

export default SkinCategory;