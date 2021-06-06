import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export interface postType{
    title: string
    date: string
    image?: string
    description: string
    level: string
    tags?: string
    slug: string
    content: string
    [key: string]: string | undefined | Date
    keywords?: string
};

export function getPostBySlug(slug: string, fields: string[]) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  let items: postType = {
      content: "",
      title: "",
      slug: "",
      level: "",
      date: "",
      description: ""
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field.toString()] = data[field]
      if(field === 'date'){
        items.date = JSON.stringify(data['date'])
      }
    }
  })

  return items;
}


export function getAllPosts(fields: string[]) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
     (post1.date > post2.date ? -1 : 1)
     )
  return posts
}