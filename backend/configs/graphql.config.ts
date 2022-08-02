import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
export const graphqlConfig: ApolloDriverConfig = {
  driver: ApolloDriver,
  debug: true,
  introspection: true,
  playground: true,
  typePaths: ['./**/*.graphql'],
  context: ({ req, res }) => ({ req, res }),
  cors: {
    origin: ['http://localhost:8080'],
    credentials: true,
  },
  csrfPrevention: true,
};
