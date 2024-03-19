import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layout';
import { HomePage } from './pages/home';
import { Cart } from './pages/cart';

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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
