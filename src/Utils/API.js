import { baseUrl } from '../config';
import axios from 'axios';


const getRate = async () => {
    console.warn('We are making the rate call')
    const { data, data: { rate = .04 } } = await axios.get(`${baseUrl}/rate`)
    console.warn('we made the rate call 1', data)
    console.warn('we made the rate call 2', rate)
    return rate
}

const calculate = async (type, rate) => {
    const { data } = await axios.post(`${baseUrl}/${type}/${rate}`);
    return data
}


export {
    getRate,
    calculate
}