import { AvatarProps } from '@/pages';
import { Backpacks, BaseModel, Hair, Outfits } from '@/styles/avatarStyles';

const Avatar = ({ avatar }: AvatarProps) => {
    
    return (
        <>
            {avatar ? (
                <>
                    <Backpacks src={`static/Male/${avatar?.skin}/${avatar?.archetype}/${avatar?.job}/Backpacks/Male_${avatar?.archetype}_${avatar?.job}_${avatar?.skin}_Backpack_1A.PNG`} />
                    <BaseModel src={`/static/Male/${avatar?.skin}/Base Model/Skin Base/Male_BaseModel_${avatar?.skin}.png`} />
                    <Hair src={`/static/Male/${avatar?.skin}/Base Model/Hair/Male_Hair_${avatar?.skin}_1A.png`} />
                    <Outfits src={`static/Male/${avatar?.skin}/${avatar?.archetype}/${avatar?.job}/Outfits/Male_${avatar?.archetype}_${avatar?.job}_${avatar?.skin}_Clothes_01.png`} />
                </>
            ) : (
                <>
                    <Hair src="static/Male/Caucasian/Base Model/Hair/Male_Hair_Caucasian_1A.png" />
                    <BaseModel src={"static/Male/Caucasian/Base Model/Skin Base/Male_BaseModel_Caucasian.png"} /></>
            )}
        </>
    )
}

export default Avatar;