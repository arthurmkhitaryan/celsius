import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  productCount: number;
}

// Load cart state from localStorage or use initial state
const loadCartState = (): CartState => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return { items: [], productCount: 0 };
};

const saveCartState = (state: CartState) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: string | number;
        name: string;
        price: number;
        quantity: number;
        image: string;
      }>,
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity; // Increment quantity if item exists
      } else {
        state.items.push(action.payload); // Add new item to the cart
      }

      state.productCount += action.payload.quantity; // Update product count

      // Save updated state to localStorage
      saveCartState(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.productCount += quantityDifference; // Update product count
      }

      saveCartState(state); // Save updated state to localStorage
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.productCount -= item.quantity; // Update product count
        state.items.splice(itemIndex, 1); // Remove the item from the cart
      }

      // Save updated state to localStorage
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.productCount = 0;

      // Save updated state to localStorage
      saveCartState(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
