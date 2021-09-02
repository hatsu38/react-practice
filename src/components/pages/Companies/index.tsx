import React, { VFC, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

import {
  Link,
} from "react-router-dom";

interface Company {
  id: number;
  name: string;
  subdomain: string;
}

const GET_COMPANIES = gql`
{
  companies {
    id
    name
    subdomain
  }
}`;

export const CompaniesIndex: VFC = () => {
  const END_POINT = "http://localhost:3000/graphql";
  const client = new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache()
  });
  const [companies, setCompanies] = useState<Company[]>([]);

  const doRequest = async () => {
    const res = await client.query({ query: GET_COMPANIES });
    const data = res.data;
    console.log("data", data);
    setCompanies(data.companies);
  };

  return (
    <>
      <h1>Companies</h1>
      <button className="py-2 px-4 bg-blue-500 rounded text-white" onClick={doRequest}>Do Request</button>
      {!!companies.length && companies.map(company => (
        <Link to={`companies/${company.id}`} key={company.subdomain}>
          <h2>{company.name}</h2>
        </Link>
      ))
      }
    </>
  );
};

