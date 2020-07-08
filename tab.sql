/*
Navicat MySQL Data Transfer

Source Server         : tab
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-07-08 21:04:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tab
-- ----------------------------
DROP TABLE IF EXISTS `tab`;
CREATE TABLE `tab` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tab
-- ----------------------------
INSERT INTO `tab` VALUES ('22', 'zhangsan', '123');
INSERT INTO `tab` VALUES ('23', 'lisi', '123');
INSERT INTO `tab` VALUES ('24', 'wangwu', '123');
INSERT INTO `tab` VALUES ('25', 'qianduan', '123123');
INSERT INTO `tab` VALUES ('27', 'lijiahao', '123');
INSERT INTO `tab` VALUES ('29', 'alex', '123');
INSERT INTO `tab` VALUES ('30', 'weixin', '123');
INSERT INTO `tab` VALUES ('31', 'weixin1', '123');
INSERT INTO `tab` VALUES ('32', 'weixin2', '123');
INSERT INTO `tab` VALUES ('33', 'jia', '123');
INSERT INTO `tab` VALUES ('34', 'wowowo', '123');
INSERT INTO `tab` VALUES ('35', 'jax', '111');
INSERT INTO `tab` VALUES ('36', 'jiaziran', '123');
