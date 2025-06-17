"use client"
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { motion } from 'framer-motion';

const Dragdrop = () => {
  const [columns, setColumns] = useState({ 
    todo: [
      { id: 1, text: 'Project Setup', description: 'Lorem ipsum dolor sit amet consectetur...', tags: ['Designer', 'UI/UX'] },
      { id: 2, text: 'Design UI', description: 'Lorem ipsum dolor sit amet consectetur...', tags: ['Designer'] },
    ],
    inProgress: [
      { id: 3, text: 'Develop Frontend', description: 'Lorem ipsum dolor sit amet consectetur...', tags: ['Frontend'] },
    ],
    testing: [
      { id: 4, text: 'Create Backend', description: 'Lorem ipsum dolor sit amet consectetur...', tags: ['Backend'] },
    ],
    completed: [
      { id: 5, text: 'Deploy Application', description: 'Lorem ipsum dolor sit amet consectetur...', tags: ['DevOps'] },
    ],
  });

  const columnHeadings = {
    todo: "To Do",
    inProgress: "In Progress",
    testing: "Testing",
    completed: "Completed"
  };

  const handleDragStart = (e:any, item: any, column: any) => {
    e.dataTransfer.setData("itemId", item.id);
    e.dataTransfer.setData("column", column);
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  const handleDrop = (e:any, column: any) => {
    const itemId = e.dataTransfer.getData("itemId");
    const itemColumn = e.dataTransfer.getData("column");

    if (itemColumn === column) return; 

    const item = columns[itemColumn].find(i => i.id === parseInt(itemId));


    const updatedSourceColumn = columns[itemColumn].filter(i => i.id !== parseInt(itemId));

  
    const updatedTargetColumn = [...columns[column], item];


    setColumns({
      ...columns,
      [itemColumn]: updatedSourceColumn,
      [column]: updatedTargetColumn,
    });
  };

  return (
    <div className='flex space-x-1 font-sans p-2  '>
      {Object.keys(columns).map((columnKey) => (
        <div
          key={columnKey}
          className=' w-[28%] p-2 rounded-t-xl   '
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, columnKey)}
        >
         
          <div className='text-white font-sans text-sm font-semibold '>
            {columnHeadings[columnKey]}
          </div>

          {columns[columnKey].map((item) => (
            <motion.div
              key={item.id}
              className=' rounded-md text-white p-2 mt-4 cursor-grab active:cursor-grabbing bg-[#383838]'
              draggable
              onDragStart={(e) => handleDragStart(e, item, columnKey)}
            >
              <div className='flex justify-between items-center font-sans font-medium'>
                <div>{item.text}</div>
                <div className='cursor-pointer'>
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className=' text-xs text-gray-400 mt-2'>{item.description}</div>
              <div className=" mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="text-[10px] font-sans text-[#10B981] rounded-xl border-2 border-[#10B981] px-2"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dragdrop;
