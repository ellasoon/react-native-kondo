import React from 'react';

import Sidebar from './Sidebar';

const Layout = props => (
  <div className="layout">
    <Sidebar />
    {/* eslint-disable-next-line react/prop-types */}
    <div className="content">{props.children}</div>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Fira+Code');

      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      * {
        font-family: 'Fira Code', monospace;
      }

      body {
        line-height: 1.6;
        background: rgb(254, 253, 236);
        margin: 0;
      }

      li {
        list-style: none;
        margin-bottom: 0.5rem;
      }

      ul {
        padding: 0;
      }

      a {
        color: rgb(0, 0, 0);
      }

      pre {
        margin: 0;
      }

      code {
        font-weight: 700;
      }

      .layout {
        display: flex;
      }

      .content {
        max-width: 800px;
        width: 100%;
        padding: 1.5rem;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Layout;
