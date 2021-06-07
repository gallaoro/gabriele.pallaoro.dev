import Link from 'next/link'

export default function Portfolio({ stuff }) {
  return (
    <div>
      <h3 className="font-bold">Stuff I made</h3>
      {stuff.map(post => {
        return (
          <div className="cursor-pointer" key={stuff.url}>
            <Link href={post.url}>
              <a href={post.url} target="_blank" rel="noopener">
                <div className="flex justify-items-start items-center">
                  <p className="underline">{post.title}</p>
                  <img className="ml-3 h-4 w-4" src="/external-link.svg"/>
                </div>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
