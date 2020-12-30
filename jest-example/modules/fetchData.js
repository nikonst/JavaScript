import axios from 'axios'

const fetchData = async (url) => {
    try {
        const response = await axios(url)
        return response.data
    } catch (err) {
        return "An Error Occured"
    }
}

export { fetchData }
