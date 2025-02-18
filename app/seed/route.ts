import { sql } from "@vercel/postgres";
import { specialtyCoffees } from "@/app/lib/placeholder-data/coffee-placeholder-data";
import { users } from "@/app/lib/placeholder-data/users-placeholder-data";

async function seedCoffees() {
  await sql`CREATE
    EXTENSION IF NOT EXISTS "uuid-ossp"`;
  // language=SQL format=false
  await sql`
    CREATE TABLE IF NOT EXISTS coffees (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_code VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(300) NOT NULL,
        origin_type VARCHAR(255) NOT NULL,
        single_origin_name VARCHAR(255),
        bean_type VARCHAR(255) NOT NULL,
        blend_ratio VARCHAR(255),
        roasting_location VARCHAR(255) NOT NULL,
        brew_method VARCHAR(255) NOT NULL,
        roast_level VARCHAR(255) NOT NULL,
        roast_level_detail VARCHAR(255),
        processing_method VARCHAR(255) NOT NULL,
        is_decaf BOOLEAN NOT NULL,
        primary_flavors TEXT[] NOT NULL,
        body VARCHAR(255) NOT NULL,
        acidity VARCHAR(255) NOT NULL,
        price_for_250g VARCHAR(255) NOT NULL,
        price_for_1kg VARCHAR(255) NOT NULL
        );
    `;

  const insertedCoffees = await Promise.all(
    specialtyCoffees.map((coffee) => {
      return sql`
                INSERT INTO coffees (product_code,
                                     name,
                                     description,
                                     origin_type,
                                     single_origin_name,
                                     bean_type,
                                     blend_ratio,
                                     roasting_location,
                                     brew_method,
                                     roast_level,
                                     roast_level_detail,
                                     processing_method,
                                     is_decaf,
                                     primary_flavors,
                                     body,
                                     acidity,
                                     price_for_250g,
                                     price_for_1kg)
                VALUES (${coffee.productCode},
                        ${coffee.name},
                        ${coffee.description},
                        ${coffee.originType},
                        ${coffee.singleOriginName},
                        ${coffee.beanType},
                        ${coffee.blendRatio},
                        ${coffee.roastingLocation},
                        ${coffee.brewMethod},
                        ${coffee.roastLevel},
                        ${coffee.roastLevelDetail},
                        ${coffee.processingMethod},
                        ${coffee.isDecaf},
                        ${
                          coffee.primaryFlavors.length > 0
                            ? `{${coffee.primaryFlavors.map((flavor) => `"${flavor}"`).join(",")}}`
                            : "'{}'"
                        }::text[],
                        ${coffee.body},
                        ${coffee.acidity},
                        ${coffee.priceFor250g},
                        ${coffee.priceFor1kg})
            `;
    }),
  );
  return insertedCoffees;
}

async function seedUsers() {
  await sql`CREATE
    EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // language=SQL format=false
  await sql`
    CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )`;

  const insertedUsers = await Promise.all(
    users.map((user) => {
      return sql`
                INSERT INTO users(first_name,
                                  last_name,
                                  email,
                                  password)
                VALUES (${user.firstName},
                        ${user.lastName},
                        ${user.email},
                        ${user.password})`;
    }),
  );
  return insertedUsers;
}

export async function GET() {
  try {
    await sql`BEGIN`;
    await seedCoffees();
    await seedUsers();

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
