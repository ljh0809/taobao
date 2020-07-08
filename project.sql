/*
Navicat MySQL Data Transfer

Source Server         : tab
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-07-08 21:18:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgpath` varchar(255) DEFAULT NULL,
  `smallpath` text,
  `price` varchar(255) DEFAULT NULL,
  `stock` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('1', '男鞋2020春季新款透气飞织运动休闲鞋时尚跑步鞋ins青年男潮鞋子', 'https://img.alicdn.com/imgextra/i3/1704064299/O1CN01tANAOs1hczGz3k4oj_!!1704064299.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i3/29848727/O1CN014NChOY2EL13Hquq2j_!!0-saturn_solar.jpg_220x220.jpg_.webp', '168.00', '100');
INSERT INTO `project` VALUES ('2', '男鞋春季潮鞋韩版潮流休闲板鞋百搭真皮男士小白鞋夏季透气白鞋子', 'https://img.alicdn.com/imgextra/i1/3432606295/O1CN01rCk63l1wN9osbjTNn_!!3432606295.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i2/800130493/O1CN01Ur8NSB1FVpqZFamuA_!!800130493.jpg_430x430q90.jpg', '158.00   ', '100');
INSERT INTO `project` VALUES ('3', '春季新款帆布鞋男2020韩版潮流百搭低帮布鞋男士一脚蹬休闲鞋板鞋', 'https://gd3.alicdn.com/imgextra/i3/2805940270/O1CN01IjFPUx1DrhWhSEikQ_!!2805940270.jpg', 'https://img.alicdn.com/imgextra/i3/2259671508/O1CN018lmLi11N0hqvOIB9J_!!2259671508.jpg_430x430q90.jpg', '89.00', '100');
INSERT INTO `project` VALUES ('4', '板鞋男韩版潮2020新款春季百搭网红抖音透气运动休闲网面潮鞋ins', 'https://img.alicdn.com/imgextra/i2/2259671508/O1CN018LAQU31N0hqvIvBj9_!!0-item_pic.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i3/3432606295/O1CN018mbhfc1wN9pGTOTGk_!!3432606295.jpg_430x430q90.jpg', '158.00   ', '100');
INSERT INTO `project` VALUES ('5', '男鞋夏季潮鞋2020年新款板鞋韩版潮男士内增高透气网面运动休闲鞋', 'https://img.alicdn.com/imgextra/i1/2206366687218/O1CN01jyLaj923BtNiQwd3W_!!2206366687218.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/419602243/O1CN01oHDh7m1SRKuQ7rWp7_!!419602243.jpg_430x430q90.jpg', '69.00', '100');
INSERT INTO `project` VALUES ('6', '男鞋夏季透气鞋子男潮鞋薄款帆布板鞋夏天运动韩版百搭男士休闲鞋', 'https://img.alicdn.com/imgextra/i3/3432606295/O1CN018mbhfc1wN9pGTOTGk_!!3432606295.jpg_430x430q90.jpg', 'https://gd4.alicdn.com/imgextra/i4/1610363089/O1CN01eVCkTv1Ygo2STnem9_!!1610363089.jpg', '138.00 ', '100');
INSERT INTO `project` VALUES ('7', '小白鞋男夏季透气男鞋百搭鞋子男夏天男士白鞋休闲鞋韩版潮流板鞋', 'https://img.alicdn.com/imgextra/i4/112017029/O1CN017UI8nq21nKXMDBSaQ_!!0-saturn_solar.jpg_220x220.jpg_.webp', 'https://gd1.alicdn.com/imgextra/i3/428002383/O1CN01GebhOX1TTSPZaHvcb_!!428002383.jpg', '138.00', '100');
INSERT INTO `project` VALUES ('8', '刀锋鞋男鞋春季2020新款网面跑步白鞋休闲百搭夏季透气运动鞋潮鞋', 'https://img.alicdn.com/imgextra/i2/17121450/O1CN010YWvs81Ma8pcFBbSa_!!0-saturn_solar.jpg_220x220.jpg_.webp', 'https://img.alicdn.com/imgextra/i4/2081448891/O1CN01Qye2W82FY80LmO5zN_!!2081448891.jpg_430x430q90.jpg', '158.00   ', '100');
INSERT INTO `project` VALUES ('9', '2020新款春季男鞋韩版潮流板鞋运动休闲透气百搭网面ins老爹潮鞋', 'https://gd3.alicdn.com/imgextra/i3/428002383/O1CN01xpYHuy1TTSPWm5nZ0_!!428002383.jpg_400x400.jpg', 'https://gd2.alicdn.com/imgextra/i4/1771715394/O1CN01WBs8Uv1piUtVnYchJ_!!1771715394.jpg_400x400.jpg', '69.00', '100');
INSERT INTO `project` VALUES ('10', '乔丹运动鞋男鞋春夏新款透气网面跑步鞋轻便休闲鞋耐磨男士旅游鞋', 'https://gd2.alicdn.com/imgextra/i2/1610363089/O1CN01YoLWuK1Ygo2PWIlci_!!1610363089.jpg', 'https://img.alicdn.com/imgextra/i2/2937185559/O1CN01d77Fov1qw4JzpNpWo_!!2937185559.jpg_430x430q90.jpg', '83.00', '100');
INSERT INTO `project` VALUES ('11', '老爹鞋男ins潮鞋网红2020新款春季大码鞋子男百搭增高运动鞋男鞋', 'https://gd2.alicdn.com/imgextra/i1/3710785029/O1CN01y0AaNH1n1KOZkPtt9_!!3710785029.jpg_400x400.jpg', 'https://img.alicdn.com/imgextra/i3/2933243756/O1CN01OBl39x1dcIA2sbLsJ_!!2933243756.jpg_430x430q90.jpg', '138.00', '100');
INSERT INTO `project` VALUES ('12', '男鞋春季百搭运动鞋子男潮鞋男士高帮潮流小白鞋夏季透气休闲板鞋', 'https://gd2.alicdn.com/imgextra/i4/818067255/O1CN01ygHhLT23Sq31lVoIa_!!818067255.jpg_400x400.jpg', 'https://gd4.alicdn.com/imgextra/i4/4024021471/O1CN01FOWLMM1MjlC7M6IIz_!!4024021471.jpg_400x400.jpg', '158.00', '100');
INSERT INTO `project` VALUES ('13', '男鞋2020新款真皮男士休闲皮鞋春夏季透气运动板鞋百搭旅游鞋子潮', 'https://img.alicdn.com/imgextra/i3/2201218665486/O1CN01RXGv7J1qOdOT2r6VR_!!0-https://img.alicdn.com/imgextra/i3/1646503501/O1CN01MXhsmq1bjVDMfHmXq_!!0-item_pic.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2201198709/O1CN010ShqoT2EClvPmSrcx_!!2201198709.jpg_430x430q90.jpg', '158.00', '100');
INSERT INTO `project` VALUES ('14', '中国风男鞋夏季磨砂皮鞋男士手工缝休闲男鞋系带软底复古牛皮鞋', 'https://gd1.alicdn.com/imgextra/i1/1771715394/O1CN01fRqIKj1piUtTT5f1R_!!https://gd3.alicdn.com/imgextra/i1/1031724114/O1CN01qxeWXd1gGG08JR8b6_!!1031724114.jpg', 'https://img.alicdn.com/imgextra/i3/2081448891/TB2PKAru9cqBKNjSZFgXXX_kXXa_!!2081448891.jpg_430x430q90.jpg', '138.00', '100');
INSERT INTO `project` VALUES ('15', '男鞋2020春季新款低帮鞋子男青年布鞋韩版男士休闲潮鞋透气板鞋男', 'https://gd3.alicdn.com/imgextra/i1/919717336/O1CN01JsOhUd243w7kjAtka_!!https://gd4.alicdn.com/imgextra/i2/236518989/O1CN01WsdHp62GH0ozd9qtv_!!236518989.jpg', 'https://img.alicdn.com/imgextra/i2/2201189206911/O1CN01mQdrRr20vHnhStBCl_!!2201189206911.jpg_430x430q90.jpg', '79.00', '100');
INSERT INTO `project` VALUES ('16', '男鞋2020春季新款潮鞋男士运动休闲鞋夏季青少年百搭透气帆布板鞋', 'https://gd1.alicdn.com/imgextra/i1/3117939959/O1CN01CTYOOo2NRH08TMXvg_!!3117939959.jpg_400x400.jpg', 'https://img.alicdn.com/imgextra/i1/699657114/O1CN01If5TKt22QGCJ6rS8z_!!699657114.jpg_430x430q90.jpg', '69.00   ', '100');
INSERT INTO `project` VALUES ('17', '跑道鞋潮牌男鞋春秋新品厚底增高老爹鞋百搭网红抖音真皮运动鞋男', 'https://img.alicdn.com/imgextra/i2/4092608135/O1CN01SY2kuD29xsa6yzPFC_!!4092608135.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i4/1821460855/O1CN01KamwfG1IBdBz9us2N_!!1821460855.jpg_430x430q90.jpg', '99.00', '100');
INSERT INTO `project` VALUES ('18', '驾车男鞋子男潮鞋春季2020新款低帮帆布鞋男韩版潮流透气休闲板鞋', 'https://gd1.alicdn.com/imgextra/i2/1012929238/O1CN01VpaLaq2I73RW5Rhdd_!!1012929238.jpg_400x400.jpg', 'https://img.alicdn.com/imgextra/i3/2943095259/O1CN01DSD0HU1oifP92591I_!!2943095259.jpg_430x430q90.jpg', '78.00', '100');
INSERT INTO `project` VALUES ('19', '20新款运动时尚休闲百搭透气韩版牛筋底小白鞋潮鞋帅气小伙子男鞋', 'https://gd3.alicdn.com/imgextra/i1/0/O1CN012OdJag1MW1Jy7IMUd_!!0-item_pic.jpg_400x400.jpg', 'https://gd3.alicdn.com/imgextra/i4/287657379/TB20pB_dEo09KJjSZFDXXb9npXa_!!287657379.jpg_400x400.jpg', '155.00', '100');
INSERT INTO `project` VALUES ('20', '男鞋夏季2020新款运动跑步透气飞织椰子鞋男潮流百搭休闲小白潮鞋', 'https://img.alicdn.com/imgextra/i1/2200770619951/O1CN01RMX2MN2NNbmwGUhFl_!!2200770619951.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i1/2959482674/O1CN01CQ7Vxa1VcjfhzePhT_!!2959482674.jpg_430x430q90.jpg', '68.00 ', '100');
INSERT INTO `project` VALUES ('21', 'NIKE耐克男鞋2020夏季新款运动鞋AIR MAX气垫鞋减震跑步鞋CD4165', 'https://img.alicdn.com/imgextra/i1/1993730769/O1CN013Odmfq1HYFAJnDyhe_!!0-item_pic.jpg_430x430q90.jpg', 'https://img.alicdn.com/imgextra/i2/2943095259/O1CN01yb79uR1oifUN0XICX_!!2943095259.png_430x430q90.jpg', '629.00', '100');
INSERT INTO `project` VALUES ('22', 'Nike/耐克正品PEGASUS TURBO SHIELD WP男子跑步鞋拒水 BQ1896', 'https://img.alicdn.com/imgextra/i1/738840638/O1CN011y2Yrr1GaFGpZVB0L_!!0-item_pic.jpg_430x430q90.jpg', 'https://gd1.alicdn.com/imgextra/i3/818067255/O1CN01QhmRn323Sq34wQkyv_!!818067255.jpg_400x400.jpg', '1409.00', '100');
