import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '8uxl3q5t',
  dataset: 'production',
  apiVersion: '2022-07-27',
  useCdn: false,
});

export default client;
