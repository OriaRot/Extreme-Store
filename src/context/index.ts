import { createContext } from "react";
import { StateInterface } from "../globalTypes";
export const productsCtx = createContext<StateInterface | null>(null);
