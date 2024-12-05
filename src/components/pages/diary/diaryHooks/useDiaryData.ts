export default function () {
  const diary_img_url_id03 = new URL('../../../../../static/sliderMain.png', import.meta.url).href
  const diary_img_url_id02 = new URL('../../../../../static/SuStation.jpg', import.meta.url).href
  const diary_img_url_id01 = new URL('../../../../../static/SuPicture.jpg', import.meta.url).href

  const DiaryList: any = [
    { diary_id: 'id03', diary_title: '写点什么', img_url: diary_img_url_id03, diary_time: '2024年 12月 2日 星期一', diary_discribe: '为什么要做这个网站？', route_link: '/diaryitem/id03' },
    { diary_id: 'id02', diary_title: '苏州一日行', img_url: diary_img_url_id02, diary_time: '2024年 11月 23日 星期六', diary_discribe: '特种兵之速通苏州，“月落乌啼霜满天~”.', route_link: '/diaryitem/id02' },
    { diary_id: 'id01', diary_title: '关于设计', img_url: diary_img_url_id01, diary_time: '2025年 7月 1日 星期二', diary_discribe: '给秋天一个约定，请春天来见证。', route_link: '/diaryitem/id01' },
  ]

  function getDiaryListById(id: string) {
    let ret = 0
    for (let i = 0; i < DiaryList.length; i++) {
      // console.log('********')
      // console.log(i)
      // console.log(id)
      // console.log(DiaryList[i].diary_id)
      // console.log('********')
      if (id === DiaryList[i].diary_id) {
        console.log("找到了")
        return DiaryList[i]
        ret = 1
      }
    }
    if (ret === 0) {
      return null
    }

  }
  return { DiaryList, getDiaryListById }
}