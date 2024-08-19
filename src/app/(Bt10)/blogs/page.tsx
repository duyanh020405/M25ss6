"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

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

  const xem = (id: number) => {
    router.push(`/blogs/${id}`);
  };


  return (
    <div>
      Blogs:
      <br />
      {blogs.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", flexDirection: "row", gap: 30 }}>
            <div style={{ border: "1px solid black", width: 160 }}>
              <h1>{item.name}</h1>
              <img style={{ position: "relative", width: 150 }} src={item.img} alt={item.name} />
              <button onClick={() => xem(item.id)} style={{ backgroundColor: "blue", color: "white" }}>
                Xem Chi tiet
              </button>
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}
