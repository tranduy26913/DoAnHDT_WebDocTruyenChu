import { Story } from "models/Story";
import { axiosClient, axiosClientWithToken } from "./axiosClient";
import getData from "./getData";
import { Rating } from "models/Rating";
import { Chapter } from "models/Chapter";
import { Reading } from "models/Reading";
export const getStories = async (params:any):Promise<Story[]> => {
    const res = getData(await axiosClient.get<never>(`/novels`, { params }));
    return res;

}
export const getReadings = async ():Promise<Reading[]> => {
    const url = `/novels/readings`
    return getData(await axiosClientWithToken.get(url));
}

export const getReadingDefault = async (params:any):Promise<Reading[]> => {
    const url = `/novels/readingsdefault`
    return getData(await axiosClient.get(url, {params} ));
}

export const getChapterNewUpdate= async (params:any) => {
    return getData(await axiosClient.get(`/novels/novel/newupdate`,{params}));
}

export const getNameChapters = async (url:string, params:any):Promise<Chapter[]> => {
    const res = await axiosClientWithToken.get(`/novels/novel/${url}/mucluc`, { params });
    return getData(res);
}
export const getChapters = async (url:string, params:any):Promise<Chapter[]> => {
    const res = await axiosClientWithToken.get(`/novels/novel/${url}/chuong`, { params });
    return getData(res);
}

export const getChapterByNumber = async (tentruyen:string|undefined, chapnum:string|undefined):Promise<Chapter> => {
    return getData(await axiosClientWithToken.get(`/novels/novel/${tentruyen}/chuong/${chapnum}`));
}

export const getStory = async (url:string):Promise<Story> => {
    const res = await axiosClient.get(`/novels/novel/${url}`);
    return getData(res);
}

export const createRating = async (params:any) => {
    const url = `/rating`
    return getData(await axiosClientWithToken.post(url, params));
}

export const getRatingsByUrl = async (url:string,params:any):Promise<Rating[]> => {
    return getData(await axiosClientWithToken.get(`/rating/${url}`,{params}));
}

export const deleteRating = async (params:any) => {
    return getData(await axiosClientWithToken.delete(`/rating/`,{params}));
}
