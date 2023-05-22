import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: AuthState, { payload }: PayloadAction<any>) => ({
      token: payload.token,
    }),
    logout: (state: AuthState) => ({
      token: null,
    }),
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const authSliceReducer = authSlice.reducer;
