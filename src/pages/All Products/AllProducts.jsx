import SidebarFilters from './components/SidebarFilters';
import Toolbar from './components/Toolbar';
import ProductsGrid from './components/ProductsGrid';
import PageHeader from '../../components/common/PageHeader';

const AllProducts = () => {

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Breadcrumbs & Header */}
      <PageHeader/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* /* Sidebar Filters (Desktop) */}
          <SidebarFilters/>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Toolbar */}
            <Toolbar/>
            {/* Product Grid */}
            <ProductsGrid/>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
