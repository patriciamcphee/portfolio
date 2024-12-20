import React from 'react'
import styled from 'styled-components'


const Body = styled.div`
  background: #f3f3f3;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
`

const CarouselContainer = styled.div`
  padding: 20px 0;
`

const Row = styled.div`
  max-width: 1000px;
  margin: 10px auto;
  border-radius: 8px;
  background: #fff;

  @media screen and (max-width: 767px) {
    margin: 10px;
  }
`

const RowHead = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
`

const Card = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }

  span:first-of-type {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  span:last-of-type {
    color: gray;
    font-size: 12px;
    text-decoration-line: line-through;
    margin-left: 10px;
  }

  @media screen and (max-width: 767px) {
    background: #f3f3f3;
    border: 1px solid #f3f3f3;
  }
`

const Title = styled.div`
  font-size: 14px;
  line-height: 16px;
  height: 32px;
  overflow: hidden;
  margin-bottom: 5px;
`

const Mask = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background: #0000000a;
  position: absolute;
  border-radius: 8px;
  top: 0;
  left: 0;

  &:hover {
    opacity: 1;
  }
`

const Code = styled.pre`
  max-width: 1000px;
  margin: 10px auto;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`

const Reference = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 1000px;
  border-top: 1px solid #666;

  img {
    width: 100%;
  }
`

