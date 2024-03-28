<!-- Replace this with screenshot of blog 
<img width="1320" alt="Screenshot" src="https://github.com/nicogarbaccio/hotel-booking-app/assets/36672915/0647054f-625e-47fc-a601-6f3eb18ab2b4">
-->

# Buggin' Out
Buggin' Out is my personal blog about QA engineering, that I built from scratch using the MERN stack. The frontend is powered by Vite and is written in JavaScript. The backend is powered by Express and Node.js, while MongoDB is used for the database. The blog features a robust suite of Cypress end-to-end tests, covering everything from authentication to creating, editing, and deleting a post.

## Key Features
1. **User Authentication**: Users can create an account or sign in with their Google account to leave comments(Only admins can post). Easy sign in and registration with robust security measures, including HTTP cookies, JWT implementation, as well as Google OAuth integration.
2. **Admin Dashboard**: Admins can effortlessly manage posts, comments, and users, complete with CRUD operations using the MongoDB database. The site is designed to be completely responsive, ensuring a seamless experience across various devices. The site also includes a sleek dark mode to enhance user experience and cater to different preferences.
3. **Advanced Search Functionality**: Users can search for a blog post by title, limit results, and sort through a modern sidebar, utilizing cutting-edge search query techniques with MongoDB. Everyone has the ability to leave, edit, and delete their comments on the post pages, fostering an interactive community.
4. **UI Library**: Utilizes the Flowbite library as well as for image uploads, a crucial feature for any blog platform.

### Prerequisites
Before you begin, ensure you have Node.js installed on your system. Version 18.17.0 or newer will work just fine.

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/chrisblakely01/mern-booking-app.git
cd mern-booking-app
```

### Backend Configuration

1. **Environment Files**: In the project's root folder, create your `.env` file. Then navigate to the `backend` folder and create the `.env.e2e` file Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET=

2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
    - For the `.env.e2e` setup see "running automated tests" below
  
3. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

### Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`. Add the following contents to the file:

    ```plaintext
    VITE_FIREBASE_API_KEY=
    ```

2. **Firebase Setup**:
    - On the [Firebase](https://firebase.google.com/) website, sign in with your Google account. 
    - In the nav bar, select 'Go to console' and add a new project, following the steps. Enabling Google Analytics are totally optional.
    - In your project's dashboard, select 'Authentication', then 'Authorized domains'. Add "localhost" to the list of authorized domains. Once your project is deployed, you'll want to add that address as well. 

## Running the Application

1. **Backend**:
    - Navigate to the root directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal  


### Running Automated Tests

1. **MongoDB Setup**: 
    - You will ideally want to create a new mongoDb database for your tests to run against. This is to keep the data stable 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new project (e.g e2e tests)
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env.e2e` file.
    - To run your app in a testing environment, run the front end as usual, but instead of running `npm run dev` for the backend, you'll want to run `npm run e2e`. 
 
3. **Running tests**    
    - Navigate to the `cypress-e2e` directory.
    - Install dependencies: `npm install`.
    - Start the frontend and backend server using the steps above
    - Run the command `npx cypress open` to open the Cypress test runner. Follow the steps to get started.
        - Cypress has outstanding [documentation](https://docs.cypress.io/guides/overview/why-cypress). Any question you have, their docs can likely answer.

