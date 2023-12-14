import React, { useState, useEffect } from 'react';
import customers from 'assets/data/customers.json';
import './Customers.scss';
import { Filter } from 'components/Filter/Filter';
import { PaginationBtn } from 'components/Pagination/Pagination';
import { CustomersList } from 'components/CustumersList/CustumersList';

export const Customers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState(customers);
    const itemsPerPage = 8;

    useEffect(() => {
        const filtered = filterCustomersByName(searchTerm)

        if (filtered !== null) {
            const begin = (currentPage - 1) * itemsPerPage;
            const end = begin + itemsPerPage;

            setCurrentItems(filteredCustomers.slice(begin, end));
        } else setCurrentItems([])
    }, [searchTerm, currentPage, filteredCustomers.length]);

    function handleChange (e) {
        setSearchTerm(e.target.value);
    }

    const pageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const filterCustomersByName = (searchTerm) => {
        const lowercasedFilter = searchTerm.toLowerCase();

        const filteredData = customers.filter(({name}) => {
            return name.toLowerCase().includes(lowercasedFilter);
        });

        if (filteredData.length !== 0) {
            setFilteredCustomers(filteredData)
        } else {
            setFilteredCustomers([])
            return null
        }
        };

    return (
        <>
            <p className='greeting'>Hello Evano 👋🏼,</p>
            <div className='customers'>
                <div className='customers__header'>
                    <div>
                        <p className='customers__header__title'>All Customers</p>
                        <p className='customers__header__desc'>Active Members</p>
                    </div>
                    <div className='customers__input'>
                        <Filter 
                            value = {searchTerm}
                            onChange = {handleChange}
                        />
                    </div>
                </div>
                <div className='wrapper-table'>
                    <table className='customers__table'>
                        <thead className='customers__table__titles'>
                            <tr>
                                <td>Customer Name</td>
                                <td>Company</td>
                                <td>Phone Number</td>
                                <td>Email</td>
                                <td>Country</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <CustomersList 
                                currentItems={currentItems}
                            />
                        </tbody>
                    </table>
                </div>
                <div className='customers__bottom'>
                    {filteredCustomers.length !== 0 &&
                        <p>Showing data {(currentPage - 1) * 8 + 1} to {Math.min(currentPage * 8, filteredCustomers.length)} of {filteredCustomers.length} entries</p>
                    }
                    {filteredCustomers.length == 0 &&
                        <p>Custumers are empty</p>
                    }
                    <div>
                        <PaginationBtn
                            total={filteredCustomers.length}
                            itemsPerPage={itemsPerPage}
                            onPageChange={pageChange}
                            filterChange={searchTerm}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
