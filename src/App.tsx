import { gql, useQuery } from '@apollo/client';

import PostList from './components/PostList';
import './App.css';

const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading&hellip;</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div className='App'>
      <h1>GraphQL Blog</h1>
      <PostList posts={data.posts} />
    </div>
  );
}

export default App;
