import React from 'react'

function PageHeader() {
  return (
    <div className="bg-white border-b border-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-6">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <span>/</span>
            <span className="text-slate-900">Shop All</span>
          </nav>
          <h1 className="serif text-5xl text-slate-900 leading-none">
            The Clinical <span className="italic font-normal text-slate-400">Edit</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-2xl font-light leading-relaxed">
            Explore our complete portfolio of dermatologically tested formulas, engineered for cellular regeneration and visible clarity.
          </p>
        </div>
      </div>
  )
}

export default PageHeader