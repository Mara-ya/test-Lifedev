import { useEffect, useState } from "react";
import './Pagination.scss';

export const PaginationBtn = ({total, itemsPerPage, filterChange, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1)
    }, [filterChange])

    const incrementPageChange = (currentPage) => {
        setCurrentPage(currentPage + 1);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const decrementPageChange = (currentPage) => {
        setCurrentPage(currentPage - 1);
    };

    const pageCount = Math.ceil(total / itemsPerPage);
    const pageNumbers = [];

    if (pageCount <= 5) {
        for (let i = 1; i <= pageCount; i++) {
            pageNumbers.push(i);
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) {
            pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(pageCount);
        } else if (currentPage > 3 && currentPage < pageCount - 2) {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(pageCount);
        } else {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = pageCount - 3; i <= pageCount; i++) {
            pageNumbers.push(i);
            }
        }
    }

    return (
        <div className="pagination">
            {total > 8 && <button
                onClick={() => decrementPageChange(currentPage)}
                onPageChange={onPageChange(currentPage)}
                disabled={currentPage <= 1}
                className="pagination__btn"
            >{`<`}</button>}
            {pageNumbers.map((number, index) => (
            typeof number === 'number' ? (
                <button
                key={index}
                disabled={currentPage === number}
                onClick={() => handlePageChange(number)}
                onPageChange={onPageChange(currentPage)}
                className={`pagination__btn ${currentPage === number && 'current-page'}`}
                >
                {number}
                </button>
            ) : (
                <span key={index}>
                {number}
                </span>
            )
            ))}
            {total > 8 && <button
                onClick={() => incrementPageChange(currentPage)}
                onPageChange={onPageChange(currentPage)}
                disabled={currentPage == pageCount}
                className="pagination__btn"
            >{`>`}</button>}
        </div>
    );
};
