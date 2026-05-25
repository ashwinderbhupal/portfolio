export const assetUrl = (path) => {
  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}

export const resumeUrl = assetUrl('Resume/Ashwinder_Bhupal.pdf')
