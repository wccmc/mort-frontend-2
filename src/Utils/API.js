import { baseUrl } from './../config';
import axios from 'axios';


const getRate = async () => {
    try {
        const { data: { rate = .04 } } = await axios.get(`${baseUrl}/rate`)
        return rate * 100
    } catch (e) {
        // handle error
    }
}



const calculate = (type, rate, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('url', `${baseUrl}/${type}/${rate}`)
            console.log('request body', data)
            const { data: result } = await axios.post(`${baseUrl}/${type}/${rate}`, data);
            console.log(result)
            resolve(result)
        } catch (e) {
            // handle error
            reject(Error('Issue with Calculating'))
        }
    })
}


export {
    getRate,
    calculate
}