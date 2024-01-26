import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { cx } from '@/lib/utils';

import { NewsCard } from '@/components/news/NewsCard';
import { NewsItemGrid } from '@/components/news/NewsItemGrid';
import { Separator } from '@/components/ui/Separator';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'layout' });

  return {
    title: t('news'),
  };
}

export default function News({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const mockData = [
    {
      id: 1,
      internal: true,
      title: 'Gruppe status: prosjekt spill',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 2,
      internal: false,
      title: 'DevOps Møtet',
      date: '69. oktober 6969',
      photoUrl: 'mock.jpg',
    },
    {
      id: 3,
      internal: false,
      title: 'Jonas er kul',
      date: '42. november 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 4,
      internal: true,
      title: 'Iskrem er godt',
      date: '18. februar 1942',
      photoUrl: 'mock.jpg',
    },
    {
      id: 5,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 6,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 7,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 8,
      internal: false,
      title: 'Dette er en veeeeldig lang overskrift som skal testes',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 9,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 10,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 11,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 12,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 13,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 14,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 15,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 16,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 17,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 18,
      internal: false,
      title: '18',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },

    {
      id: 19,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 20,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 21,
      internal: false,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 22,
      internal: true,
      title: 'Hvorfor er jeg her?',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
    {
      id: 23,
      internal: false,
      title: '23',
      date: '22. oktober 2023',
      photoUrl: 'mock.jpg',
    },
  ];
  unstable_setRequestLocale(locale);
  const t = useTranslations('news');
  return (
    <>
      <h1 className='my-4'>{t('title')}</h1>
      <div className='grid h-192 grid-rows-4 gap-4 xs:h-96 xs:grid-cols-3 xs:grid-rows-2 md:grid-cols-4 lg:h-112'>
        {mockData.slice(0, 4).map((data, index) => (
          <NewsCard
            className={cx(
              index === 0 && 'row-span-1 xs:col-span-2 md:row-span-2',
              index === 1 && 'col-span-1 row-span-1 md:col-span-2',
              index === 3 && 'row-span-1 xs:col-span-2 md:col-span-1',
            )}
            key={data.id}
            id={data.id}
            internal={data.internal}
            title={data.title}
            date={data.date}
            photoUrl={data.photoUrl}
            t={{
              internalArticle: t('internalArticle'),
            }}
          />
        ))}
      </div>
      <Separator className='my-6' />
      <NewsItemGrid
        newsData={mockData}
        t={{
          morePages: useTranslations('ui')('morePages'),
          goToPreviousPage: useTranslations('ui')('goToPreviousPage'),
          goToNextPage: useTranslations('ui')('goToNextPage'),
          previous: useTranslations('ui')('previous'),
          next: useTranslations('ui')('next'),
          page: t('page'),
          internalArticle: t('internalArticle'),
        }}
      />
    </>
  );
}
