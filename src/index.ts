import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { cache } from 'react';
import { eq } from 'drizzle-orm';
import { usersTable } from '@/db/schema'; // Ensure this path points to your drizzle.ts

// Initialize database connection
const db = drizzle(process.env.DATABASE_URL!);

// Fetch all users from the "users" table with caching
export const getCourses = cache(async () => {
  const data = await db.select().from(usersTable);
  return data;
});
