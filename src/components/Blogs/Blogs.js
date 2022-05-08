import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="lg:w-[60%] w-[90%]">
        <h1 className="text-2xl font-semibold underline">Difference between javascript and nodejs?</h1>
        <ul className="list-inside list-disc font-semibold">
          <li>
            Javascript is a scripting programming language on the other hand
            NodeJS is a Javascript runtime environment.
          </li>
          <li>
            Javascript is used in frontend on the other hand NodeJS is used in
            backend.
          </li>
          <li>
            Javascript can only be run in the web browsers but we can execute
            javascript outside browser using NodeJS
          </li>
          <li>
            Javascript can perform DOM manipulation but NodeJS can not perform
            DOM manipulation.
          </li>
          <li>
            Some of the javascript frameworks are RamdaJS,TypedJS etc and some
            of the NodeJS modules are Lodash,express etc.
          </li>
        </ul>
      </div>
      <div className="lg:w-[60%] w-[90%]">
        <h1 className="text-2xl font-semibold underline">When should you use nodejs and when should you use mongodb?</h1>
        <p className="font-semibold">
          Nodejs is a Javascript engine that can be used to create any app.
          Outside of the web browser, it runs Javascript code. It is most
          typically used to create web servers, but it may also be used for a
          wide range of other sorts of programs.
          <br />
          MongoDB is a database engine. MongoDB is used by code within an
          application or server to save, query, and update data in a database.
          Many web servers developed with Node.js will store data in MongoDB.
          MongoDB provides an API module that runs within a Nodejs application
          and allows us to build databases, query, update, and remove data from
          the MongoDB database programmatically. MongoDB also includes API
          libraries for Python, Java, and other computer languages.
        </p>
      </div>
      <div className="lg:w-[60%] w-[90%]">
        <h1 className="text-2xl font-semibold underline">Differences between sql and nosql databases?</h1>
        <ul className="list-inside list-disc font-semibold">
          <li>
            SQL databases are relational but NoSQL databases are non-relational.
          </li>
          <li>
            SQL databases have a specified schema and employ structured query
            language. For unstructured data, NoSQL databases use dynamic
            schemas.
          </li>
          <li>
            SQL databases scale vertically, but NoSQL databases scale
            horizontally.
          </li>
          <li>
            NoSQL databases are document, key-value, graph, or wide-column
            stores, whereas SQL databases are table based.
          </li>
          <li>
            SQL databases are better for multi-row transactions, but NoSQL
            databases are better for unstructured data, such as documents or
            JSON.
          </li>
        </ul>
      </div>
      <div className="lg:w-[60%] w-[90%]">
        <h1 className="text-2xl font-semibold underline">What is the purpose of jwt and how does it work?</h1>
        <p className="font-semibold">
          JSON Web Token is a standard for creating application access tokens.
          It works like this: the server produces and delivers a token to the
          client that verifies the user's identity. For each future request, the
          client will transmit the token back to the server, letting the server
          know that the request is coming from a certain identity. This design
          works well in current Web Apps, where we conduct API queries to a REST
          or GraphQL API once the user has been authenticated.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
