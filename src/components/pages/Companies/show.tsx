import React, { VFC, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
interface Company {
  id: number;
  name: string;
  subdomain: string;
}

const GET_COMPANIES = gql`
{
  company(id: 1) {
    id
    name
    subdomain
  }
}`;

export const CompaniesShow: VFC = () => {
  const END_POINT = "http://localhost:3000/graphql";
  const client = new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache()
  });
  const [company, setCompany] = useState<Company>();

  const doRequest = async () => {
    const res: any = await client.query({ query: GET_COMPANIES });
    const data = res.data;
    setCompany(data.company);
  };

  return (
    <>
      <h1>Company {company && company.name}</h1>
      <button className="py-2 px-4 bg-blue-500 rounded text-white" onClick={doRequest}>Do Request</button>
      {company &&
        <h2 key={company.subdomain}>{company.id}: {company.name}</h2>
      }
    </>
  );
};

