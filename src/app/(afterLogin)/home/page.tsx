import React from 'react';
import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import Tab from './_component/Tab';
import PostForm from './_component/PostForm';
import Post from '../_component/Post';

export default function Home() {
  return (
    <main className={style.main}>
      {/* TabProvider가 공통으로 영향을 미치는 부분을 전부  감싸줌 */}
      <TabProvider>
        <Tab />
        <PostForm />

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
