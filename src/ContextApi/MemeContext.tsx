import { createContext } from "react"
import { IMeme } from "../@types/interfaces";

export const MemeContext = createContext<IMeme[] | null>(null);