import React from "react";
import Form from "./Form";
function App() {
    const fetchedData = { name: "Joseph", username: "admin", password: "password" };
    return (
        <div className="app">
            <Form data={fetchedData} />
        </div>
    );
}

export default App;
