import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

export async function GET() {
  const buildersPath = path.join(process.cwd(), "app/builders");

  try {
    const directories = await readdir(buildersPath, { withFileTypes: true });
    const addresses = directories.filter(dirent => dirent.isDirectory() && dirent.name.startsWith("0x"));

    return NextResponse.json(addresses.map(dirent => dirent.name));
  } catch (error) {
    console.error("Error reading builders directory:", error);
    return NextResponse.json({ error: "Failed to fetch builders" }, { status: 500 });
  }
}
