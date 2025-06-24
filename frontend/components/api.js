import axios from 'axios';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const executeCode = async (code, language) => {
    // Handle both object and string formats
    
    const response = await API.post("/execute", {
        "language": language.value,
        "version": language.version,
        "files": [
            {
                "content": code
            }
        ]
    });

    return response.data;
}