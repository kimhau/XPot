import { api } from "../api";

export const challengeApi = api.injectEndpoints({
  endpoints: (build) => ({
    challenge: build.mutation<ChallengeResponse, ChallangeBody>({
      query: (body) => ({
        url: `/api/v1/challenge`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Summary"],
    }),
  }),
  overrideExisting: false,
});

export const { useChallengeMutation } = challengeApi;

export type ChallangeBody = {
  hasGaveUp: boolean;
  amountsToSave: number[];
};

export type JackpotRollValuesDTO = {
  id: number;
  value: number;
};

export type ChallengeResponse = {
  data: {
    id: number;
    createdAt: string;
    jackpotRollValuesDTOList: JackpotRollValuesDTO[];
  };
  message: string;
};