const CarouselItems = [
  {
    "comment": {
      "detail": "兩岸全面斷航⋯⋯",
      "nickname": "reen ho",
      "profile": "https://s.yimg.com/gq/1770/40147157126_80fc42_o.jpg",
      "count": 32
    },
    "imageSrc": "https://s1.yimg.com/uu/api/res/1.2/k54NZ.sirRkPkEgUpmOM1w--/YXBwaWQ9eXRhY2h5b247Y2g9NDQ5O2N3PTgwMDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media.zenfs.com/en/cna.com.tw/d031a8727dc4d6f296c3a4fe8ff523d9",
    "imageWebpSrc": "https://s2.yimg.com/lo/api/res/1.2/Tcq8S8O2BfJ_REWDxUq8Ag--/YXBwaWQ9eXR3ZnBhZ2U-/https://s1.yimg.com/uu/api/res/1.2/k54NZ.sirRkPkEgUpmOM1w--/YXBwaWQ9eXRhY2h5b247Y2g9NDQ5O2N3PTgwMDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media.zenfs.com/en/cna.com.tw/d031a8727dc4d6f296c3a4fe8ff523d9.cf.webp",
    "link": "https://tw.news.yahoo.com/%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E%E5%8F%B0%E7%81%A3%E6%96%B0%E5%A2%9E2%E4%BE%8B-%E6%94%BF%E5%BA%9C%E6%B1%BA%E5%AE%9A3%E6%8E%AA%E6%96%BD-114243142.html",
    "followLink": false,
    "title": "新增2例入台 政府要求湖北團快離境",
    "type": "story",
    "uuid": "f68fb997-aa08-3716-9c21-0c575fdb52d2"
  },
  {
    "comment": {
      "detail": "人類夕鶴，中國幫了大忙",
      "nickname": "無忌",
      "profile": "https://s.yimg.com/gq/1756/40147164326_afa8df_o.jpg",
      "count": 8
    },
    "imageSrc": "https://s.yimg.com/uu/api/res/1.2/CpM3siULXbwr6mbJulW82Q--/YXBwaWQ9eXRhY2h5b247Y2g9MzU4O2N3PTY0MDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/http://media.zenfs.com/it-IT/video/funweek_25/8491ae2f81ed8ae5c22457ea624e617d",
    "imageWebpSrc": "https://s.yimg.com/lo/api/res/1.2/4U6HVA8Nl_GNkVlhuFtOOQ--/YXBwaWQ9eXR3ZnBhZ2U-/https://s.yimg.com/uu/api/res/1.2/CpM3siULXbwr6mbJulW82Q--/YXBwaWQ9eXRhY2h5b247Y2g9MzU4O2N3PTY0MDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/http://media.zenfs.com/it-IT/video/funweek_25/8491ae2f81ed8ae5c22457ea624e617d.cf.webp",
    "link": "https://tw.news.yahoo.com/%E6%9C%AB%E6%97%A5%E9%90%98%E8%B7%9D%E5%8D%88%E5%A4%9C%E5%8F%AA%E5%89%A9100%E7%A7%92-73%E5%B9%B4%E4%BE%86%E4%BA%BA%E9%A1%9E%E6%9C%80%E6%8E%A5%E8%BF%91%E6%BB%85%E4%BA%A1-064131854.html",
    "followLink": false,
    "title": "只剩100秒 73年來人類最接近滅亡",
    "type": "story",
    "uuid": "799ea104-b8bd-333b-bf4e-7eb9e04f9986"
  },
  {
    "comment": {
      "detail": "人們賦予錢太大的力量了，以致於人性在錢的面前醜態百出⋯⋯",
      "nickname": "無名",
      "profile": "https://s.yimg.com/gq/1756/40147164326_afa8df_o.jpg",
      "count": 7
    },
    "imageSrc": "https://s3.yimg.com/uu/api/res/1.2/u14p5sDcBUvG1RgqL5nOtw--/YXBwaWQ9eXRhY2h5b247Y2g9ODgwO2N3PTEyMDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/http://media.zenfs.com/zh-Hant-TW/homerun/bcc.com.tw/89bfa53e5be1c18dd1d164ec024a652a",
    "imageWebpSrc": "https://s.yimg.com/lo/api/res/1.2/apFS8ELEkmRyrrjBqcdzcg--/YXBwaWQ9eXR3ZnBhZ2U-/https://s3.yimg.com/uu/api/res/1.2/u14p5sDcBUvG1RgqL5nOtw--/YXBwaWQ9eXRhY2h5b247Y2g9ODgwO2N3PTEyMDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/http://media.zenfs.com/zh-Hant-TW/homerun/bcc.com.tw/89bfa53e5be1c18dd1d164ec024a652a.cf.webp",
    "link": "https://tw.news.yahoo.com/video/%E7%B4%AB%E5%8D%97%E5%AE%AE%E5%88%9D-%E7%99%BC%E9%8C%A2%E6%AF%8D-%E6%8E%92%E9%9A%8A%E9%A0%AD%E9%A6%994%E5%A4%A9%E5%89%8D%E5%88%B0-%E5%BB%9F%E6%96%B9%E5%82%9910%E8%90%AC%E6%9E%9A-060235929.html",
    "followLink": false,
    "title": "大動員！搶紫南宮錢母長龍無限延伸",
    "type": "video",
    "uuid": "a0729e59-5c45-3ed5-b011-8466e1dea037"
  },
  {
    "comment": {
      "detail": "武漢人過這個年很淦吧！物價飆升七倍還被封城，這不叫過年，這叫坐牢。",
      "nickname": "jack",
      "profile": "https://s.yimg.com/ag/images/1735/55563583803_ec658c_192sq.jpg",
      "count": 20
    },
    "imageSrc": "https://s1.yimg.com/uu/api/res/1.2/jhy5BICj.98lFA4a3TuRHg--/YXBwaWQ9eXRhY2h5b247Y2g9MjgxMjtjdz01MDAwO2R4PTA7ZHk9MzcyO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-01/e05f7e90-3e72-11ea-99df-fe4bb0892449",
    "imageWebpSrc": "https://s1.yimg.com/lo/api/res/1.2/lu9GYaPGoifPPmGDJxUfog--/YXBwaWQ9eXR3ZnBhZ2U-/https://s1.yimg.com/uu/api/res/1.2/jhy5BICj.98lFA4a3TuRHg--/YXBwaWQ9eXRhY2h5b247Y2g9MjgxMjtjdz01MDAwO2R4PTA7ZHk9MzcyO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-01/e05f7e90-3e72-11ea-99df-fe4bb0892449.cf.webp",
    "link": "https://tw.news.yahoo.com/%E6%9C%AC%E6%97%A5-yahoo%E7%84%A6%E9%BB%9E%E9%99%B8%E5%AE%A2%E6%96%B7%E7%82%8A%E5%BE%8C-%E5%A2%BE%E4%B8%81%E5%81%B7%E7%AC%91-%E5%8D%97%E6%8A%95%E5%BF%83%E5%AF%92-073457271.html",
    "followLink": false,
    "title": "台確診病例納中國⋯我促世衛更正",
    "type": "story",
    "uuid": "81b59f1a-a9a3-3174-994b-a3f88b3e4a42"
  },
  {
    "comment": null,
    "imageSrc": "https://s.yimg.com/uu/api/res/1.2/PAqwZH6vOKrP2FQmLjXruw--/YXBwaWQ9eXRhY2h5b247Y2g9MjM5O2N3PTQyNDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://s.yimg.com/os/creatr-images/GLB/2017-08-14/93c7edd0-80c7-11e7-9413-0740cae646c9_iStock_000003018523XSmall.jpg",
    "imageWebpSrc": "https://s1.yimg.com/lo/api/res/1.2/xQ9vkz9eLCXMqc83A3PpVw--/YXBwaWQ9eXR3ZnBhZ2U-/https://s.yimg.com/uu/api/res/1.2/PAqwZH6vOKrP2FQmLjXruw--/YXBwaWQ9eXRhY2h5b247Y2g9MjM5O2N3PTQyNDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://s.yimg.com/os/creatr-images/GLB/2017-08-14/93c7edd0-80c7-11e7-9413-0740cae646c9_iStock_000003018523XSmall.jpg.cf.webp",
    "link": "https://tw.travel.yahoo.com/news/%E9%81%8E%E5%B9%B4%E5%A1%9E%E8%BB%8A%E4%B8%8D%E7%84%A1%E8%81%8A%E8%B6%85%E5%AF%A6%E7%94%A8%E8%BB%8A%E4%B8%8A%E7%8E%A9%E6%A8%82%E6%B3%95%E5%AF%B6%E9%99%AA%E4%BD%A0%E6%AE%BA%E6%99%82%E9%96%93-031130985.html",
    "followLink": false,
    "title": "塞車必備救星 少了它全都沒得玩",
    "type": "story",
    "uuid": "94ae1c54-3c80-30f3-8247-89a3c7c37ad7"
  },
  {
    "comment": {
      "detail": "我回想起，SARS時，大陸官員在WHO會議上對台灣採＂誰理你們＂的態度。",
      "nickname": "K",
      "profile": "https://s.yimg.com/gq/1777/40147150166_5af2d8_o.jpg",
      "count": 52
    },
    "imageSrc": "https://s1.yimg.com/uu/api/res/1.2/DRvrU3w.g3UsWkfVULSBrQ--/YXBwaWQ9eXRhY2h5b247Y2g9MTQwMDtjdz0yMDgxO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0zMDA7dz04MzA7/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/a94aee40-3e99-11ea-adff-6fe3b6204f7a",
    "imageWebpSrc": "https://s1.yimg.com/lo/api/res/1.2/EZakeXqzzKJKwy.FdQv6ww--/YXBwaWQ9eXR3ZnBhZ2U-/https://s1.yimg.com/uu/api/res/1.2/DRvrU3w.g3UsWkfVULSBrQ--/YXBwaWQ9eXRhY2h5b247Y2g9MTQwMDtjdz0yMDgxO2R4PTA7ZHk9MDtmaT11bGNyb3A7aD0zMDA7dz04MzA7/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/a94aee40-3e99-11ea-adff-6fe3b6204f7a.cf.webp",
    "link": "https://tw.news.yahoo.com/video/%E9%86%AB%E9%99%A2%E5%A1%9E%E7%88%86-%E6%97%A5%E8%BC%AA4%E7%8F%AD-%E6%AD%A6%E6%BC%A2%E9%86%AB%E7%94%9F-%E7%B4%AF%E5%B4%A9-%E9%A3%86%E9%AB%98%E5%B1%A4-055108107.html",
    "followLink": false,
    "title": "武漢醫護加班崩潰 通話怒飆高層",
    "type": "video",
    "uuid": "ff98be35-85bb-3057-8463-aba771bb7c80"
  },
  {
    "comment": {
      "detail": "大家都乖乖待在家裡頭打電動就好 打麻將還要四個人",
      "nickname": "一切有為法,如夢幻泡影,如露亦如電,應作如是觀",
      "profile": "https://s.yimg.com/gq/1756/40147164326_afa8df_o.jpg",
      "count": 21
    },
    "imageSrc": "https://s3.yimg.com/uu/api/res/1.2/ylz.rsqLKBn0BN0dbI0Gzg--/YXBwaWQ9eXRhY2h5b247Y2g9NDUyO2N3PTgwNDtkeD0yMjtkeT0wO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media.zenfs.com/zh-TW/ctwant_com_582/fd1d3c82f58e6b29fa3d006bb6585ca4",
    "imageWebpSrc": "https://s.yimg.com/lo/api/res/1.2/KSw.ejIBjY6I0HUiUhMGtw--/YXBwaWQ9eXR3ZnBhZ2U-/https://s3.yimg.com/uu/api/res/1.2/ylz.rsqLKBn0BN0dbI0Gzg--/YXBwaWQ9eXRhY2h5b247Y2g9NDUyO2N3PTgwNDtkeD0yMjtkeT0wO2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media.zenfs.com/zh-TW/ctwant_com_582/fd1d3c82f58e6b29fa3d006bb6585ca4.cf.webp",
    "link": "https://tw.news.yahoo.com/sars%E9%83%BD%E6%B2%92%E9%96%89%E9%A4%A8-%E5%8C%97%E4%BA%AC%E6%95%85%E5%AE%AE%E9%A6%96%E6%AC%A1%E9%96%89%E9%A4%A8-050100955.html",
    "followLink": false,
    "title": "抗SARS都沒這樣 北京故宮罕見閉館",
    "type": "story",
    "uuid": "a30fdf39-24b5-3e2f-a521-359798018641"
  },
  {
    "comment": {
      "detail": "今年的年好冷喔!(冷清)為啥呢?",
      "nickname": "Test",
      "profile": "https://s.yimg.com/gq/1746/29332403839_af81b0_o.jpg",
      "count": 21
    },
    "imageSrc": "https://s.yimg.com/uu/api/res/1.2/4Hy95YzMHxlNtRVtAGe.cw--/YXBwaWQ9eXRhY2h5b247Y2g9MzI5O2N3PTYwMDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/b3509480-3e80-11ea-bdb5-0696ab814b35",
    "imageWebpSrc": "https://s.yimg.com/lo/api/res/1.2/P8N22WJCoE8W49rXPBJQEg--/YXBwaWQ9eXR3ZnBhZ2U-/https://s.yimg.com/uu/api/res/1.2/4Hy95YzMHxlNtRVtAGe.cw--/YXBwaWQ9eXRhY2h5b247Y2g9MzI5O2N3PTYwMDtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/b3509480-3e80-11ea-bdb5-0696ab814b35.cf.webp",
    "link": "https://tw.news.yahoo.com/video/%E5%BD%B0%E5%8C%9629%E5%B9%B4%E8%9B%8B%E9%A4%85%E8%80%81%E5%BA%97%E5%B0%87%E6%AD%87%E6%A5%AD-%E6%B0%91%E7%9C%BE%E5%96%8A-%E5%8F%AF%E4%BB%A5%E4%B8%8D%E8%A6%81%E9%97%9C%E5%97%8E-063411210.html",
    "followLink": false,
    "title": "「可以別關嗎」29年古早味老店收了",
    "type": "video",
    "uuid": "e4850219-e355-32e9-8909-daec8fc546c9"
  },
  {
    "comment": {
      "detail": "官方慣性隱匿疫情、粉飾太平 , 疫情早就擴散 , 現在封城已經枉然了 !    \n尤其是 , 還拉著全世界一起下水 !",
      "nickname": "oldman",
      "profile": "https://s.yimg.com/gq/1721/38837678613_ebe081_o.jpg",
      "count": 219
    },
    "imageSrc": "https://s3.yimg.com/uu/api/res/1.2/k5xq5OKkcbjrOo9Eez0WSQ--/YXBwaWQ9eXRhY2h5b247Y2g9MjQ5O2N3PTQ0MjtkeD0wO2R5PTg0O2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media.zenfs.com/ko/setn.com.tw/393c38a4b03d142a8db782af4b3814e5",
    "imageWebpSrc": "https://s1.yimg.com/lo/api/res/1.2/cts5cokLnFfbiZSczuurhA--/YXBwaWQ9eXR3ZnBhZ2U-/https://s3.yimg.com/uu/api/res/1.2/k5xq5OKkcbjrOo9Eez0WSQ--/YXBwaWQ9eXRhY2h5b247Y2g9MjQ5O2N3PTQ0MjtkeD0wO2R5PTg0O2ZpPXVsY3JvcDtoPTMwMDt3PTgzMDs-/https://media.zenfs.com/ko/setn.com.tw/393c38a4b03d142a8db782af4b3814e5.cf.webp",
    "link": "https://tw.news.yahoo.com/%E6%AD%A6%E6%BC%A2%E5%B0%81%E5%9F%8E%E5%BE%8C%E7%9A%84%E5%B8%82%E6%B0%91%E7%94%9F%E6%B4%BB-%E8%B6%85%E5%B8%82-%E6%8E%83%E8%80%8C%E7%A9%BA-%E9%86%AB%E9%99%A2%E4%BA%BA%E6%BB%BF%E7%82%BA%E6%82%A3-%E5%83%8F%E6%98%AF-023001964.html",
    "followLink": false,
    "title": "武漢封城後⋯「像惡靈古堡一樣」",
    "type": "story",
    "uuid": "1a964599-c1ae-3eef-a851-8b73a4d31dca"
  },
  {
    "comment": {
      "detail": "有病",
      "nickname": "無忌",
      "profile": "https://s.yimg.com/gq/1756/40147164326_afa8df_o.jpg",
      "count": 2
    },
    "imageSrc": "https://s3.yimg.com/uu/api/res/1.2/BaaVFBVgnixXG_48t6aWBQ--/YXBwaWQ9eXRhY2h5b247Y2g9NjAyO2N3PTkxMjtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/34d9fa80-3e83-11ea-b6ff-6c02b46a4428",
    "imageWebpSrc": "https://s2.yimg.com/lo/api/res/1.2/X7S9WVSnxiliowbDq7hTOw--/YXBwaWQ9eXR3ZnBhZ2U-/https://s3.yimg.com/uu/api/res/1.2/BaaVFBVgnixXG_48t6aWBQ--/YXBwaWQ9eXRhY2h5b247Y2g9NjAyO2N3PTkxMjtkeD0wO2R5PTA7Zmk9dWxjcm9wO2g9MzAwO3c9ODMwOw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-01/34d9fa80-3e83-11ea-b6ff-6c02b46a4428.cf.webp",
    "link": "https://tw.tv.yahoo.com/%E4%B8%89%E7%94%9F%E4%B8%89%E4%B8%96%E6%9E%95%E4%B8%8A%E6%9B%B8-%E7%8D%A8%E5%AE%B6%E9%A0%90%E5%91%8A-081051301.html",
    "followLink": false,
    "title": "愛而不得三情斷 虐戀只求被記得",
    "type": "video",
    "uuid": "12628b04-cb30-3921-a68f-c839705466fa"
  }
];

