export default function () {
  const diary_img_url_id03 = new URL('../../../../../static/sliderMain.png', import.meta.url).href
  const diary_img_url_id02 = new URL('../../../../../static/SuStation.jpg', import.meta.url).href
  const diary_img_url_id01 = new URL('../../../../../static/SuPicture.jpg', import.meta.url).href

  const DiaryList: any = [
    {
      index: 0,
      diary_id: 'id03',
      diary_title: '写点什么',
      img_url: diary_img_url_id03,
      diary_time: '2024年 12月 2日 星期一',
      diary_discribe: '为什么要做这个网站？',
      route_link: '/diaryitem/id03',
      str_num: 1093,
      music_url: 'music/org_bgm.mp3',
    },
    {
      index: 1,
      diary_id: 'id02',
      diary_title: '苏州一日行',
      img_url: diary_img_url_id02,
      diary_time: '2024年 11月 23日 星期六',
      diary_discribe: '特种兵之速通苏州，“月落乌啼霜满天~”.',
      route_link: '/diaryitem/id02',
      str_num: 2866,
      music_url: 'music/su_music.mp3',
    },
    {
      index: 2,
      diary_id: 'id01',
      diary_title: '误入设计',
      img_url: 'picture/about_design/about_design_cover.png',
      diary_time: '2024年 12月 27日 星期五',
      diary_discribe: '理科生“误入”设计行业。',
      route_link: '/diaryitem/id01',
      str_num: 3043,
      music_url: 'music/Fractures.mp3',
    },
    {
      index: 3,
      diary_id: 'ShanDong_travel_Day1',
      diary_title: '山东之旅—山大行',
      img_url: 'picture/ShanDong_travel/Day1/ShanDong_university.jpg',
      diary_time: '2024年 12月 29日 星期日',
      diary_discribe: '落地济南，夜游山大；学无止境，气有浩然！',
      route_link: '/diaryitem/ShanDong_travel_Day1',
      str_num: 900,
      music_url: 'music/know_me.mp3',
    },
    {
      index: 4,
      diary_id: 'ShanDong_travel_Day2',
      diary_title: '山东之旅—大明湖',
      img_url: 'picture/ShanDong_travel/Day2/ChaoRan_building.jpg',
      diary_time: '2024年 12月 30日 星期一',
      diary_discribe: '日落千佛山，夜游大明湖。',
      route_link: '/diaryitem/ShanDong_travel_Day2',
      str_num: 847,
      music_url: 'music/counting_stars.mp3',
    },
    {
      index: 5,
      diary_id: 'ShanDong_travel_Day3',
      diary_title: '山东之旅—跨年',
      img_url: 'picture/ShanDong_travel/Day3/fly_balloon_rotate.jpg',
      diary_time: '2024年 12月 31日 星期二',
      diary_discribe: '泉城广场，万人跨年。',
      route_link: '/diaryitem/ShanDong_travel_Day3',
      str_num: 1190,
      music_url: 'music/Normal_No_More.mp3',
    },
    {
      index: 6,
      diary_id: 'ShanDong_travel_Day4',
      diary_title: '山东之旅—趵突泉',
      img_url: 'picture/ShanDong_travel/Day4/Bao_gate.jpg',
      diary_time: '2024年 1月 1日 星期三',
      diary_discribe: '酒店惊魂，游览趵突泉。',
      route_link: '/diaryitem/ShanDong_travel_Day4',
      str_num: 808,
      music_url: 'music/she.mp3',
    },
    {
      index: 7,
      diary_id: 'ShanDong_travel_Day5a',
      diary_title: '山东之旅—泰山行(上)',
      img_url: 'picture/ShanDong_travel/Day5a/mid_sky_gate.jpg',
      diary_time: '2024年 1月 2日 星期四',
      diary_discribe: '行至泰山，至中天门',
      route_link: '/diaryitem/ShanDong_travel_Day5a',
      str_num: 1250,
      music_url: 'music/League_of_Legends.mp3',
    },
    {
      index: 8,
      diary_id: 'ShanDong_travel_Day5b',
      diary_title: '山东之旅—泰山行(下)',
      img_url: 'picture/ShanDong_travel/Day5b/cover.jpg',
      diary_time: '2024年 1月 2日 星期四',
      diary_discribe: '登绝顶，赏绝色。',
      route_link: '/diaryitem/ShanDong_travel_Day5b',
      str_num: 1388,
      music_url: 'music/Liquid_Cinema.mp3',
    },
  ]



  function getDiaryListById(id: string) {
    let ret = 0
    for (let i = 0; i < DiaryList.length; i++) {
      if (id === DiaryList[i].diary_id) {
        // console.log("找到了")
        return DiaryList[i]
      }
    }
    if (ret === 0) {
      return null
    }

  }
  return { DiaryList, getDiaryListById }
}