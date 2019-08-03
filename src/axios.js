import axios from 'axios';

const instance=axios.create({
    baseURL:'https://my-react-burger-app-fa47c.firebaseio.com/'
})


export default instance;