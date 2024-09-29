import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: false,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Handling request interceptors
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log('Token in localStorage:', token);  // Check if token is correctly retrieved

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request Headers:', config.headers); // Log the headers to ensure Authorization is added

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


// Handle response interceptors
apiClient.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {
        console.error("Error response", error.response || error.message);
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default apiClient;
