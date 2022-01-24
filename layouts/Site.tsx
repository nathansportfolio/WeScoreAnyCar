import Head from "next/head";
import Script from "next/script";
import NavigationBar from "../components/NavigationBar";

interface SiteProps {
  content: React.ReactNode;
}

const Site: React.FC<SiteProps> = ({ content }) => {
  return (
    <div className={`font-content text-skin-primary overflow-hidden `}>
      <Head>
        <title>WeScoreAnyCar</title>
        <meta name="description" content="//TODO: SEO" />

        <script
          async
          type="text/javascript"
          src="https://api.getcandid.com/scripts/widget.js"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        />
      </Head>
      <Script
        id="awsrum"
        src="/js/aws/awsrum.js"
        async
        strategy="beforeInteractive"
        onError={(e: unknown) => {
          console.error("Script failed to load", e);
        }}
      ></Script>
      <NavigationBar />
      <div style={{}}>
      <main>{content}</main></div>
    </div>
  );
};

export default Site;
