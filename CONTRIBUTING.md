<b>Note:</b>
Parts of this documentation was generated using AI LLM, If there's an error feel free to open a pull request,
---
# Kabeer Cloudstore Source Code Structure

The Kabeer Cloudstore source code is organized into two main components:

- `source/backend`: This component contains the code for the backend API, which handles communication with the database and connections from Cloudstore clients, such as from a mobile app or a website. It is built using Node.js and Express, and all code is written in TypeScript.
- `source/client`: This component contains the source code for the Cloudstore clients. Currently, only the JavaScript/Node client has been implemented, but other clients will be added soon. All code is written in TypeScript.

In addition to these two main components, there is one other folder:

- `example`: This folder contains an example website that uses the Cloudstore system.

Here's a more detailed breakdown of each component:

## source/backend

The `source/backend` component is organized as follows:

- `src`: Contains the source code for the backend API, written in TypeScript.
    - `auth`: Contains the code for handling authentication and authorization.
    - `classes`: Contains the code for the data classes used by the backend API to interact with the database.
    - `controllers`: Contains the controller functions for handling incoming requests and responses.
    - `db-internals`: Code to handle upstream communication to MongoDB Instance.
    - `rules`: CSEL rule engine internals.
- `bundled`: Contains the transpiled JavaScript code for the backend API, Ready for deployment
- `documentation`: Contains the documentation for the backend API.

## source/client

The `source/client` component contains the code for the Cloudstore clients. Currently, only the JavaScript/Node client has been implemented, but other clients will be added soon. The folder is organized as follows:
- `build`: Contains the transpiled JavaScript code for the backend API, Ready for deployment
- `documentation`: Contains the documentation for the backend API.
- `src`: Contains the source code for the client, written in TypeScript.

## example

The `example` folder contains an example website that uses the Cloudstore system. This website demonstrates how to use the Cloudstore client to interact with the database, and how to implement custom validation and logic rules using CSEL. Note that this folder does not contain any examples of using the client in different programming languages, but those examples will be added soon.
