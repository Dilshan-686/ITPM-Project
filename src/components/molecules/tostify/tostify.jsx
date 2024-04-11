import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';

const Tostify = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    );
};
export default Tostify;
