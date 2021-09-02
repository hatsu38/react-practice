import { CompaniesIndex, CompaniesShow, CompaniesNew } from "~/components/pages";

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
    path: "/companies/new",
    component: CompaniesNew
  },
  {
    path: "/companies/:id",
    component: CompaniesShow
  },
];