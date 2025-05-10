import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

export default function BlogIndex() {
  const posts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Financiële Artikelen</h1>
      <p className="text-center text-lg mb-12 text-gray-600">
        Inzichten, tips en advies van Glodinas Finance B.V.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="bg-white p-6 rounded shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{format(new Date(post.date), 'dd MMMM yyyy')}</p>
            <p className="text-gray-700 mb-4 text-sm">{post.description}</p>
            <Link href={post.url}>
              <a className="text-blue-600 font-semibold hover:underline">Lees artikel →</a>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
