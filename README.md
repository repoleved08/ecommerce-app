# E-commerce Frontend with Vue, TailwindCSS, Flowbite, Pinia, and Vuex

Welcome to the **E-commerce App** repository! This is the frontend for an e-commerce platform built with modern web technologies, consuming a **Golang Echo** API backend.

## Features

- **Vue.js**: For a dynamic and reactive user interface.
- **TailwindCSS**: For styling and responsive design.
- **Flowbite**: For pre-built UI components and interactions.
- **Pinia** & **Vuex**: For state management.
- **Authentication**: Secure user authentication integrated with the backend API.
- **Product Management**: Display and manage products.
- **Payment Gateway**: Supports PayPal (Stripe and Mpesa integration coming soon).

## Project Structure

The project is structured as follows:

```
ecommerce-app/
├── src/
│   ├── assets/        # Static assets like images, fonts, etc.
│   ├── components/    # Reusable Vue components
│   ├── views/         # Page views for the app
│   ├── store/         # Pinia and Vuex stores for state management
│   ├── router/        # Vue Router configuration
│   ├── App.vue        # Main Vue app component
│   └── main.js        # App entry point
├── public/            # Static public files
├── tailwind.config.js # TailwindCSS configuration
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
└── ...
```

## Backend API

This frontend consumes an API built with **Golang Echo**. The API provides endpoints for:

- **Authentication**: User registration, login, and session management.
- **Product Management**: Fetching product listings.
- **Cart & Orders**: Add to cart, place orders.
- **Payment**: PayPal payment gateway integration (Stripe and Mpesa planned).

### Backend Repository
You can find the API repository here: [Golang Echo API](https://github.com/repoleved08/todoapi)

## Setup and Installation

To get started, follow the steps below:

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed.
- **Golang API**: Set up the backend API by following the instructions in its repository.

### Install Dependencies

1. Clone this repository:

   ```bash
   git clone https://github.com/repoleved08/ecommerce-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd ecommerce-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To run the project in development mode, use the following command:

```bash
npm run dev
```

This will start the development server and the app will be accessible at `http://localhost:3000`.

### Build for Production

To build the project for production, use:

```bash
npm run build
```

This will compile the assets and generate an optimized production build.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

### Contact

For more information or inquiries, feel free to contact the repository owner:

- GitHub: [repoleved08](https://github.com/repoleved08)
```

This README provides an overview of the project, its structure, setup, and usage, helping developers understand the project quickly.
