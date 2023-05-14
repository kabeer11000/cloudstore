**Note:**
Parts of this documentation was generated using AI LLM, If there's an error feel free to open a pull request,
---
# Kabeer Cloudstore

Kabeer Cloudstore, also known as Cloudstore, is a powerful real-time database engine that can be used in web applications, mobile applications, and self-hosted environments. It provides similar functionality to Firebase Firestore, with real-time updates, scalability, and a flexible API for accessing data. However, Cloudstore includes additional features that make it stand out, such as a powerful database rules engine based on CSEL (Cloud Store Expression Language).

## Features

- **Real-time communication:** Cloudstore uses websockets to provide real-time updates to your application. This eliminates the need for additional API calls or page refreshes, making it ideal for building real-time applications such as chat applications and collaborative editing tools.
- **Database rules engine:** The CSEL-based database rules engine allows you to define custom validation and logic rules that are executed on the server-side. This ensures data consistency and business rule enforcement without relying on client-side application code. Compared to Firestore's security rules, Cloudstore's database rules engine provides more fine-grained control over data validation and business rules enforcement.
- **Scalability:** Cloudstore is highly scalable and can handle millions of concurrent connections. It supports automatic scaling, so you can easily scale your database as your application grows.
- **Flexibility:** Cloudstore can be self-hosted, providing flexibility in deployment options. It provides a RESTful API that can be accessed using standard HTTP methods and supports JSON data format.

## Getting Started

To get started with Cloudstore, you can download the self-hosted version. The self-hosted version includes easy-to-use installation scripts that can be used to set up your database in minutes.

Once you have your database set up, you can start storing and retrieving data in real-time. You can also define custom validation and logic rules using the CSEL-based database rules engine to ensure data consistency and enforce business rules.

## Contributing 

Please check out the <a href="./CONTRIBUTING.md">CONTRIBUTING.md</a> file, code architecture, and source is documented.

## Conclusion

Kabeer Cloudstore is a powerful and flexible real-time database engine that can be used as an alternative to Firebase Firestore. Its real-time communication capabilities and CSEL-based database rules engine make it an ideal choice for building real-time applications that require data consistency and business rule enforcement. Whether you choose the self-hosted version, Cloudstore provides an easy-to-use and scalable solution for your real-time database needs.
