import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://ca-central-1.cdn.hygraph.com/content/cm01t02bt08e508vyqglqhybf/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      // preset: "client",
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        },
        "typescript",
        "typescript-operations"
      ],
    }
  }
};

export default config;

