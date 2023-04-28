import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "actions",
  initialState: {
    value: [
      {
        birth_year: "",
        created: "",
        edited: "",
        eye_color: "",
        films: [""],
        gender: "",
        hair_color: "",
        height: "",
        homeworld: "",
        mass: "",
        name: "",
        skin_color: "",
        species: "",
        starships: [""],
        url: "",
        vehicles: [""],
      },
    ],
  },
  reducers: {
    people: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    search: (state, action) => {
      state.value = [state.value, ...action.payload];
    },
  },
});

export const { people: peopleLoadDataAction, search: searchLoadDataAction } =
  peopleSlice.actions;

export default peopleSlice.reducer;
