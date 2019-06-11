import { baseUrl } from './../config';
import axios from 'axios';


const getRate = async () => {
    try {
        const { data, data: { rate = .04 } } = await axios.get(`${baseUrl}/rate`)
        return rate
    } catch (e) {
        // handle error
    }
}

const calculate = async (type, rate) => {
    try {
        const { data } = await axios.post(`${baseUrl}/${type}/${rate}`);
        return data
    } catch (e) {
        // handle error
    }
    return
}


export {
    getRate,
    calculate
}