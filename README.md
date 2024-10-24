# ElectroMart

Welcome to **ElectroMart**, an eCommerce website designed to provide users with a seamless shopping experience for electronic products. This project is built with **Next.js** for the frontend, **Sanity** as the headless CMS for the backend, and **Stripe** for payment integration.

**Click here to see the live project**: [**Deployed Project Link**](https://ecommerce-sanity-nbl6-git-main-ekansh3503s-projects.vercel.app/)

## Features

- **Product Catalog**: Browse and search for a wide variety of electronic products.
- **Shopping Cart**: Add, remove, and manage items in the shopping cart.
- **Responsive Design**: Mobile-friendly interface for an optimal experience on any device.
- **Checkout Process**: Integrated with **Stripe** for secure payments.
- **CMS Integration**: Uses **Sanity** as the backend for managing content and product data.

## Technologies Used

- **Frontend**: 
  - Next.js (React framework for server-side rendering)
  - CSS/SCSS
  - React Icons

- **Backend**: 
  - Sanity (Headless CMS for managing product data)
  - Sanity Studio for creating, updating, and managing content

- **Payments**:
  - Stripe (For handling secure payment transactions)

- **Deployment**: 
  - Vercel (Frontend deployment)
  - Sanity Studio (for content management)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ekansh3503/ecommerce_sanity.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce_sanity
   ```

3. Install the frontend dependencies:

   ```bash
   npm install
   ```

4. Navigate to the Sanity folder for the backend and install backend dependencies:

   ```bash
   cd sanity
   npm install
   ```

5. Create a `.env` file and add your environment variables (see `.env` for a template).

6. Add your **Stripe API keys** to the `.env` file:

   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

7. Start the development server for both frontend and backend:

   - For Next.js frontend:
     ```bash
     npm run dev
     ```

   - For Sanity backend:
     ```bash
     sanity start
     ```

8. Open your browser and go to `http://localhost:3000` for the frontend and `http://localhost:3333` for Sanity Studio.

## Usage

- Browse products and add them to your cart.
- Complete the checkout process using Stripe's secure payment gateway.
- Admins can manage product content through Sanity Studio.

## API Integration

- The project integrates with **Sanity** APIs to fetch product data from the CMS.
- **Stripe** is used to handle payments. Ensure your Stripe API keys are properly set in the `.env` file.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the branch.
5. Create a pull request.

## UI Screenshots
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002445.png?raw=true)
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002651.png?raw=true)
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002821.png?raw=true)
![productpage](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002956.png?raw=true)
![cartview](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003147.png?raw=true)
![aboutus](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003239.png?raw=true)
![contactus](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003333.png?raw=true)
![paymentpage](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003429.png?raw=true)
![successfullyordered](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003620.png?raw=true)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for checking out **ElectroMart**! Feel free to reach out if you have any questions or need further assistance.
