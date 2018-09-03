# hexo-theme-stage
A refreshing and comfortable theme for Hexo.
## 安装
在Hexo根目录下
```
git clone git@github.com:markyong/hexo-theme-stage.git themes/stage
```
在Hexo根目录下，设置站点配置文件`_config.yml`
```
theme: stage
```
## 更新 
在主题stage文件夹下
```
git pull
```
## 配置
### 语言配置
修改站点配置文件`_config.yml`
```
language: en
# language: zh-CN
```
**其他根据官方文档配置**
### 主题配置
themes文件夹下，stage文件夹里`_config.yml`
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
