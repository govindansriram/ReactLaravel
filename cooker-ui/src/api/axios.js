import axios from 'axios';

const URL = 'http://localhost:8000';

axios.create({
    baseUrl: URL,
    headers: {'Content-Type': 'application/json'}
});


