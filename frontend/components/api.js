import axios from 'axios';

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

// Cache for runtime versions
let runtimeVersions = null;

export const getRuntimes = async () => {
    const response = await API.get("/runtimes");
    const data = response.data;
    
    // Cache the runtime versions for easy lookup
    runtimeVersions = data.reduce((acc, runtime) => {
        acc[runtime.language] = runtime;
        return acc;
    }, {});
    
    return data;
}

export const executeCode = async (code, language) => {
    // Ensure we have runtime versions loaded
    if (!runtimeVersions) {
        await getRuntimes();
    }
    
    // Get the language string (handle both string and object inputs)
    const languageName = typeof language === 'string' ? language : language.value;
    
    // Get runtime info from cache
    const runtime = runtimeVersions[languageName];
    
    if (!runtime) {
        throw new Error(`Unsupported language: ${languageName}`);
    }
    
    const response = await API.post("/execute", {
        "language": runtime.language,
        "version": runtime.version,
        "files": [
            {
                "content": code
            }
        ]
    });

    return response.data;
}