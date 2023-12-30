'use client';
import style from './tab.module.css';
import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState('recommend');

  const onClickRecommend = () => {
    setTab('recommend');
  };
  const onClickFollow = () => {
    setTab('follow');
  };

  return (
    <div className={style.homeFixed}>
      <h1 className={style.homeText}>홈</h1>
      <div className={style.homeTab}>
        <div onClick={onClickRecommend}>
          추천
          <div className={style.tabIndicator} hidden={tab === 'follow'}></div>
        </div>
        <div onClick={onClickFollow}>
          팔로우 중
          <div
            className={style.tabIndicator}
            hidden={tab === 'recommend'}
          ></div>
        </div>
      </div>
    </div>
  );
}
