import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    theme: 'light' | 'dark';
    isSidebarOpen: boolean;
}

const initialState: GlobalState = {
    theme: 'dark',
    isSidebarOpen: false,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload;
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { setTheme, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
