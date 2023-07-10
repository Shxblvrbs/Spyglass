import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Goals"],
  endpoints: builder => ({
    getInfo: builder.query({
      query: () => "/",
    }),
    getGoals: builder.query({
      query: userId => `/goals/${userId}`,
      providesTags: ["Goals"],
    }),
    //please add the api for adding goal
    addGoal: builder.mutation({
      query: goal => ({
        url: "goals/new",
        method: "POST",
        body: goal,
      }),
      invalidatesTags: ["Goals"],
    }),
    login: builder.mutation({
      query: user => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: user => ({
        url: "/",
        method: "POST",
        body: user,
      }),
    }),
    updateGoal: builder.mutation({
      query: body => ({
        url: `/goals/update/${body?.id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Goals"],
    }),
    deleteGoal: builder.mutation({
      query: goalId => ({
        url: `/goals/delete/${goalId}`,
        method: "DELETE",
        body: goalId,
      }),
      invalidatesTags: ["Goals"],
    }),
    goalDetails: builder.query({
      query: goalId => `/goals/detail/${goalId}`,
      providesTags: ["Goals"],
    }),
  }),
});

export const {
  useGetInfoQuery, //GET (Google)
  useAddGoalMutation, //POST
  useDeleteGoalMutation, //DELETE
  useGetGoalsQuery, //GET
  useUpdateGoalMutation, //PUT
  useLoginMutation,
  useRegisterMutation,
  useGoalDetailsQuery,
} = apiSlice;

export default apiSlice;
