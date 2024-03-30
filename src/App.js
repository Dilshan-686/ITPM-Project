import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layout';
import { HomePage } from './pages/home';
import { Cart } from './pages/cart';
import { PaymentResult } from './pages/paymentResult';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            <HomeLayout>
                                <HomePage />
                            </HomeLayout>
                        }
                        path="/"
                    />
                    <Route
                        element={
                            <HomeLayout>
                                <Cart />
                            </HomeLayout>
                        }
                        path="/cart"
                    />
                    <Route
                        element={
                            <HomeLayout>
                                <PaymentResult />
                            </HomeLayout>
                        }
                        path="cart/checkout/success"
                    />
                    <Route
                        element={
                            <HomeLayout>
                                <PaymentResult />
                            </HomeLayout>
                        }
                        path="cart/checkout/unsuccess"
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
