export default function Blogs({blogs=[]}){
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Blogs</h2>
      <div className="space-y-4">
        {blogs.map((b,i)=>(
          <article key={i} className="p-4 border rounded bg-white dark:bg-gray-800">
            <h4 className="font-semibold">{b.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{b.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
