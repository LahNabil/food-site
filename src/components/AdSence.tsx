import Script from 'next/script';
import React from 'react'
type AdSenceTypes = {
    pId: string;
}

const AdSence = ({pId}: AdSenceTypes) => {
  return (
    <Script
     async
     src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
     crossOrigin="anonymous"/>

  )
}

export default AdSence