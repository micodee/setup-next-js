# Prepare

- Create a Next.js App

```bash
npx create-next-app@latest . --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

- Start Next.js

```bash
npm run dev
```

- Open pages/index.js with your text editor.

```bash
Find the text that says “Welcome to” under the <h1> tag and change it to “Learn”.
```

## Add Pages

- Create pages/posts/first-post.js

  > first-post.js

  ```bash
  export default function FirstPost() {
      return <h1>First Post</h1>;
  }
  ```

  server is running and visit http://localhost:3000/posts/first-post

## Link Component

Links are the same as html <a> tags

- First, open pages/index.js, and import the Link component from next/link

  > pages/index.js

  ```bash
  import Link from 'next/link';
  ```

  Then find the h1 tag that looks like this:

  ```bash
  <h1 className="title">
      Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>
  ```

  And change it to:

  ```bash
  <h1 className="title">
      Read <Link href="/posts/first-post">this page!</Link>
  </h1>
  ```

  Next, open pages/posts/first-post.js and replace its content with the following:

  ```bash
  import Link from 'next/link';

  export default function FirstPost() {
  return (
      <>
      <h1>First Post</h1>
      <h2>
          <Link href="/">Back to home</Link>
      </h2>
      </>
  );
  }
  ```
