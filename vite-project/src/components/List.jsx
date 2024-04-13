import React from 'react'

const List = () => {
    const names = [
        { name: "kahi pan" },
        { name: "something" },
        { name: "dummy1" },
        { name: "dummy2" },
        { name: "dummy3" },
        { name: "dummy4" },
        { name: "dummy5" },
        { name: "dummy6" },
        { name: "dummy7" },
        { name: "dummy8" }
    ];
  return (
    <div>list
        {names.map((names)=>(
             <li>
                {names.name}
             </li>
        ))}
    </div>
  )
}

export default List