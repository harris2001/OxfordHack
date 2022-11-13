import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthSlice = Partial<JwtTokens>

const initialState : AuthSlice = {
  accessToken: undefined,
  refreshToken: undefined
}

export interface JwtTokens {
    accessToken: string
    refreshToken: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setTokens: (state: AuthSlice, action: PayloadAction<AuthSlice>) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    deleteTokens: (state: AuthSlice) => {
      state.accessToken = undefined
      state.refreshToken = undefined
    }
  },
})

export const { setTokens, deleteTokens } = authSlice.actions

export default authSlice.reducer