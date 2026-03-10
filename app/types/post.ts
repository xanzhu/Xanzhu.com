// types/post.ts
export interface Post {
  title: string
  tag: string
  date: string
  description: string
  img: string
  updated: string
  alt: string
  body?: {
    type?: string
    value?: any[]
    toc?: {
      links?: any[]
    }
  }
  path?: string
}
