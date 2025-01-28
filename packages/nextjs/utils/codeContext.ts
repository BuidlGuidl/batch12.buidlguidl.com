import fs from "fs";
import path from "path";

const EXCLUDED_DIRS = [".node_modules", "node_modules", ".next", "out", "cache", ".git", "dist"];
const INCLUDED_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];
const MAX_FILE_SIZE = 5000; // characters
const MAX_TOTAL_SIZE = 15000; // characters

let cachedContext: string | null = null;

export async function getProjectFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  async function scan(directory: string) {
    const entries = await fs.promises.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        if (!EXCLUDED_DIRS.includes(entry.name)) {
          await scan(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (INCLUDED_EXTENSIONS.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }

  await scan(dir);
  return files;
}

export async function getCodeContext(): Promise<string> {
  // Return cached context if exists
  if (cachedContext) {
    return cachedContext;
  }

  const projectRoot = process.cwd();
  const files = await getProjectFiles(projectRoot);

  let context = "Project Code Context:\n\n";
  let totalSize = 0;

  for (const file of files) {
    if (totalSize >= MAX_TOTAL_SIZE) break;

    const relativePath = path.relative(projectRoot, file);
    const content = await fs.promises.readFile(file, "utf-8");

    // Skip large files
    if (content.length > MAX_FILE_SIZE) {
      continue;
    }

    // Skip test files and type definitions
    if (relativePath.includes(".test.") || relativePath.includes(".d.ts")) {
      continue;
    }

    // Only include most relevant files
    if (
      relativePath.includes("components/") ||
      relativePath.includes("hooks/") ||
      relativePath.includes("pages/") ||
      relativePath.includes("app/") ||
      relativePath.includes("utils/") ||
      relativePath.includes("hooks/")
    ) {
      const entry = `File: ${relativePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
      if (totalSize + entry.length <= MAX_TOTAL_SIZE) {
        context += entry;
        totalSize += entry.length;
      }
    }
  }

  // Cache the result
  cachedContext = context;

  return context;
}
