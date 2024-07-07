import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@/types/user";

interface AuthState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  profile: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile | null>) => {
      state.profile = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setProfile, setAuth } = authSlice.actions;

export default authSlice.reducer;
