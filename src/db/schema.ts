import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("courses", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  image: varchar({ length: 255 }).notNull(),
});