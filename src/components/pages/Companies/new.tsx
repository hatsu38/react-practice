import React, { VFC, useState, ChangeEvent } from "react";
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

interface Params {
  name: string;
  subdomain: string;
}

const CREATE_COMPANIES = gql`
mutation createCompany($input: CreateInput!) {
  createCompany(input: $input) {
    company {
      id
      name
      subdomain
    }
  }
}`;

export const CompaniesNew: VFC = () => {
  const END_POINT = "http://localhost:3000/graphql";
  const client = new ApolloClient({
    uri: END_POINT,
    cache: new InMemoryCache()
  });
  const [company, setCompany] = useState<Company>();

  const [params, setParams] = useState<Params>({name: "", subdomain: ""});

  const doRequest = async () => {
    const res = await client.mutate(
      {
        mutation: CREATE_COMPANIES,
        variables: { input: params }
      }
    );
    const data = res.data;
    console.log("data", data);
    setCompany(data.createCompany.company);
  };

  const onNameChange = (name: string) => {
    console.log("name", name);
    setParams({ ...params, name });
  };

  const onSubdomainChange = (subdomain: string) => {
    console.log("subdomain", subdomain);
    setParams({ ...params, subdomain });
  };
  console.log("{ input: params }", { input: params });
  return (
    <>
      <h1>New company</h1>
      <form>
        <div>
          <label>会社名</label>
          <input name="name" type="text" className="border py-1 px-2" defaultValue={params?.name} onChange={(e: ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)} />
        </div>
        <div>
          <label>サブドメイン</label>
          <input name="subdomain" type="text" className="border py-1 px-2" defaultValue={params?.subdomain} onChange={(e: ChangeEvent<HTMLInputElement>) => onSubdomainChange(e.target.value)} />
        </div>
      </form>


      <button className="py-2 px-4 bg-blue-500 rounded text-white" onClick={doRequest}>Do Request</button>
      {company &&
        <h2 key={company.subdomain}>{company.id}: {company.name}</h2>
      }
    </>
  );
};

