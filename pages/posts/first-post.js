import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        {/**
             * strategy控制第三方脚本何时加载。值lazyOnload告诉 Next.js 在浏览器空闲时间延迟加载这个特定的脚本
            onLoad用于在脚本完成加载后立即运行任何 JavaScript 代码。在此示例中，我们向控制台记录一条消息，指出脚本已正确加载
             */}
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log(
              `script loaded correctly, window.FB has been populated`
            );
          }}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href={"/"}>Back to home</Link>
      </h2>
      {/* <img src="/images/profile.jpg" alt="Pet" /> */}
      <Image
        src={"/images/profile.jpg"}
        priority
        height={144}
        width={144}
        alt="pet"
      />
    </Layout>
  );
};

export default FirstPost;
