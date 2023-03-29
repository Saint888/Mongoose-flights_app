import React from "react";

function DefaultLayout(props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/styles.css" />
            </head>
            <body>
                <nav>
                    {/* <a href="/flights/new"><button>ADD FLIGHT</button></a> */}
                    <a href="/flights"><button>ALL FLIGHTS</button></a>
                </nav>
                <div>
                    {/* <h1>DEFAULT LAYOUT</h1> */}
                    <div>{props.children}</div>
                </div>
            </body>
        </html>
    )
}

export default DefaultLayout