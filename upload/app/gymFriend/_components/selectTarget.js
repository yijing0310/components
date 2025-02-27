'use client'

import React, { useState, useEffect } from 'react'
import gymfriendcss from '../_styles/gymfrenid.module.css'
export default function SelectTarget() {
  return (
    <>
      <div className={gymfriendcss.selectTarget}>
        <p>健身目標</p>
        <ul className="selectTarget-list">
          <li>增肌</li>
          <li>減脂</li>
          <li>提高耐力</li>
          <li>增強體能</li>
          <li>健康維持</li>
          <li>提高核心能量</li>
        </ul>
      </div>
    </>
  )
}
