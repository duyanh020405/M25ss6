"use client"
import React from 'react'

interface Blog {
  slug: string
}

interface Props {
  params: Blog
}

export default function page(props: Props) {
  
    const { params } = props;
     console.log(params.slug);
     
    return (
        <div>
            Blog bạn đang xem là: {params.slug}
        </div>
    )
}
