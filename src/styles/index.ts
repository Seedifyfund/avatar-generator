import styled  from "styled-components";
import Image from 'next/image'

export const AvatarImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
`;