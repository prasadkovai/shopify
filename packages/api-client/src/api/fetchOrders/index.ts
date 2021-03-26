/* eslint-disable @typescript-eslint/no-unused-vars */
import { CustomQuery } from '@vue-storefront/core';
import { ordersQuery as query } from './../customerMutations/buildQueries';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function fetchOrders(context, params, customQuery?: CustomQuery) {
// send user data to authenticate, return token if valid
  const orders = await context.client.graphQLClient.send(query(10, params, context)).then(({model}) => {
    return model;
  });

  return orders;
}
