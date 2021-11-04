const stuff = [
  {
    title: 'A cool woodworker website',
    url: 'https://linfalegno-web.vercel.app/',
    date: '2020-04-01T12:00:00Z',
  },
  {
    title: 'A headline builder app',
    url: 'https://theheadline.vercel.app',
    date: '2021-04-01T12:00:00Z',
  },
  {
    title: 'A sugo generator',
    url: 'https://sugo-generator.vercel.app',
    date: '2021-11-02T12:00:00Z',
  },
]

export default function handler(req, res) {
  res.status(200).json(stuff)
}

export const getStuffIMade = () => {
  return stuff
}