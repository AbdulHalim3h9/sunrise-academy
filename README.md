# Sunrise Academy - School Website

A modern, responsive school website built with Next.js and WordPress as a headless CMS. This project provides an interactive platform for Sunrise Academy to showcase their institution, manage content, and engage with students and parents.

🌐 **Live Site:** [https://sunrise-academy.netlify.app/](https://sunrise-academy.netlify.app/)

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS with DaisyUI components
- **State Management**: Apollo Client for GraphQL
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form
- **Date Handling**: date-fns

## 🔌 WordPress Integration

This project uses WordPress as a headless CMS, with content being pulled via GraphQL. The integration includes:

- **WPGraphQL**: WordPress plugin that provides a GraphQL API
- **Custom Post Types**: For different content types (Announcements, News, Events, etc.)
- **Advanced Custom Fields (ACF)**: For custom fields and flexible content

### GraphQL Queries

GraphQL is used to fetch data from WordPress. Key queries include:

- `GET_LATEST_ANNOUNCEMENTS`: Fetches the latest announcements
- `GET_TEACHER_STAFF`: Retrieves teacher and staff information
- `GET_HERO_IMAGES`: Gets images for the hero section
- `GET_KHOBOR_EVENTS`: Fetches news and events

## 📁 Project Structure

```
src/
├── app/
│   ├── about/           # About page and subpages
│   ├── academics/       # Academic information
│   ├── admissions/      # Admission process and forms
│   ├── announcements/   # School announcements
│   ├── components/      # Reusable components
│   ├── contact/         # Contact information
│   ├── graphql/         # GraphQL queries and mutations
│   ├── news-events/     # News and events pages
│   ├── notices/         # School notices
│   ├── sections/        # Page sections
│   └── ...
```

## 🚀 Getting Started

1. **Prerequisites**
   - Node.js 16.8 or later
   - npm or yarn
   - WordPress installation with WPGraphQL and ACF plugins

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   
   # Navigate to project directory
   cd sunrise-academy-new
   
   # Install dependencies
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL=your-wordpress-graphql-endpoint
   ```

4. **Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🧩 Key Features

- **Responsive Design**: Works on all device sizes
- **Performance Optimized**: Fast page loads with Next.js
- **Content Management**: Easy content updates via WordPress
- **Interactive UI**: Smooth animations and transitions
- **Accessibility**: Built with accessibility in mind

## 🛠️ Development

- **Linting**: ESLint for code quality
- **Formatting**: Prettier for consistent code style
- **Type Checking**: TypeScript for type safety

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [WPGraphQL Documentation](https://www.wpgraphql.com/)
