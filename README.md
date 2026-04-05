# EcoTravelBlog

EcoTravelBlog is a responsive blog about sustainable tourism, eco-friendly travel, and conscious exploration.  
The project is built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Prismic CMS**.

---

## Demo

**Live Site:**  
[https://eco-travel-blog-c56v.vercel.app](https://eco-travel-blog-c56v.vercel.app)

---

## Overview

This project includes:

- a homepage with featured articles
- an articles page with all published posts
- dynamic article pages generated from Prismic
- an about page
- responsive layout for desktop, tablet, and mobile
- SEO setup with metadata, sitemap, and robots.txt

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Prismic**
- **Vercel**

---

## Features

### Homepage
- Hero section
- Featured articles section
- Responsive layout

### Articles Page
- Articles sorted by publication date
- Thumbnail image
- Title, excerpt, author, and date
- Read more link

### Article Details
- Dynamic article pages using Prismic content
- Category, title, summary, featured image
- Rich text article body
- Author and publication date

### About Page
- Mission and vision
- Why eco-friendly tourism matters
- Main blog topics

### SEO
- Metadata for pages and articles
- Dynamic SEO for article pages
- `sitemap.xml`
- `robots.txt`

---

## Project Structure

```bash
src/
  app/
    about/
      page.tsx
    articles/
      [uid]/
        page.tsx
      page.tsx
    featured/
      page.tsx
    faq/
      page.tsx
    robots.ts
    sitemap.ts
    layout.tsx
    page.tsx
    globals.css

  components/
    FeaturedArticles.tsx
    Footer.tsx
    Header.tsx

  prismicio.ts
  fonts.ts

