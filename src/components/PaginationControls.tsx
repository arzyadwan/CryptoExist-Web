'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type PaginationControlsProps = {
  pageCount: number;
  currentPage: number;
};

export default function PaginationControls({ pageCount, currentPage }: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pageNumber === 1) {
      params.delete('page');
    } else {
      params.set('page', pageNumber.toString());
    }
    return params.toString() ? `?${params.toString()}` : '';
  };

  const handlePageChange = (page: number) => {
    const url = `/articles${createPageURL(page)}`;
    router.push(url);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
      >
        Previous
      </button>

      {/* Page numbers */}
      <div className="flex space-x-1">
        {Array.from({ length: pageCount }, (_, i) => i + 1)
          .filter(page => {
            // Show first page, last page, current page, and pages around current
            return (
              page === 1 ||
              page === pageCount ||
              (page >= currentPage - 2 && page <= currentPage + 2)
            );
          })
          .map((page, index, array) => {
            // Add ellipsis if there's a gap
            const prevPage = array[index - 1];
            const showEllipsis = prevPage && page - prevPage > 1;

            return (
              <div key={page} className="flex items-center">
                {showEllipsis && (
                  <span className="px-2 py-2 text-gray-400">...</span>
                )}
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              </div>
            );
          })}
      </div>

      {/* Next button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= pageCount}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
      >
        Next
      </button>
    </div>
  );
}