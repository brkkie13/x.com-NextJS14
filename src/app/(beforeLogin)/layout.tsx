import React, { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

export default function BeforeLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {/* 패러렐 라우트 (@modal/page.tsx) */}
      {modal}
    </div>
  );
}
