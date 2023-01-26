import api from "../api";
import { useQuery } from "react-query";

//Specific fetch function
const getSampleImageURL = async ()=>{
    const { data } = await api.get(`/assets/42`)
    return data
}

//React query hook, ready to deconstruct the data, isLoading, error, etc.
export const useSampleAvatar = () =>{
    return useQuery(['sample-avatar'], getSampleImageURL)
}


export const getSampleURLByGender = async (gender: 'Male' | 'Female')=>{
    const { data } = await api.get(`/assets?gender=${gender}`)
    return data
}

export const getSampleURLBySkinType = async (skinType: 'Asian' | 'Black' | 'Caucasian')=>{
    const { data } = await api.get(`/assets?skin=${skinType}`)
    return data
}