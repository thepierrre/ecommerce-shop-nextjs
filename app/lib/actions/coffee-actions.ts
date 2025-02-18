"use server";

import { sql } from "@vercel/postgres";
import { Coffee } from "@/app/lib/definitions/coffee-definitions";

export async function fetchAllCoffees() {
  try {
    const data = await sql<Coffee>`SELECT *
                                       FROM coffees`;
    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch coffees.");
  }
}

export async function fetchFilterCoffees() {
  try {
    const data = await sql<Coffee>`SELECT *
                                       FROM coffees
                                       WHERE brew_method = 'filter'`;

    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch filter coffees.");
  }
}

export async function fetchEspressoCoffees() {
  try {
    const data = await sql<Coffee>`SELECT *
                                       FROM coffees
                                       WHERE brew_method = 'espresso'`;

    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch espresso coffees.");
  }
}

export async function fetchDecafCoffees() {
  try {
    const data = await sql<Coffee>`SELECT *
                                       FROM coffees
                                       WHERE is_decaf = 'TRUE'`;

    return data.rows;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch decaf coffees.");
  }
}
