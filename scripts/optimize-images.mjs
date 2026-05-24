import { existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const publicDir = join(process.cwd(), 'public')
const heroSource = join(publicDir, 'print_phone.png')
const heroWebp = join(publicDir, 'print_phone.webp')

if (!existsSync(heroSource)) {
  console.error('Missing public/print_phone.png')
  process.exit(1)
}

await sharp(heroSource)
  .resize(640, null, { withoutEnlargement: true })
  .webp({ quality: 82, effort: 6 })
  .toFile(heroWebp)

const meta = await sharp(heroWebp).metadata()
const { size } = statSync(heroWebp)

console.log(`Created print_phone.webp (${Math.round(size / 1024)} KB, ${meta.width}x${meta.height})`)
