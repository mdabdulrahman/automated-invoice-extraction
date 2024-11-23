This project includes an API built using Express.js to handle interactions with the Gemini API and provides necessary support for frontend integration.

Key Features
Express.js as an API Service:
The Gemini API requires the use of the Node.js fs module, which is not supported in React. To address this, an API service was implemented in Express.js, acting as a middle layer between the frontend and Gemini API.

File Upload Handling:
Directly uploading Excel files to the Gemini API is not supported due to format requirements. The backend handles this limitation by converting uploaded Excel files into CSV format before passing them to the Gemini API.

Hosting:
The Express.js API is hosted on Render
