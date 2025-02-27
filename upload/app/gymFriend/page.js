'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import gymfriendcss from './_styles/gymfrenid.module.css'
import FriendBanner from './_components/friendBanner'
import SelectTarget from './_components/selectTarget'

export default function GymFriendPage() {
  return (
    <>
      <div className={gymfriendcss.container}>
        <FriendBanner />
        <SelectTarget />
        <div className={gymfriendcss.personList}>
          <div className={gymfriendcss.card}>
            <div className={gymfriendcss.avatar}></div>
            <div className={gymfriendcss.personContent}>
                <h5>熊大</h5>
                <p> 我是一名重訓愛好者，最近正在增肌訓練，平時每週3次跑步，....</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
