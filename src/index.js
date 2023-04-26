import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// dev-iz2udir2ctflxlgq.us.auth0.com    domain
// tqwFNsyweV5uUIMrRyaSp4LqrZukkXTC clientID

root.render(
  <Auth0Provider
    domain="dev-iz2udir2ctflxlgq.us.auth0.com"
    clientId="tqwFNsyweV5uUIMrRyaSp4LqrZukkXTC"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>
);
