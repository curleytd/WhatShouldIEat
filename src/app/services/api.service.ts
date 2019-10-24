/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  rating?: number | null;
  price?: string | null;
  category?: string | null;
  url?: string | null;
  imageUrl?: string | null;
  zip?: number | null;
  address?: string | null;
};

export type DeleteRestaurantInput = {
  id?: string | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelStringFilterInput | null;
  name?: ModelStringFilterInput | null;
  rating?: ModelFloatFilterInput | null;
  price?: ModelStringFilterInput | null;
  category?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  imageUrl?: ModelStringFilterInput | null;
  zip?: ModelIntFilterInput | null;
  address?: ModelStringFilterInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    rating: number;
    price: string;
    category: string;
    url: string;
    imageUrl: string;
    zip: number;
    address: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  rating: number;
  price: string;
  category: string;
  url: string;
  imageUrl: string;
  zip: number;
  address: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRestaurant(
    input: CreateRestaurantInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
        createRestaurant(input: $input) {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
        updateRestaurant(input: $input) {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
        deleteRestaurant(input: $input) {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            rating
            price
            category
            url
            imageUrl
            zip
            address
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateRestaurantListener: Observable<
    OnCreateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`
    )
  ) as Observable<OnCreateRestaurantSubscription>;

  OnUpdateRestaurantListener: Observable<
    OnUpdateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`
    )
  ) as Observable<OnUpdateRestaurantSubscription>;

  OnDeleteRestaurantListener: Observable<
    OnDeleteRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          rating
          price
          category
          url
          imageUrl
          zip
          address
        }
      }`
    )
  ) as Observable<OnDeleteRestaurantSubscription>;
}
