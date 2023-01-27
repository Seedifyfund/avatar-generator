import { getSampleURLBySkinType } from '@/utils/hooks/useAvatars';
import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Flex, Select, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useEffect } from 'react';


const skinList = [
    {
        id: "1",
        name: "Asian"
    },
    {
        id: "2",
        name: "Black"
    },
    {
        id: "3",
        name: "Caucasian"
    },
];
const SkinCategory = ({ }) => {
    const { isLoading, isError, error, mutate, data } = useMutation(getSampleURLBySkinType)
    const { setValue, control, register, handleSubmit } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data: any) => {
        mutate(data.skin);
    };
    useEffect(() => {
        setTimeout(() => {
            setValue("skin", "1");
        }, 1000);

        console.log(data);
    }, [setValue, data]);
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
                <Controller
                    name="skin"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (

                        <Select     defaultValue="1" value={value} {...register('skin')} id="skin" w="100%" placeholder='Select option' borderColor="#FFC453" color="#FFF" onChange={onChange} >
                            {skinList.map((c, i) => (
                                <option style={{ color: 'black' }} key={`c-${i}`} value={c.name}>
                                    {c.name}
                                </option>
                            ))}

                        </Select>
                    )}
                />
                <Button type="submit">
                    Go!
                </Button>

            </form>
        </Flex>
    )
}

export default SkinCategory;