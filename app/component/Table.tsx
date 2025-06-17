"use client";
import React, { useState, useMemo } from 'react';
import {  HiChevronLeft, HiChevronRight, HiChevronDown } from "react-icons/hi";
import { RiArrowUpDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
const DataTable = ({ data: initialData, columns }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Search functionality
  const filteredData = useMemo(() => {
    return initialData.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [initialData, searchQuery]);

  // Sorting functionality
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <div className="w-full">
      {/* Search and Rows Per Page Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#636363] w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-1 border border-[#2a2a2a] rounded-lg outline-none bg-transparent placeholder:text-[#636363] placeholder:text-sm font-sans text-white text-xs"
          />
        </div>
        <div className="relative flex items-center gap-2">
  <span className="text-sm text-[#636363] font-sans">Rows per page:</span>
  <div className="relative">
    <select
      value={rowsPerPage}
      onChange={(e) => {
        setRowsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }}
      className="border border-[#2a2a2a] rounded-lg px-4 py-1 outline-none text-sm font-sans bg-transparent text-white appearance-none focus:bg-[#282828] cursor-pointer pr-8"
    >
      {[5, 10, 20, 50].map(value => (
        <option key={value} value={value}>{value}</option>
      ))}
    </select>
    {/* Down Arrow */}
    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white text-xs">
      <HiChevronDown />
    </span>
  </div>
</div>
      </div>

      {/* Table */}
      <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#1a1a1a]">
            <tr>
              {columns.map(column => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-sm font-sans text-white cursor-pointer hover:bg-[#282828]"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center gap-2 ">
                    {column.header}
                    < RiArrowUpDownLine className="w-4 h-4 " />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1f1f1f]">
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-[#282828]">
                {columns.map(column => (
                  <td key={column.key} className="px-6 py-4 text-[13px] font-sans text-white">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-1">
        <div className="text-[12px] font-sans text-[#636363]">
          Showing {((currentPage - 1) * rowsPerPage) + 1} to {Math.min(currentPage * rowsPerPage, sortedData.length)} of {sortedData.length} entries
        </div>
        <div className="flex gap-2 font-sans text-sm">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-[#2a2a2a] rounded-lg hover:bg-[#282828] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiChevronLeft className="w-4 h-4 text-white" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-[#2a2a2a] text-white'
                  : 'hover:bg-[#363636] text-[#7d7c7c]'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 border border-[#2a2a2a]  rounded-lg hover:bg-[#282828] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <HiChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage
const Table = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin' },
    { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Editor' },
  ];

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' }
  ];

  return (
    <div className="p-4">
      <DataTable data={sampleData} columns={columns} />
    </div>
  );
};

export default Table;