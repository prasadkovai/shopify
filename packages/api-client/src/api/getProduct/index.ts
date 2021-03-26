/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CustomQuery } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getProduct(
  context,
  params,
  customQuery?: CustomQuery
) {
  if (params.slug) {
    const getProductByHandleQuery = context.client.graphQLClient.query(
      (root) => {
        root.add(
          'productByHandle',
          { args: { handle: params.slug } },
          (productByHandle) => {
            // get product basic information
            productByHandle.add('id');
            productByHandle.add('title');
            productByHandle.add('description');
            productByHandle.add('descriptionHtml');
            productByHandle.add('handle');
            productByHandle.add('tags');
            productByHandle.add('availableForSale');
            productByHandle.add('totalInventory');
            productByHandle.add('vendor');

            productByHandle.add('options', {}, (options) => {
              options.add('name');
              options.add('values');
            });

            productByHandle.addConnection(
              'images',
              { args: { first: 20 } },
              (image) => {
                image.add('id');
                image.add('altText');
                image.add('originalSrc');
                image.add('transformedSrc');
              }
            );

            productByHandle.addConnection(
              'variants',
              { args: { first: 20 } },
              (variants) => {
                variants.add('title');
                variants.add('price');
                variants.add('weight');
                variants.add('available');
                variants.add('sku');
                variants.add('compareAtPrice');

                variants.addField('image', { args: {} }, (image) => {
                  image.add('id');
                  image.add('altText');
                  image.add('originalSrc');
                  image.add('transformedSrc');
                });

                variants.addField('selectedOptions', {}, (selectedOptions) => {
                  selectedOptions.add('name');
                  selectedOptions.add('value');
                });

                variants.addField('product', {}, (product) => {
                  product.add('id');
                  product.add('title');
                  product.add('availableForSale');
                  product.add('handle');
                  product.add('description');
                  product.add('descriptionHtml');
                  product.addConnection(
                    'images',
                    { args: { first: 20 } },
                    (images) => {
                      images.add('id');
                      images.add('altText');
                      images.add('originalSrc');
                      images.add('transformedSrc');
                    }
                  );
                  product.add('productType');
                  product.addField('options', {}, (options) => {
                    options.add('name');
                    options.add('values');
                  });
                });
              }
            );
          }
        );
      }
    );
    return context.client.graphQLClient
      .send(getProductByHandleQuery)
      .then(({ model, product }) => {
        if (model) {
          return model.productByHandle;
        }
      });

    // return await context.client.product.fetch(params.id).then((products) => {
    // return products;
    // });
  } else if (params.sort) {
    return await context.client.product
      .fetchQuery({ first: 20, sortKey: 'TITLE', reverse: false })
      .then((products) => {
        return products;
      });
  } else {
    // Use the built-in function
    return await context.client.product.fetchAll().then((products) => {
      return products;
    });
  }
}
