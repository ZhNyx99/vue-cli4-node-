// 项目的中间键
let express = require('express')
let app = express()

app.all('*',function (req,res,next){
  // 任何网址都可以访问
  res.header("Access-Control-Allow-Origin","*")
  // 允许的请求方式
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  // X-Requested-With,是普通请求,还是ajax请求
  res.header("Access-Control-Allow-Headers","X-Requested-With")
  res.header("Content-Type","application/json;charset=utf-8")
  next()
})
// 搜索
app.get('/search',(req,res) => {

  console.log(req.query.search_key)

  let _searchKey = req.query.search_key

  // 临时商品,先把流程走通
  let _tempGoods = [{
    name:'好看的男装',
    price:99
  },{
    name:'美丽的女装',
    price:66
  },{
    name:'可爱的童装',
    price:88
  },{
    name:'干净的工作服',
    price:77
  }]

  // 过滤出结果
  let _filterGoods = _tempGoods.filter(n => {
    return n.name.indexOf(_searchKey) !== -1
  })

  // 因为filter只返回结果为true的
  // 只返回一个结果
  let _resultObj = _filterGoods.length > 0 ? _filterGoods[0] : {msg: '没有找到结果'}

  res.send(_resultObj)
  // 本意，是要在这个中间件里去操作mysql的crud
  // 写一些假数据,用于模拟收索过程,
})

// 请求导航栏
app.get('/get_TabBtn_list',(req,res) => {
  let _d = ['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','严选全球','众筹']
  res.send( _d )
})

// 轮播图
app.get('/get_swipe_img',(req,res) => {
  let _n = [
    'https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/195499737e4c86964fc5ba16a3af484c.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/43545a96cf86a70c72037094982fa51d.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
    'https://yanxuan.nosdn.127.net/6bde94bfe94e65253e7bc636c225d23e.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
  ]
  res.send(_n)
})

app.listen(3344,() => {
  console.log('高仿网易严选第二版,中间件,已经启动!')
})