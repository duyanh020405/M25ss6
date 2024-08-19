"use client"
import React from 'react'

export default function Page(props:any) {
  const blogs = [
    {
      id: 1,
      name: "Lap trinh co ban C++",
      hour: 100,
      author: "Ngo Van Quy",
      img: "https://tse1.mm.bing.net/th?id=OIP.daU7hcA72Pp7YxfgU_OqbgHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Lap trinh JavaCore",
      hour: 100,
      author: "Ngo Van Quy",
      img: "https://tse1.mm.bing.net/th?id=OIP.iIXOmGDzrtTJmdwbn7cGMwHaEJ&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Lap trinh PHB",
      hour: 100,
      author: "Ngo Van Quy",
      img: "https://tse4.mm.bing.net/th?id=OIP.whNEYeBwin_7PiOQvGTCVQHaE9&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      name: "Lap trinh ReactJs",
      hour: 100,
      author: "Ngo Van Quy",
      img: "https://tse1.mm.bing.net/th?id=OIP.33CwBYkmnMfpA9Djup22JwHaHa&pid=Api&P=0&h=180",
    },
  ];
  const {params} = props
  const all = blogs.filter((item)=>{
    return item.id == params.id
  })
  return (
    <div>
      {all.map((item:any)=>{
        return <div>
          <div style={{ border: "1px solid black", width: 160 }}>
              <h1>{item.name}</h1>
              <img style={{ position: "relative", width: 150 }} src={item.img} alt={item.name} />
              <p>So gio : {item.hour}</p>
              <p>Tac gia : {item.author}</p>
            </div>
        </div>
      })}
    </div>
  )
}
