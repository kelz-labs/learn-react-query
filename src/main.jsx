import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
