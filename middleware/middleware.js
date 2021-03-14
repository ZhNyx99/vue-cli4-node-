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


app.listen(3344,() => {
  console.log('高仿网易严选第二版,中间件,已经启动!')
})