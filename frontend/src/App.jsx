import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios
            .get("/api/health/")
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("API error:", error);
            });
    }, []);

    return (
        <div>
            <h1>Pilates Platform</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;