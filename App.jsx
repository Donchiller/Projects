import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Grid from "./Grid";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Supplements from "./Supplements";
import AllSupplements from "./AllSupplements";
import Login from "./Login";
import { Cart } from "./Cart";
import Footer from "./Footer";
import Offer from "./Offer";
import WheyProtein from "./WheyProtein";
import Creatine from "./Creatine";
import Gainer from "./Gainer";
import Shilajit from "./Shilajit";
import Preworkout from "./Preworkout";
import Fishoil from "./Fishoil";
import BCAAs from "./BCAAs";
import PlantProtein from "./PlantProtein";
import Multivitamin from "./Multivitamin";
import Peanutbutter from "./Peanutbutter";
import Ayurveda from "./Ayurveda";
import Wheydynamic from "./Wheydynamic";
import Creatinedynamic from "./Creatinedynamic";
import Ganierdynamic from "./Ganierdynamic";
import Shilajitdynamic from "./Shilajitdynamic";
import PreworkoutDynamic from "./PreworkoutDynamic";
import Fishoildynamic from "./Fishoildynamic";
import BCAADynamic from "./BCAADynamic";
import Plantproteindynamics from "./Plantproteindynamics";
import MultivitaminDynamic from "./MultivitaminDynamic";
import PeanutButterDynamic from "./PeanutButterDynamic";
import AyurvedaDynamic from "./AyurvedaDynamic";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Grid />
              <Slider />
            </>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/supplements/all" element={<AllSupplements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offer />} />

        <Route path="/WheyProtein" element={<WheyProtein />} />
        <Route path="/Creatine" element={<Creatine />} />
        <Route path="/Gainer" element={<Gainer />} />
        <Route path="/Shilajit" element={<Shilajit />} />
        <Route path="/Preworkout" element={<Preworkout />} />
        <Route path="/Fishoil" element={<Fishoil />} />
        <Route path="/Bcaa" element={<BCAAs />} />
        <Route path="/Plant" element={<PlantProtein />} />
        <Route path="/Multi" element={<Multivitamin />} />
        <Route path="/Peanut" element={<Peanutbutter />} />
        <Route path="/Ayruv" element={<Ayurveda />} />

        <Route path="/wheydynamic/:id" element={<Wheydynamic />} />
        <Route path="/Creatinedynamic/:id" element={<Creatinedynamic />} />
        <Route path="/Gainerdynamic/:id" element={<Ganierdynamic />} />
        <Route path="/shilajitdynamic/:id" element={<Shilajitdynamic />} />
        <Route path="/preworkoutdynamic/:id" element={<PreworkoutDynamic />} />
        <Route path="/fishoildynamics/:id" element={<Fishoildynamic />} />
        <Route path="/BCAADynamic/:id" element={<BCAADynamic />} />
        <Route
          path="/PeanutButterDynamic/:id"
          element={<PeanutButterDynamic />}
        />
        <Route
          path="/PlantProteinDynamic/:id"
          element={<Plantproteindynamics />}
        />
        <Route
          path="/MultivitaminDynamic/:id"
          element={<MultivitaminDynamic />}
        />
        <Route path="/AyurvedaDynamic/:id" element={<AyurvedaDynamic/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
