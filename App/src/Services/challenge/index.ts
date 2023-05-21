import { api } from "../api";

export const challengeApi = api.injectEndpoints({
  endpoints: (build) => ({
    challenge: build.mutation<ChallengeResponse, void>({
      query: (_) => ({ url: `/api/v1/challenge`, method: "POST" }),
    }),
  }),
  overrideExisting: false,
});

export const { useChallengeMutation } = challengeApi;

export interface JackpotRollValuesDTO {
  id: number;
  value: number;
}

export interface ChallengeResponse {
  data: {
    id: number;
    createdAt: string;
    jackpotRollValuesDTOList: JackpotRollValuesDTO[];
  };
  message: string;
}
