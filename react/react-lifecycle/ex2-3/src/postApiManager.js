import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostApiManager {
    static async get10Posts() {
        const response = await axios.get(API_URL);
        const posts = response.data.slice(0, 10);
        return posts;
    }
}