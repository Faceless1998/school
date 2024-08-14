import React from "react";
import "./Pagination.css"; // Import the CSS file for styling

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Define the range of page numbers to show
  const pageRange = 5; // Number of page squares to show

  // Determine the start and end page numbers
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  // Adjust the start page if there are not enough pages to the right
  const adjustedStartPage = Math.max(1, endPage - pageRange + 1);

  // Generate an array of page numbers to display
  const pageNumbers = [];
  if (totalPages > pageRange) {
    // Always show first page and ellipsis if needed
    if (adjustedStartPage > 1) {
      pageNumbers.push(1);
      if (adjustedStartPage > 2) {
        pageNumbers.push('...');
      }
    }

    // Add the range of page numbers
    for (let i = adjustedStartPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Always show last page and ellipsis if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
  } else {
    // If the total pages are fewer than or equal to the pageRange, show all pages
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  // Function to render page number buttons
  const renderPageNumbers = () => {
    return pageNumbers.map((number, index) => (
      <li
        key={index}
        aria-label={`Page ${number}`}
        className={`pagination-item ${number === currentPage ? "active" : ""} ${
          number === '...' ? "ellipsis" : ""
        }`}
        onClick={() => number !== '...' && onPageChange(number)}
      >
        {number}
      </li>
    ));
  };

  // Function to handle 'Previous' button click
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to handle 'Next' button click
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // // Function to handle 'First' button click
  // const handleFirstClick = () => {
  //   if (currentPage > 1) {
  //     onPageChange(1);
  //   }
  // };

  // // Function to handle 'Last' button click
  // const handleLastClick = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(totalPages);
  //   }
  // };

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li
          aria-label="Previous page"
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={handlePrevClick}
        >
          &lt;
        </li>
        {renderPageNumbers()}
        <li
          aria-label="Next page"
          className={`pagination-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
          onClick={handleNextClick}
        >
          &gt;
        </li>
        
      </ul>
    </div>
  );
};

export default Pagination;
