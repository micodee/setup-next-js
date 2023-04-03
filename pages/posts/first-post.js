import Head from "next/head";
import Link from "next/link";
import Script from "next/script"
import Image from "next/image"
import ComponentLayout from "../../components/Layout";

export default function FirstPost() {
  return (
    <ComponentLayout>
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
        <Link href="/">Back To Home</Link>
      </h2>
      <Image 
        src='/images/profile.jpg'
        height={144}
        width={144}
        alt='my profile'
      />
    </ComponentLayout>
  );
}
