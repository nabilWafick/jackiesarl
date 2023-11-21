import { signal } from "@preact/signals-react";
import Employes from "../models/employes/employes.model";

export const authenticatedEmployee = signal<Employes | undefined>(undefined);
