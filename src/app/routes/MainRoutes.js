import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import GuestList from '../pages/GuestList';
import Home from '../pages/Home';
import RoomList from '../pages/RoomList';
import StaffList from '../pages/StaffList';
import PaymentList from '../pages/PaymentList/PaymentList';
import RoomTypeList from '../pages/RoomTypeList/RoomTypeList';

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-phong"
                    element={
                        <DefaultLayout>
                            <RoomList />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-khach-hang"
                    element={
                        <DefaultLayout>
                            <GuestList />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/danh-sach-nhan-vien"
                    element={
                        <DefaultLayout>
                            <StaffList />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/lich-su-dat-phong"
                    element={
                        <DefaultLayout>
                            <PaymentList />
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

            </Routes>
        </BrowserRouter>
    );
}
