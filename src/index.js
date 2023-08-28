import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterProvider } from "./contexts/FilterContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <FilterProvider>
      <App />
    </FilterProvider>
  </QueryClientProvider>
);
