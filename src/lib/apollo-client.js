import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';

// Log the API URL for debugging
const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
console.log('WordPress API URL:', apiUrl);

if (!apiUrl) {
  console.error('NEXT_PUBLIC_WORDPRESS_API_URL is not set in environment variables');
}

// Create an HTTP link to the GraphQL endpoint
const httpLink = createHttpLink({
  uri: apiUrl,
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a middleware link to log requests
const loggerLink = new ApolloLink((operation, forward) => {
  console.log(`GraphQL Request: ${operation.operationName}`, operation.variables);
  return forward(operation).map((result) => {
    console.log(`GraphQL Response: ${operation.operationName}`, result);
    return result;
  });
});

// Create the Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([
    loggerLink,
    httpLink,
  ]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          schoolNotices: {
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
});

// Add error handling for the client
const originalQuery = client.query;
client.query = async (options) => {
  try {
    const result = await originalQuery.call(client, {
      ...options,
      fetchPolicy: 'network-only',
    });
    return result;
  } catch (error) {
    console.error('GraphQL Query Error:', {
      message: error.message,
      networkError: error.networkError,
      graphQLErrors: error.graphQLErrors,
      stack: error.stack,
    });
    throw error;
  }
};

export default client;
