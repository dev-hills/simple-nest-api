# API Deployment (DevOps)

## Overview

This project is a simple backend API built and deployed as part of a DevOps learning exercise.

It demonstrates building a minimal backend service and deploying it on a Linux VPS using Nginx as a reverse proxy, secured with HTTPS using Let's Encrypt SSL. The application runs on a private port and is exposed publicly through Nginx.

It demonstrates:
- Building a minimal backend service
- Running it on a Linux VPS
- Configuring Nginx as a reverse proxy
- Securing the service with HTTPS (Let’s Encrypt SSL)
- Keeping the service alive using a process manager

---

## Tech Stack

- Node.js (NestJS)
- Nginx (Reverse Proxy)
- PM2 (Process Manager)
- Ubuntu Linux Server
- Let's Encrypt (SSL Certificate)
- UFW Firewall


## Live API

Base URL:

```
https://hills-hng-stage1.duckdns.org
```


## Request

### Endpoint

```
GET /
```


##  Response

###  Success (200 OK)

```json
{
  "message": "API is running"
}
```

<br>

```
GET /health
```


##  Response

###  Success (200 OK)

```json
{
  "message": "healthy"
}
```
<br>

```
GET /me
```


##  Response

###  Success (200 OK)

```json
{
    "name": "Hilary Emujede",
    "email": "hilaryemujede48@gmail.com",
    "github": "https://github.com/dev-hills"
}
```

---

## Performance

* Optimized to respond under 500ms (excluding external API latency)

---

## Running Locally

### 1. Clone the repo

```
git clone https://github.com/dev-hills/simple-nest-api.git
cd simple-nest-api
```

### 2. Install dependencies

```
npm install
```

### 3. Start the server

```
npm run start:dev
```

Server runs on:

```
http://localhost:3000
```

---

##  Deployment Architecture

```
Client Request
     ↓
HTTPS (SSL via Let's Encrypt)
     ↓
Nginx Reverse Proxy
     ↓
Node.js Application (Port 3000)
```


---

##  Author

**Name: Hilary Emujede**

**Email: hilaryemujede48@gmail.com**


