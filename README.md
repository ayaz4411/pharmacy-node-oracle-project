# Pharmacy Management - Node.js + Oracle

This is a starter pharmacy management application designed so that CI/CD and deployment files can be added later.

## Modules

- Home
- Analytics
- Government Pricing
  - Analysis
  - Submissions
  - Data
  - Administration
- Master Data Manager
  - Mapping Sets
  - Advanced Membership
  - Products
  - Trading Partners
- Revenue Manager
  - Administration
  - Contracts
  - Submissions
  - Settlements

## 1. Prerequisites

Install:

- Node.js 20+
- npm
- Oracle Database
- Oracle client requirements for the Node.js `oracledb` driver, depending on the driver mode/platform

TOAD is a database client/tool used to connect to and manage Oracle. The Node.js application connects to the Oracle database itself; it does not connect "to TOAD."

## 2. Install

```bash
npm install
```

## 3. Configure Oracle

Copy `.env.example` to `.env` and set:

```text
DB_USER=pharmacy_user
DB_PASSWORD=your_password
DB_CONNECT_STRING=localhost:1521/FREEPDB1
PORT=3000
```

Use the host, port and service name/database service provided by your Oracle installation.

## 4. Start

```bash
npm start
```

Open:

```text
http://localhost:3000
```

Click **Test Oracle Connection** on the Home page.

## 5. Important database concept

TOAD is not the database. It is a GUI client that can connect to Oracle.

The architecture is:

Browser -> Node.js/Express -> Oracle Database

TOAD -> Oracle Database

The same Oracle username/password and Oracle connection details can generally be used in both TOAD and the Node.js application, assuming the account has the required permissions.

## 6. CI/CD later

Once the application structure is finalized, deployment can be added in stages:

1. Dockerfile
2. Docker image build
3. Push image to Docker registry
4. Kubernetes Deployment
5. Kubernetes Service
6. ConfigMap/Secret for environment settings
7. Jenkins CI pipeline
8. CD deployment
9. Blue/Green deployment
10. GitHub webhook integration
