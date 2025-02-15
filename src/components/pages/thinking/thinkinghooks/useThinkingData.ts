export default function () {

  const ThinkingList: any = [
    {
      index: 0,
      thinking_id: 'life',
      thinking_title: '生命的意义',
      img_url: 'picture/ShanDong_travel/Day1/ShanDong_university.jpg',
      thinking_time: '2024年 12月 2日 星期一',
      thinking_discribe: '还没写好哦！',
      route_link: '/thinkingitem/life',
      str_num: 1093,
      music_url: 'music/org_bgm.mp3',
    },

  ]



  function getThinkingListById(id: string) {
    let ret = 0
    for (let i = 0; i < ThinkingList.length; i++) {
      if (id === ThinkingList[i].thinking_id) {
        // console.log("找到了")
        return ThinkingList[i]
      }
    }
    if (ret === 0) {
      return null
    }

  }
  return { ThinkingList, getThinkingListById }
}