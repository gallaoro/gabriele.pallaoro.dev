import Link from 'next/link'

export default function LatestPosts({ posts }) {
  return (
    <div>
      <h3 className="font-bold">Latest posts</h3>
      {posts.map(post => {
        return (
          <div className="cursor-pointer" key={post.slug}>
            <Link href={post.url}>
              <div className="flex justify-items-start">
                <p className="underline">{post.title}</p>
                <p className="ml-2">&rarr;</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
