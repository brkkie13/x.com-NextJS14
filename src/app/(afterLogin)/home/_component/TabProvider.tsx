'use client';

import { createContext, ReactNode, useState } from 'react';

export const TabContext = createContext({
  tab: 'recommend',
  // 에러 안생기도록 매개변수 value의 type이 recommend 또는 follow라고 구체적으로 명시. (타입의 '또는'은 '|' 한개)
  setTab: (value: 'recommend' | 'follow') => {},
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('recommend');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
