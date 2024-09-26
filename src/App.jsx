import { Routes , Route , Navigate } from "react-router-dom";
import { Swipercategory } from "./Pages/SwiperCategory";
import { LayOut } from "./Components/Layout";
import { CategorySearch } from "./Pages/CategorySearch";
import { AboutDish } from "./Pages/AboutDish";
import { SeachPage } from "./Pages/SearchPage";
import { Contacts } from "./Pages/Contacts";
import { Notfound } from "./Pages/404";

function App() {
  return  (
    <Routes basename="/cool-recepies-react-app">
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Swipercategory/>}/>
        <Route path="category/:type" element={<CategorySearch/>}/>
        <Route path="search/:type" element={<SeachPage/>}/>
        <Route path="dish/:id" element={<AboutDish/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="404" element={<Notfound/>}/>
        <Route path="*" element={<Navigate to="/404"/>}/>
      </Route>
    </Routes>
  )
}

export default App;
