import { IPost } from '../types';

function PostList({ posts }: { posts: IPost[] }) {
  return (
    <section>
      {posts.map((post: IPost) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
        </article>
      ))}
    </section>
  );
}

export default PostList;
