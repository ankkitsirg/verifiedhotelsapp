import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import Hotels from "../pages/Hotels/Hotels";
import HotelDetails from "../pages/HotelDetails/HotelDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Search from "../pages/Search";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Booking from "../pages/Booking/Booking";
import BookingSuccess from "@/pages/BookingSuccess/BookingSuccess";

import MyBookings from "@/pages/MyBookings/MyBookings";
import VerifyStay from "@/pages/VerifyStay/VerifyStay";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
         
          <Route
            path="/booking/:id"
            element={<Booking />}
          />
          <Route
            path="/booking-success"
            element={<BookingSuccess />}
          />
          <Route
            path="/my-bookings"
            element={<MyBookings />}
          />
          <Route
            path="/verify/:bookingId"
            element={<VerifyStay />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;