import axios, {AxiosResponse} from "axios";
import {_select} from "../interface/_select";

const url: string = 'https://cuik-projects.github.io/country-list/countries.json'


export const getData = async (): Promise<AxiosResponse<_select[]>> => {
    return await axios.get(url)
}
