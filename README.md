## pixi-lib

###property: type

- SPRITE_MC 帧动画精灵
- SPRITE_IM 图片精灵
- SPRITE_SP 多纹理精灵

###function: setConfig 

- 工具方法用于设置PIXI对象属性

###property: math - 计算方法

- `rotateWithCentral`: `计算某个点按照一个中心点旋转一定角度后的左边点`
- `distance`: `计算两个点之间的距离`
- `makeIdentity`: `将坐标向量转化为单位向量`

###function: loadSprite - 加载资源，生成精灵

#### params

- `resourceUrl` `资源路径`
- `spriteType`: `精灵类型`
- `propertys`: `精灵属性`
- `actionFrames`: `用户多纹理类型`
- `cb`: `加载资源后的回调` --> `参数为精灵对象`

### function: loadResource

#### params

- `resourceUrl`: `资源的路径`
- `cb`: `加载资源后的回调` --> `参数为精灵对象`
 
### function: getTextures - 获取纹理

#### params

- `spriteName`: `精灵键名` 

### function: getSp - 获取多纹理精灵

#### params
- `config`: `精灵属性设置`
- `actions`: `精灵动作的数组`

###### return: 多动作精灵对象
###### 更多:
多纹理精灵 extense PIXI.MoiveClicp
额外function: playAction(index,loop,isKeepEnd)

### function: getMc - 获取帧动画精灵PIXI.MoiveClicp

### function: getIm - 获取图片精灵PIXI.Sprite

### function: createRender - 创建渲染器

#### params
- `container`: `canvas的父节点`
- `config`：`高宽的设置`

#### return: 渲染PIXI.Container的容器

### function: createLoder - 创建加载器

#### params

- `config`: `设置纹理目录前缀`

#### return: 加载器

###### 更多：
加载器 loader

`function add(spriteNames,postFix,dir)`

###### params

- `spriteNames`: `精灵键名数组`
- `postFix`: `资源后缀`
- `dir`: `资源目录次级目录`

`function load(cb)`

###### params

- `cb`: `加载结束后回调`

