export const setCartItems = (cartItems) => {
    localStorage.setItem('cart-items', JSON.stringify(cartItems));
};

export const getCartItems = () => {
    const existingItems = localStorage.getItem('cart-items');
    return existingItems ? JSON.parse(existingItems) : [];
};
