/** GitHub Pages project sites use NEXT_PUBLIC_BASE_PATH=/RepoName at build time */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function asset(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalized}`
}
