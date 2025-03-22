// export default async function handler(req, res) {
//     const response = await fetch("https://<your-app-name>.azurewebsites.net/api/myFunction?name=John");
//     const data = await response.json();
//     res.status(200).json(data);
// }

// export default async function handler(req:any, res:any) {
    // try {
    //     // Call the Azure Function with a query parameter (name=John)
    //     const response = await fetch("https://ROIBackendFunction.azurewebsites.net/api/myFunction?name=Winnie");

    //     // Check if the response is successful
    //     if (!response.ok) {
    //         throw new Error(`Azure Function error: ${response.statusText}`);
    //     }

    //     // Parse the JSON response from Azure
    //     const data = await response.json();

    //     // Send the Azure Function response back to the client
    //     res.status(200).json(data);
    // } catch (error) {
    //     console.error("Error fetching data from Azure Function:", error);

    //     // Send an error response
    //     res.status(500).json({ error: "Failed to fetch data from Azure Function" });
    // }
// }


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = new FormData();
        formData.append('file', req.body.file);

        const response = await fetch("https://RoiMyFunctionApp.azurewebsites.net/api/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.text();
        res.status(200).json({ message: data });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}


