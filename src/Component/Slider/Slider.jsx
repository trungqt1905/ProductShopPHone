import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import React, { useEffect } from 'react';
import { listsp } from '../../api/data';
import Item from './Item';

const fakeApi = () => Promise.resolve(listsp);
function Slider() {
    const [item, setItem] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1); // Trang hiện tại đang đứng ở trang nào (mặc định là 1)
    const itemPerPage = 12; // Số phần tử mỗi trang
    const data = item; // Dữ liệu cần phân trang
    const totalPages = Math.ceil(data.length / itemPerPage);
    // Tính tổng số trang = tổng số phần tử / số phần tử trên mỗi trang (làm tròn lên)
    const handleChangeValue = (event, value) => {
        setCurrentPage(value);
        console.log(value);
    }

    const currentItems = item.slice(
        (currentPage - 1) * itemPerPage,
        currentPage * itemPerPage
    );
    // Lấy ra số phần tử dựa vào số phần tử trên mỗi trang và trang hiện tại
    // Ví dụ: currentPage = 1, itemPerPage = 12 => (1 - 1) * 12 = 0, 1 * 12 = 12
    // Lấy ra các phần tử từ 0 đến 12 (không bao gồm 12)

    useEffect(() => {
        fakeApi().then(res => {
            setItem(res);
        });
    });

    return (
        <>
            <Container maxWidth="lg">
                <Item item={currentItems} />
                <Box margin={4} justifyContent={'center'} display={'flex'}>
                    <Pagination color='primary' count={totalPages} onChange={handleChangeValue} page={currentPage} />
                </Box>
            </Container >
        </>
    );
}

export default Slider;