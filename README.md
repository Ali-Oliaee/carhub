# CarHub 🚗

A full-stack car management platform built with modern technologies, featuring real-time chat, comprehensive API documentation, and cross-platform mobile support.

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Mobile App Setup](#mobile-app-setup)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Tech Stack

### Backend

- **Framework**: [NestJS](https://nestjs.com/)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Real-time**: Socket.IO
- **API Documentation**: Swagger
- **Architecture**: Clean Architecture

### Frontend

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **API Client**: [tRPC](https://trpc.io/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)

### Mobile

- **Framework**: [React Native](https://reactnative.dev/)
- **Platforms**: Android & iOS

## 🏗️ Architecture

This project follows **Clean Architecture** principles, ensuring:

- Separation of concerns
- Independent of frameworks
- Testable business logic
- Independent of UI
- Independent of database

```
CarHub/
├── BE/                 # Backend (NestJS)
│   ├── src/
│   │   ├── domain/     # Business logic & entities
│   │   ├── application/# Use cases
│   │   ├── infrastructure/# External interfaces
│   │   └── presentation/# Controllers & DTOs
│   └── ...
├── FE/                 # Frontend (Next.js)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   └── ...
└── mobile/             # React Native App
    ├── src/
    ├── android/
    └── ios/
```

## ✨ Features

- 🚗 Car management system
- 💬 Real-time chat with Socket.IO
- 🔐 Authentication & Authorization
- 📱 Cross-platform mobile app (Android & iOS)
- 🎯 Type-safe API with tRPC
- 📊 PostgreSQL database
- 📚 Swagger API documentation
- ⚡ Optimized data fetching with TanStack Query

## 📁 Project Structure

```
nest-prac/
├── BE/                 # Backend application
├── FE/                 # Frontend application
├── mobile/             # React Native mobile app
└── README.md           # Project documentation
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL** (v14 or higher)
- **Docker** (optional, for containerized setup)

For mobile development:

- **React Native CLI**
- **Xcode** (for iOS)
- **Android Studio** (for Android)

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd BE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `BE` directory (see [Environment Variables](#environment-variables))

4. Run database migrations:

   ```bash
   npm run migration:run
   ```

5. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend will be available at `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd FE
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the `FE` directory

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3001`

### Mobile App Setup

1. Navigate to the mobile directory:

   ```bash
   cd mobile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install iOS dependencies (macOS only):

   ```bash
   cd ios && pod install && cd ..
   ```

4. Start Metro bundler:

   ```bash
   npm start
   ```

5. Run on Android:

   ```bash
   npm run android
   ```

6. Run on iOS:
   ```bash
   npm run ios
   ```

## 📚 API Documentation

Swagger documentation is available at:

```
http://localhost:3000/api
```

This provides interactive API documentation where you can:

- View all available endpoints
- Test API requests
- See request/response schemas
- Understand authentication requirements

## 🔐 Environment Variables

### Backend (BE/.env)

```env
# Database
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=carhub

# Application
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

# Socket.IO
SOCKET_PORT=3001
SOCKET_CORS_ORIGIN=http://localhost:3001
```

### Frontend (FE/.env.local)

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001

# tRPC
NEXT_PUBLIC_TRPC_URL=http://localhost:3000/trpc
```

### Mobile (mobile/.env)

```env
API_URL=http://localhost:3000
SOCKET_URL=http://localhost:3001
```

## 📜 Scripts

### Backend

```bash
npm run start:dev      # Start development server
npm run start:prod     # Start production server
npm run build          # Build for production
npm run test           # Run tests
npm run test:e2e       # Run e2e tests
npm run migration:run  # Run database migrations
npm run migration:revert # Revert last migration
```

### Frontend

```bash
npm run dev            # Start development server
npm run build          # Build for production
npm run start          # Start production server
npm run lint           # Run linter
npm run test           # Run tests
```

### Mobile

```bash
npm start              # Start Metro bundler
npm run android        # Run Android app
npm run ios            # Run iOS app
npm run lint           # Run linter
npm run test           # Run tests
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Ali**
