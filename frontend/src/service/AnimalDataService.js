import axios from 'axios'

const BACK_API_URL = 'http://localhost:8080'

class AnimalDataService {

    retrieveAllAnimals() {
        //console.log('executed service')
        return axios.get(`${BACK_API_URL}/anidir`);
    }

    retrieveAnimal(id) {
        //console.log('executed service')
        return axios.get(`${BACK_API_URL}/anidir/${id}`);
    }

    deleteAnimal(id) {
        //console.log('executed service')
        return axios.delete(`${BACK_API_URL}/anidir/${id}`);
    }

    updateAnimal(id, animal) {
        //console.log('executed service')
        return axios.put(`${BACK_API_URL}/anidir/${id}`, animal);
    }

    createAnimal(animal) {
        //console.log('executed service')
        return axios.post(`${BACK_API_URL}/anidir/`, animal);
    }
}

export default new AnimalDataService()
