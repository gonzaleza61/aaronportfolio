import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I'm Aaron, a software developer passionate about building intuitive and efficient applications. With experience in React, Flutter, and JavaScript, I focus on crafting responsive and user-centered interfaces. I enjoy problem-solving, learning new technologies, and bringing ideas to life through code.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
