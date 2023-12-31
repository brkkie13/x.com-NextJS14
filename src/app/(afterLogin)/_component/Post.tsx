import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko'; // 한글 플러그인
import PostArticle from './PostArticle';
import { faker } from '@faker-js/faker';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yuhoo2.png',
    },
    content: '내용내용내용내용내용',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              <span className={style.postUserId}>@{target.User.id}</span>
            </Link>
            <span className={style.dot}>·</span>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            {target.Images && target.Images.length > 0 && (
              <Link
                href={`${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
              >
                <img src={target.Images[0]?.link} alt="post 이미지" />
              </Link>
            )}
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
