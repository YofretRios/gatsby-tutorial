import React from 'react';
import { useQuery } from 'react-query';
import Layout from '../components/shared/Layout';
import AllRecipes from '../components/shared/AllRecipes';
import SEO from '../components/shared/SEO';

const Recepies = () => {
  const { isFetching, data } = useQuery('breeds', async () => {
    const breeds = await fetch('https://dog.ceo/api/breeds/list/all');

    return breeds.json();
  });

  return (
    <Layout>
      <SEO title="Recepies" />
      <main className="page">
        <h1>All Recepies</h1>
        {isFetching && <h1>Loading list...</h1>}
        {data && JSON.stringify(data)}

        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recepies;
