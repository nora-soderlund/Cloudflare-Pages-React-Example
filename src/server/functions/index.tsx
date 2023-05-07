import React from "react";
import { ReactDOMResponse } from "react-cloudflare-pages-wrapper";

export function onRequest(context) {
    return ReactDOMResponse(
        <html>
            <head>
                <meta charSet="utf-8"/>

                <title>Serversided React DOM rendered page</title>

                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link rel="stylesheet" href="/styles/global.min.css"/>
            </head>

            <body>
                <h1>Hello from React!</h1>

                <p>This page was rendered on the server using React DOM.</p>

                <script type="text/javascript" src="/scripts/alert.js"/>
            </body>
        </html>
    );
};
