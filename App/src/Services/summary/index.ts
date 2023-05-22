import { api } from "../api";

export const summaryApi = api.injectEndpoints({
  endpoints: (build) => ({
    summary: build.query<SummaryResponse, void>({
      query: (_) => ({ url: `/api/v1/summary`, method: "GET" }),
      providesTags: ["Summary"],
    }),
  }),
  overrideExisting: false,
});

export const { useSummaryQuery } = summaryApi;

export type Summary = {
  maxStreakSavings: number;
  currentStreakSavings: number;
  maxStreakDays: number;
  currentStreakDays: number;
  totalSavings: number;
};

export type SummaryResponse = {
  data: Summary;
  message: string;
};
