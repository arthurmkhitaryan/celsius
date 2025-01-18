import React, { useEffect, useState } from 'react';
import * as S from './OEmberRenderer.styled';

const OEmbedRenderer = ({ content }: { content: string }) => {
  const [processedContent, setProcessedContent] = useState('');

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    doc.querySelectorAll('oembed').forEach((oembed) => {
      const url = oembed.getAttribute('url');
      if (url) {
        const iframe = document.createElement('iframe');
        iframe.src = url.replace('watch?v=', 'embed/');
        iframe.width = '100%';
        iframe.height = '315';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;
        oembed.replaceWith(iframe);
      }
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return <S.Content dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

export default OEmbedRenderer;
