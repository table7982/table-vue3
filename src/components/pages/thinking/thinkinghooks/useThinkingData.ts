export default function () {

  const ThinkingList: any = [
    {
      index: 0,
      thinking_id: 'life',
      thinking_title: '生命的意义',
      img_url: 'picture/thinking/point.png',
      thinking_time: '2024年 2月 17日 星期一',
      thinking_discribe: '这是我的答案，我也想听听你的答案。',
      route_link: '/thinkingitem/life',
      str_num: 3438,
      music_url: 'music/a_long_road.mp3',
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