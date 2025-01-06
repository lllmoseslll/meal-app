import { configureStore } from "@reduxjs/toolkit";
import  favoritesRudecer  from "./favorites";

export const store = configureStore({
    reducer: {
      favoriteMeals: favoritesRudecer
  },
});
