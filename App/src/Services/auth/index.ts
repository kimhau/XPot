import { api } from "../api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, void>({
      query: (_) => ({ url: `/api/v1/login`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
});


export const { useLoginMutation } = userApi;

export type SummaryResponseDTO {
  maxStreakSavings: number;
  currentStreakSavings: number;
  maxStreakDays: number;
  currentStreakDays: number;
  totalSavings: number;
}

export type usersDTO = {
  id: number;
  name: string;
  hasRolledToday: boolean;
  summaryResponseDTO: SummaryResponseDTO;
}

export type AuthResponse = {
  data: {
    usersDTO: usersDTO;
    token: string;
  },
  message: string;
}