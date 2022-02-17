import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import os from 'os';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                        __html: `
                        <!-- Pod: ${os.hostname()} -->
                        <!-- Generated at: ${new Date()} -->
                        `,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}