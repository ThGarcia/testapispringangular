**Fullstack API TESTE with Angular and Spring Boot**

This project demonstrates a fullstack application built with Angular for the frontend and Spring Boot for the backend. It allows you to manage users, including creating, reading, updating, and deleting them.

**Technologies:**

* Frontend: Angular
* Backend: Spring Boot
* API Documentation: Swagger

**Prerequisites:**

* Node.js and npm ([https://nodejs.org/en](https://nodejs.org/en))
* Java Development Kit (JDK) ([https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html))

**Running the Application:**

  - **Frontend:**
    - Navigate to the `frontend` directory.
    - Run `npm install` to install frontend dependencies.
    - Run `npm start` to start the frontend development server.
  - **Backend:**
    - Navigate to the `backend` directory.
    - Run `mvn clean install` to install backend dependencies.
    - Run `mvn spring-boot:run` to start the backend server.

**Accessing the Application:**

* **Frontend:** http://localhost:4200
* **Backend (API):** http://localhost:8080/api/users/
* **API Documentation (Swagger):** http://localhost:8080/swagger-ui/index.html#/

**Frontend Features:**

* **Home Page:** Provides a brief overview of the application's functionalities.
* **Create User:** Allows users to create new account with validation for name and email.
* **Read Users:** Displays a list of all users with basic information (ID, name, email).
* **Edit User:** Enables users to modify details of existing users.
* **Delete User:** Offers the option to permanently remove users.

**API Endpoints:**

* **GET /api/users:** Get a list of all users.
* **GET /api/users/{id}:** Get a specific user by their ID.
* **POST /api/users:** Create a new user. Body: `{ "name": "string", "email": "string" }`
* **PUT /api/users/{id}:** Update an existing user. Body: `{ "name": "string", "email": "string" }`
* **DELETE /api/users/{id}:** Delete a user by their ID.

**Potential Enhancements:**

* **User Authentication and Authorization:** Implement secure login and access control mechanisms.
* **Pagination and Sorting:** Enhance user list management with pagination and sorting capabilities.
* **Search Functionality:** Allow users to search for specific users.
* **Error Handling:** Provide informative error messages.
* **Database Integration:** Configure your preferred database for persistent data storage.
* **Deployment:** Consider deploying the application to a cloud platform.

**Remember:** This project serves as a foundation for study and learning.
