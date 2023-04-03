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

First, open pages/index.js, and import the Link component from next/link

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

## Assets

- Create folder images in public for image

  add image in /public/images/profile.jpg

## Metadata

- Adding head to first-post.js

  > /pages/posts/first-post.js

  ```bash
  import Head from 'next/head';
  ```

  Then, update the exported FirstPost component to include the Head component. For now, we‘ll add just the title tag:

  ```bash
  export default function FirstPost() {
  return (
  <>
      <Head>
          <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
          <Link href="/">← Back to home</Link>
      </h2>
  </>
  );
  }
  ```

## Third-Party Javascript

- Adding head to first-post.js

  > /pages/posts/first-post.js

  ```bash
  import Script from 'next/script';
  ```

  Now, update the FirstPost component to include the Script component:

  ```bash
  export default function FirstPost() {
  return (
      <>
      <Head>
          <title>First Post</title>
      </Head>
      <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
          }
      />
      <h1>First Post</h1>
      <h2>
          <Link href="/">← Back to home</Link>
      </h2>
      </>
  );
  }
  ```

## Layout Component

- Create a file called components/layout.module.css with the following content:

  > components/layout.module.css

  ```bash
  .container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
  ```

  create a file components/Layout.js

  ```bash
  import styles from './layout.module.css';

  export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
  }
  ```
