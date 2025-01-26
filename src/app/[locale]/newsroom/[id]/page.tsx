'use client';

import React from 'react';

// styled
import * as S from './page.styled';
import { useGetNewsByIdQuery } from '@/features/newsroom/newsroom.api';
import { getImageUrl } from '@/utils/getImageFullUrl';
import Achievements from '@/components/Achievements';
import Newsroom from '@/components/Newsroom';

interface Props {
  params: {
    id: number;
    locale: string;
  };
}

export default function NewsSingle({ params }: Props) {
  const { id, locale } = params;
  const { data, isSuccess } = useGetNewsByIdQuery({ id, locale });

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
    .format(new Date(data?.createdAt ?? new Date()))
    .replaceAll('/', '.');

  function transformHtml(htmlString: string) {
    return htmlString.replace(
      /<figure class="media">\s*<oembed url="([^"]+)"><\/oembed>\s*<\/figure>/g,
      (match, mediaUrl) => {
        const mediaPreviewUrl = mediaUrl; // Если нужно модифицировать URL для превью, это место для изменений
        return `
            <figure class="media">
                <div data-oembed-url="${mediaUrl}">
                    <iframe src="${mediaPreviewUrl}"></iframe>
                </div>
            </figure>
            `.trim();
      },
    );
  }

  return (
    isSuccess && (
      <S.NewsSingleWrapper>
        <S.BannerImage
          src={getImageUrl(data?.largeImage)}
          alt={'News Banner'}
        />
        <S.ContentWrapper>
          <S.Content
            dangerouslySetInnerHTML={{ __html: transformHtml(data.content) }}
          />
          <S.Devider />
          <S.InfoWrapper>
            <S.AuthorName>
              {data.author} | {formattedDate}
            </S.AuthorName>
          </S.InfoWrapper>
          <S.MainWrapper>
            <Achievements />
            <Newsroom />
          </S.MainWrapper>
        </S.ContentWrapper>
      </S.NewsSingleWrapper>
    )
  );
}
