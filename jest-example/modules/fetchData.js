import axios from 'axios'

const fetchData = async () => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users/1')
        return response.data
    } catch (err) {
        return console.log(err)
    }
}

export { fetchData }
