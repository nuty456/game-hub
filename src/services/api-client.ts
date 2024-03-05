import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'afaec42798fc4bcc91810271290b7d20' // rawg.io api key
    }
})

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)
    }
}

export default APIClient;
/*
Developer info
Edit
Your Current Plan
Free
Number of requests left for the period
20000
Number of requests will renew on
21. 3. 2024
Full name
Jiří Bendl
Contact email
jirka.bendl@gmail.com
Site/App url
http://localhost:5173
Describe in a few words how you would like to use RAWG’s API
Just for l testing purpose codewithmosh.comocal
API Key
afaec42798fc4bcc91810271290b7d20
Refresh Key
*/