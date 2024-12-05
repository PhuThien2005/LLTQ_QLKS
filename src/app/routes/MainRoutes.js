import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import GuestList from '../pages/GuestList';
import Home from '../pages/Home';
import RoomList from '../pages/RoomList';
import StaffList from '../pages/StaffList';
import PaymentList from '../pages/PaymentList/PaymentList';
import UserProtect from './UserProtect';
import Login from '../pages/Login/Login';
import RoomTypeList from '../pages/RoomTypeList/RoomTypeList';
import BedDetailList from '../pages/BedDetailList/BedDetailList';
import StaffTypeList from '../pages/StaffTypeList/StaffTypeList';
import RevenueChart from '../pages/RevenueChart/RevenueChart';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            {/* <UserProtect> */}
                            <Home />
                            {/* </UserProtect> */}
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-phong"
                    element={
                        <DefaultLayout>
                            <UserProtect>
                                <RoomList />
                            </UserProtect>
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-khach-hang"
                    element={
                        <DefaultLayout>
                            <UserProtect>
                                <GuestList />
                            </UserProtect>
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-nhan-vien"
                    element={
                        <DefaultLayout>
                            <UserProtect>
                                <StaffList />
                            </UserProtect>
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/lich-su-dat-phong"
                    element={
                        <DefaultLayout>
                            <UserProtect>
                                <PaymentList />
                            </UserProtect>
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-loai-phong"
                    element={
                        <DefaultLayout>
                            <RoomTypeList /> 
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-chi-tiet-giuong"
                    element={
                        <DefaultLayout>
                            <BedDetailList /> 
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-loai-nhan-vien"
                    element={
                        <DefaultLayout>
                            <StaffTypeList /> 
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/revenue"
                    element={
                        <DefaultLayout>
                            <RevenueChart /> 
                        </DefaultLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
