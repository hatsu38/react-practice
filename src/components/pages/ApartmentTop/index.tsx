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
  companies {
    id
    name
    subdomain
  }
}`;

export const ApartmentTop: VFC = () => {
  const END_POINT = "http://localhost:3000/graphql"
  const client = new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache()
  });
  const [companies, setCompanies] = useState<Company[]>([]);

  const doRequest = async () => {
    const res: any = await client.query({ query: GET_COMPANIES })
    const data = res.data;
    setCompanies(data.companies)
  }

  return (
    <>
      <button className="py-2 px-4 bg-blue-300 rounded text-white" onClick={doRequest}>Do Request</button>

      {!!companies.length && companies.map(company => (
        <h2 key={company.subdomain}>{company.name}</h2>
      ))
      }
    </>
  )
}