const CarouselFeatures = (title, specialPrice, oriPrice ) => {
  return (
    <Body>
      <h2 align="center">
        Use{' '}
        <span
          css={`
            background: lightgray;
          `}
        >
          &nbsp;react-grid-carousel&nbsp;
        </span>{' '}
        to build product carousel
      </h2>
      <Row>
        <RowHead>Something here</RowHead>
        <CarouselContainer>
          <Carousel cols={5} showDots loop>
            {CarouselItems.map((val, i) => (
              <Carousel.Item key={i}>
                <Card>
                  <div>
                    <Title>{title}</Title>
                    <span>{specialPrice}</span>
                    <span>{oriPrice}</span>
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselContainer>
      </Row>
      <Code>
        {`<Carousel cols={5} showDots loop>
            {CarouselItems.map((val, i) => (
              <Carousel.Item key={i}>
                <Card>
                  <div>
                    <Title>{title}</Title>
                    <span>{specialPrice}</span>
                    <span>{oriPrice}</span>
                  </div>
                  <Mask />
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>`}
      </Code>
      <Reference>
        <h2 align="center">
          Product carousel on{' '}
          <a
            href="https://tw.buy.yahoo.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Yahoo! Shopping
          </a>
        </h2>

        <a
          href="https://i.imgur.com/LLv7S1g.png"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="https://i.imgur.com/LLv7S1g.png" />
        </a>
      </Reference>
    </Body>
  )
}

export default CarouselFeatures;