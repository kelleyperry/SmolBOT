# Starter React App

This is a starter React application built with TypeScript and Firebase Authentication.

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/starter-react-app.git
cd starter-react-app
npm install
```

## Configuration

Create a `.env` file in the root directory of the project and add your Firebase configuration.

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Usage

Start the development server.

```bash
npm start
```

The application includes the following components:

- `Login.tsx`: User login form.
- `Signup.tsx`: User signup form.
- `Logout.tsx`: User logout button.
- `ProtectedRoute.tsx`: A higher-order component for protecting routes that require authentication.

The application also includes a `auth.ts` service for handling Firebase authentication and a `user.ts` type for user data.

## Styles

Global styles are defined in `global.ts`. Component-specific styles are defined in `Login.ts`, `Signup.ts`, and `Logout.ts`.

## Building

To build the application for production, run:

```bash
npm run build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)