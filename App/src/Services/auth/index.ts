import { api } from "../api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, AuthBody>({
      query: (body) => ({ url: `/api/v1/login`, method: "POST", body }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = userApi;

export type AuthBody = {
  username: string;
  password: string;
};

export type SummaryResponseDTO = {
  maxStreakSavings: number;
  currentStreakSavings: number;
  maxStreakDays: number;
  currentStreakDays: number;
  totalSavings: number;
};

export type usersDTO = {
  id: number;
  name: string;
  hasRolledToday: boolean;
  summaryResponseDTO: SummaryResponseDTO;
};

export type AuthResponse = {
  data: {
    usersDTO: usersDTO;
    token: string;
  };
  message: string;
};
