import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPageNavLink } from "~/src/entities/page-links-nav/model/page-links-nav.interface";

interface InitialState {
  pageNavLinks: IPageNavLink[];

  [key: string]: any;
}

const initialState: InitialState = {
  pageNavLinks: [],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNav: (
      state: InitialState,
      action: PayloadAction<Partial<InitialState>>,
    ) => {
      try {
        let key: keyof InitialState;
        const valueArg = action.payload;
        for (key in valueArg) {
          if (
            Object.hasOwnProperty.call(valueArg, key) &&
            Object.hasOwnProperty.call(state, key)
          ) {
            state[key] = valueArg[key];
          }
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    addPageLink: (state, action: PayloadAction<IPageNavLink>) => {
      state.pageNavLinks.push(action.payload);
    },
    deletePageLink: (state, action: PayloadAction<string>) => {
      state.pageNavLinks = state.pageNavLinks.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { setNav, addPageLink, deletePageLink } = navSlice.actions;
export const selectNav = (state: { nav: InitialState }) => state.nav;
export default navSlice.reducer;
