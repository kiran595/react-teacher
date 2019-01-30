import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6bekckwd2k.execute-api.us-east-2.amazonaws.com/dev'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance