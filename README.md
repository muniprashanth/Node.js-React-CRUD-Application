Node.js + React CRUD Application
--------------------------------

This repository contains a basic CRUD (Create, Read, Update, Delete) application built with Node.js for the backend API and React for the frontend. The frontend uses Material UI and Bootstrap to provide a visually appealing interface for user interactions.

## Backend (Node.js API)
- **Express**: Used to create the RESTful API to handle CRUD operations.
- **MySQL**: Database to store user data.
- **Cors**: Enabled to allow the API to communicate with the frontend.
- **Body-Parser**: To parse incoming JSON requests.

### The Node.js backend handles the following operations:
1. **Create**: Insert a new user into the database.
2. **Read**: Retrieve all users from the database.
3. **Update**: Update an existing user's details by their unique ID.
4. **Delete**: Remove a specific user or all users from the database.

## Frontend (React)
* ___Material UI and Bootstrap___: These are used to style the application and provide a cohesive design with an interactive UI.
* ___React Components___: The UI includes forms to insert or update user data, tables to display the list of users, and buttons for updating or deleting records.

## API Endpoints
1. *POST* `/users`: Add a new user.
2. *GET* `/users`: Get all users.
3. *PUT* `/users/:id`: Update a user by ID.
4. *DELETE* `/users`: Delete all users.
5. *DELETE* `/users/:id`: Delete a user by ID.

## Features
- ___*CRUD Operations*___: The application allows you to create, read, update, and delete user records.
- ___*User-Friendly UI*___: The combination of Material UI and Bootstrap provides a clean, responsive interface.
- ___*Themes and Styling*___: Material UI themes are used for consistent design, while Bootstrap adds responsive elements and styling.
- ___*Light and Dark Themes*___: The application supports both light and dark themes for a better user experience.

## How to Run
1. Backend Setup:
   - Install dependencies using npm install.
   - Run the server with node server.js.
2. Frontend Setup:
   - Navigate to the my-react-app folder.
   - Install dependencies using `npm install`.
   - Start the application with `npm start`.

## Technologies Used
- Backend: Node.js, Express, MySQL
- Frontend: React, Material UI, Bootstrap

## Folder Structure

```Node+React/
├── api/                 # Node.js backend
│   ├── server.js        # Main server file
│   ├── package.json     # Backend dependencies
│   └── ...              # Other backend files
├── ui/                  # React frontend
│   └── my-react-app/    # React project files
│       ├── src/         # Source code for React
│       ├── public/      # Static files
│       ├── package.json # Frontend dependencies
│       └── ...          # Other frontend files
└── README.md            # This README file
```


## Screenshots
1. **Light Theme (Display)**
   ![Light Theme Display](https://github.com/user-attachments/assets/e388e4f1-8f34-4604-8a8c-1dd42bfb4a1f)

2. **Dark Theme (Display)**
   ![Dark Theme Display](https://github.com/user-attachments/assets/eea1ff06-7f5b-4087-95e9-bcde41fc5651)

3. **Update**
   ![Update](https://github.com/user-attachments/assets/248895f7-a7d9-488f-8f5f-82a0fac6eab8)

4. **Delete**
   ![Delete](https://github.com/user-attachments/assets/13cffad6-6b41-45d4-b32c-e159d01b29d0)
