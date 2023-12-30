import BackButton from '@/app/(afterLogin)/_component/BackButton';
import style from './singlePost.module.css';
import Post from '@/app/(afterLogin)/_component/Post';
import CommentForm from './_component/CommentForm';

export default function SinglePost() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>포스트</h3>
      </div>
      <Post />
      <CommentForm />
      {/* 원본 게시글에 대한 답글 */}
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
