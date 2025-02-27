'use client'

import React, { useState, useEffect } from 'react'
import gymfriendcss from '../_styles/gymfrenid.module.css'
export default function FriendBanner() {
  return (
    <>
      <div className={gymfriendcss.banner}>
        <h3>找GYM友</h3>
        <p>尋找有相同運動愛好的朋友，一起GYM步吧！</p>
        {/* <Image
            src="/imgs/gymfriendBanner.jpg"
            alt="Gym Friend Banner"
            width={1200}
            height={100}
            layout="responsive"
          /> */}
      </div>
    </>
  )
}
