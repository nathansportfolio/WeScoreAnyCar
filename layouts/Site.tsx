import Head from "next/head";
import Script from "next/script";
import NavigationBar from "../components/NavigationBar";
import Favicon from '../components/Favicon'

interface SiteProps {
  content: React.ReactNode;
}

const Site: React.FC<SiteProps> = ({ content }) => {
  return (
    <div className={`font-content text-skin-primary overflow-hidden `}>
      <Head>
        <title>WeScoreAnyCar</title>
        <meta name="description" content="Score your vehicle, and find out how your car compares to others. It's like a credit score for your car." />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        />
             <Favicon />
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
        <main>{content}</main>
      </div>
    </div>
  );
};

export default Site;
