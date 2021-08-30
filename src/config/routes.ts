import { CompaniesIndex, CompaniesShow } from "~/components/pages";

export const routes = [
  {
    path: "/",
    component: CompaniesIndex
  },
  {
    path: "/companies",
    component: CompaniesIndex
  },
  {
    path: "/companies/:id",
    component: CompaniesShow
  },
];