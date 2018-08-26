# hexo-theme-stage
舒适的Hexo主题
## 使用
### 安装
`git clone git@github.com:markyong/hexo-theme-stage.git themes/stage`  
修改根目录下`_config.yml`  
```
theme: stage
```
### 主题配置
themes文件夹下`_config.yml`
```
# 在header显示的句子可以在这里添加，主题在页面刷新时会随机显示一个
sentences:
- How goes the world width you?
# 这里可以添加个人链接
social:
  github: "https://github.com/markyong"
```
### 添加about页面
在根目录下source文件夹添加about目录，在about目录下新建index.md，里面内容可以这么写：
```
title: "About"
---
这里写你想说的...
```
### 添加标签云页面
在根目录下source文件夹添加tags目录，在tags目录里新建index.md，里面内容可以这么写：
```
title: "Tags"
layout: "tags"
type: "tags"
---
```
