import * as prismic from '@prismicio/client';

const repoName = 'portfolio-nivaldoandrade';
const endpoint = prismic.getEndpoint(repoName);
export const client = prismic.createClient(endpoint, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
