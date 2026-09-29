import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS, BlogPost } from '../data/doctorData';
import { ArrowRight, Clock, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Back Pain', 'Sciatica', 'Joint Pain', 'Patient Education'];

  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 lg:py-32 relative bg-[#FFFFFF] border-t border-[#E2E7E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3D9C98] mb-3 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D9C98]" />
              <span>EDITORIAL INSIGHTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#18212B] tracking-tight">
              Clinical Insights & Articles
            </h2>
            <p className="mt-4 text-[#5E6872] max-w-xl text-base sm:text-lg">
              Physician-authored analyses on modern pain science, interventional advances, and musculoskeletal preservation.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAFAF7] border border-[#E2E7E8] rounded-xl overflow-x-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#3D9C98] text-white font-semibold shadow-sm'
                    : 'text-[#5E6872] hover:text-[#18212B] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="p-8 rounded-2xl bg-[#FAFAF7] border border-[#E2E7E8] flex flex-col justify-between group hover:border-[#3D9C98] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(24,33,43,0.02)] hover:shadow-[0_15px_40px_rgba(61,156,152,0.08)]"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#5E6872] mb-4">
                  <span className="text-[#3D9C98] uppercase tracking-wider font-semibold">{post.category}</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#18212B] mb-4 group-hover:text-[#3D9C98] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#5E6872] leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read Action */}
              <div className="pt-4 border-t border-[#E2E7E8] flex items-center justify-between text-xs font-semibold text-[#3D9C98]">
                <span className="group-hover:text-[#31827E] transition-colors flex items-center gap-1.5">
                  Read Clinical Article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-mono text-[#5E6872] text-[11px]">{post.publishDate}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Light Blog Article Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-[#18212B]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white border border-[#E2E7E8] rounded-2xl shadow-2xl p-6 sm:p-10 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 p-2 rounded-lg text-[#5E6872] hover:text-[#18212B] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#3D9C98] uppercase tracking-widest mb-2 font-medium">
                    <span>{selectedPost.category}</span>
                    <span>·</span>
                    <span>{selectedPost.readTime}</span>
                    <span>·</span>
                    <span className="text-[#5E6872]">{selectedPost.publishDate}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#18212B] leading-tight">
                    {selectedPost.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-[#5E6872] font-mono">
                    <span>Author: Dr. Shamsul Alam</span>
                    <span>·</span>
                    <span className="text-[#3D9C98] font-semibold">Clinical Editorial</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#E7F2F5] border border-[#7BAFC4]/30 text-sm text-[#18212B] italic">
                  &ldquo;{selectedPost.excerpt}&rdquo;
                </div>

                <div className="space-y-4 text-[#5E6872] text-base leading-relaxed pt-2">
                  {selectedPost.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#E2E7E8] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#5E6872]">
                    DEMO MEDICAL PUBLICATION
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2.5 rounded-lg bg-[#3D9C98] hover:bg-[#31827E] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
