import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Router from "./routes/sections";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router />
    </LocalizationProvider>
  );
}

export default App;
