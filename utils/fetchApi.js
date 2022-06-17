import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '967542d6a2msh80cac9133f634aep1c461cjsnbba0ac0df723',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}