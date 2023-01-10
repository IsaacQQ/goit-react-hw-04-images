import axios from 'axios';

export async function getDataByName(searchQuerry, page) {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?q=${searchQuerry}&page=${page}&key=30826039-bb9fe5ddb9f3f8dd9d92d5eff&image_type=photo&orientation=horizontal&per_page=12`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getDataByName;