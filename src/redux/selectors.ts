import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const selectSelf = (state: RootState) => state;

export const selectPeople = createDraftSafeSelector(
  selectSelf,
  (state) => state.people
);
