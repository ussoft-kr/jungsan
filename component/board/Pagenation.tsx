import { Pagination } from "react-bootstrap";
import styles from 'styles/Board.module.css';


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

function Pagenation({ currentPage, totalPages, onPageChange } : PaginationProps) {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)} className={styles.pageitems} linkClassName={styles.pageitemlink}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className={`${styles.paginationwrap} pagenation-wrap`}>
            <Pagination className={styles.pagebox}>
                <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} className={styles.pagefirst} linkClassName={styles.pagefirstlink} />
                <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={styles.pageprev} />
                {items}
                <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={styles.pagenext} />
                <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className={styles.pagelast} />
            </Pagination>
        </div>
    );
}

export default Pagenation;
