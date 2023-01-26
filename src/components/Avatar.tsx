import { AvatarImage } from '@/styles'

interface AvatarProps {
    image?: string;
}
const Avatar: React.FC = ({image}: AvatarProps) => {

    return (
        <>
            <AvatarImage src="/avatar.png" alt="avatar" fill />
        </>
    )
}

export default Avatar;