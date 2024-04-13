import React from 'react'

const List = () => {
    const names = [
        { name: "kahi pan",id:1 },
        { name: "something",id:2 },
        { name: "dummy1" ,id:3},
        { name: "dummy2" ,id:4},
        { name: "dummy3" ,id:5},
        { name: "dummy4" ,id:6},
        { name: "dummy5" ,id:7},
        { name: "dummy6" ,id:8},
        { name: "dummy7" ,id:9},
        { name: "dummy8" ,id:10}
    ];
  return (
    <div>list : 
        {names.map((dusra)=>(
             <li key={dusra.id}
             >
                {dusra.name}
             </li>
        ))}
    <button>add</button>
    </div>
  )
}

export default List