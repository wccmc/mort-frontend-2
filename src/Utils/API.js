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

const getRealRate = async () => {
    // const firstUrl = 'https://login.microsoftonline.com/marketplaceauth.optimalblue.com/oauth2/token'
    // const firstBody = {
    //     client_id: '03137832-73ce-43b1-ae99-9f3a2a59bb0a',
    //     client_secret: 'LqwD9/wazGtjPr7XehGeyxOwgIW7cwqUZSFliMXgJMOa=',
    //     grant_type: 'client_credentials',
    //     resource: 'https://marketplaceauth.optimalblue.com/d35ae893-2367-40b5-a9b4-bfab3acb7991',

    // }
    const firstResponse = await axios.get(`${baseUrl}/get-rate`)

    console.log(firstResponse.data.access_token)
    const token = firstResponse.data.access_token

    const secondResponse = await axios.post(`${baseUrl}/get-rate2`, {token})

    console.log(secondResponse)
}


export {
    getRate,
    calculate,
    getRealRate,
}