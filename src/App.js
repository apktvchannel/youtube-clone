import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#0a0a0a" }}>
        <Navbar />
        <Routes>
          <Route path="/youtube-clone" exact element={<Feed />} />
          <Route path="/youtube-clone/video/:id" element={<VideoDetail />} />
          <Route
            path="/youtube-clone/channel/:id"
            element={<ChannelDetail />}
          />
          <Route
            path="/youtube-clone/search/:searchTerm"
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
export default App;
