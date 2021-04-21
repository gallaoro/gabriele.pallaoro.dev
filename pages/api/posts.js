const posts = [
  {
    slug: 'come',
    type: 'markdown',
    fileName: 'come.md',
    title: 'Come valutare un libro dalla copertina',
    url: '/blog/come',
    date: '2020-04-01T12:00:00Z',
  },
  {
    slug: 'test',
    type: 'javascript',
    title: 'A D3 sandbox',
    url: '/blog/test',
    date: '2020-04-02T12:00:00Z',
  }
]

export default function handler(req, res) {
  res.status(200).json(posts)
}

export const getPosts = () => {
  return posts
}