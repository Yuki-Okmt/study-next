import { Layout } from "../components/Layout";
import { Post } from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = ({ posts = undefined }) => {
  return (
    <Layout title="Blog">
      <ul className="m-18">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}

export default Blog;
