function CKakugenMsgMan()
{
   this.MSG_WAIT = 0;
   this.OFFSET_X = 48;
   this.OFFSET_Y = 46;
   this.FONT_W = 16;
   this.FONT_H = 16;
   this.MARGIN_W = 0;
   this.MARGIN_H = 8;
   this.m_mcScreen;
   this.m_szText001 = "";
   this.m_szText002 = "";
   this.m_szText003 = "";
   this.m_szMsg001 = "";
   this.m_szMsg002 = "";
   this.m_szMsg003 = "";
   this.m_nTextLen001 = 0;
   this.m_nTextLen002 = 0;
   this.m_nTextLen003 = 0;
   this.m_nCount = 0;
   this.m_nMsgWait = 0;
   this.m_bStart = false;
}
function PutC(mc, str)
{
   if("ア" == str)
   {
      mc.mcFont.gotoAndStop(2);
   }
   else if("イ" == str)
   {
      mc.mcFont.gotoAndStop(3);
   }
   else if("ウ" == str)
   {
      mc.mcFont.gotoAndStop(4);
   }
   else if("エ" == str)
   {
      mc.mcFont.gotoAndStop(5);
   }
   else if("オ" == str)
   {
      mc.mcFont.gotoAndStop(6);
   }
   else if("カ" == str)
   {
      mc.mcFont.gotoAndStop(7);
   }
   else if("キ" == str)
   {
      mc.mcFont.gotoAndStop(8);
   }
   else if("ク" == str)
   {
      mc.mcFont.gotoAndStop(9);
   }
   else if("ケ" == str)
   {
      mc.mcFont.gotoAndStop(10);
   }
   else if("コ" == str)
   {
      mc.mcFont.gotoAndStop(11);
   }
   else if("サ" == str)
   {
      mc.mcFont.gotoAndStop(12);
   }
   else if("シ" == str)
   {
      mc.mcFont.gotoAndStop(13);
   }
   else if("ス" == str)
   {
      mc.mcFont.gotoAndStop(14);
   }
   else if("セ" == str)
   {
      mc.mcFont.gotoAndStop(15);
   }
   else if("ソ" == str)
   {
      mc.mcFont.gotoAndStop(16);
   }
   else if("タ" == str)
   {
      mc.mcFont.gotoAndStop(17);
   }
   else if("チ" == str)
   {
      mc.mcFont.gotoAndStop(18);
   }
   else if("ツ" == str)
   {
      mc.mcFont.gotoAndStop(19);
   }
   else if("テ" == str)
   {
      mc.mcFont.gotoAndStop(20);
   }
   else if("ト" == str)
   {
      mc.mcFont.gotoAndStop(21);
   }
   else if("ナ" == str)
   {
      mc.mcFont.gotoAndStop(22);
   }
   else if("ニ" == str)
   {
      mc.mcFont.gotoAndStop(23);
   }
   else if("ヌ" == str)
   {
      mc.mcFont.gotoAndStop(24);
   }
   else if("ネ" == str)
   {
      mc.mcFont.gotoAndStop(25);
   }
   else if("ノ" == str)
   {
      mc.mcFont.gotoAndStop(26);
   }
   else if("ハ" == str)
   {
      mc.mcFont.gotoAndStop(27);
   }
   else if("ヒ" == str)
   {
      mc.mcFont.gotoAndStop(28);
   }
   else if("フ" == str)
   {
      mc.mcFont.gotoAndStop(29);
   }
   else if("ヘ" == str)
   {
      mc.mcFont.gotoAndStop(30);
   }
   else if("ホ" == str)
   {
      mc.mcFont.gotoAndStop(31);
   }
   else if("マ" == str)
   {
      mc.mcFont.gotoAndStop(32);
   }
   else if("ミ" == str)
   {
      mc.mcFont.gotoAndStop(33);
   }
   else if("ム" == str)
   {
      mc.mcFont.gotoAndStop(34);
   }
   else if("メ" == str)
   {
      mc.mcFont.gotoAndStop(35);
   }
   else if("モ" == str)
   {
      mc.mcFont.gotoAndStop(36);
   }
   else if("ヤ" == str)
   {
      mc.mcFont.gotoAndStop(37);
   }
   else if("ッ" == str)
   {
      mc.mcFont.gotoAndStop(38);
   }
   else if("ユ" == str)
   {
      mc.mcFont.gotoAndStop(39);
   }
   else if("ー" == str)
   {
      mc.mcFont.gotoAndStop(40);
   }
   else if("ヨ" == str)
   {
      mc.mcFont.gotoAndStop(41);
   }
   else if("ラ" == str)
   {
      mc.mcFont.gotoAndStop(42);
   }
   else if("リ" == str)
   {
      mc.mcFont.gotoAndStop(43);
   }
   else if("ル" == str)
   {
      mc.mcFont.gotoAndStop(44);
   }
   else if("レ" == str)
   {
      mc.mcFont.gotoAndStop(45);
   }
   else if("ロ" == str)
   {
      mc.mcFont.gotoAndStop(46);
   }
   else if("ワ" == str)
   {
      mc.mcFont.gotoAndStop(47);
   }
   else if("！" == str)
   {
      mc.mcFont.gotoAndStop(48);
   }
   else if("ヲ" == str)
   {
      mc.mcFont.gotoAndStop(49);
   }
   else if("？" == str)
   {
      mc.mcFont.gotoAndStop(50);
   }
   else if("ン" == str)
   {
      mc.mcFont.gotoAndStop(51);
   }
   else if("ガ" == str)
   {
      mc.mcFont.gotoAndStop(52);
   }
   else if("ギ" == str)
   {
      mc.mcFont.gotoAndStop(53);
   }
   else if("グ" == str)
   {
      mc.mcFont.gotoAndStop(54);
   }
   else if("ゲ" == str)
   {
      mc.mcFont.gotoAndStop(55);
   }
   else if("ゴ" == str)
   {
      mc.mcFont.gotoAndStop(56);
   }
   else if("ザ" == str)
   {
      mc.mcFont.gotoAndStop(57);
   }
   else if("ジ" == str)
   {
      mc.mcFont.gotoAndStop(58);
   }
   else if("ズ" == str)
   {
      mc.mcFont.gotoAndStop(59);
   }
   else if("ゼ" == str)
   {
      mc.mcFont.gotoAndStop(60);
   }
   else if("ゾ" == str)
   {
      mc.mcFont.gotoAndStop(61);
   }
   else if("ダ" == str)
   {
      mc.mcFont.gotoAndStop(62);
   }
   else if("ヂ" == str)
   {
      mc.mcFont.gotoAndStop(63);
   }
   else if("ヅ" == str)
   {
      mc.mcFont.gotoAndStop(64);
   }
   else if("デ" == str)
   {
      mc.mcFont.gotoAndStop(65);
   }
   else if("ド" == str)
   {
      mc.mcFont.gotoAndStop(66);
   }
   else if("バ" == str)
   {
      mc.mcFont.gotoAndStop(67);
   }
   else if("ビ" == str)
   {
      mc.mcFont.gotoAndStop(68);
   }
   else if("ブ" == str)
   {
      mc.mcFont.gotoAndStop(69);
   }
   else if("ベ" == str)
   {
      mc.mcFont.gotoAndStop(70);
   }
   else if("ボ" == str)
   {
      mc.mcFont.gotoAndStop(71);
   }
   else if("パ" == str)
   {
      mc.mcFont.gotoAndStop(72);
   }
   else if("ピ" == str)
   {
      mc.mcFont.gotoAndStop(73);
   }
   else if("プ" == str)
   {
      mc.mcFont.gotoAndStop(74);
   }
   else if("ペ" == str)
   {
      mc.mcFont.gotoAndStop(75);
   }
   else if("ポ" == str)
   {
      mc.mcFont.gotoAndStop(76);
   }
   else if("ャ" == str)
   {
      mc.mcFont.gotoAndStop(77);
   }
   else if("ュ" == str)
   {
      mc.mcFont.gotoAndStop(78);
   }
   else if("ョ" == str)
   {
      mc.mcFont.gotoAndStop(79);
   }
   else if("１" == str)
   {
      mc.mcFont.gotoAndStop(80);
   }
   else if("２" == str)
   {
      mc.mcFont.gotoAndStop(81);
   }
   else if("３" == str)
   {
      mc.mcFont.gotoAndStop(82);
   }
   else if("４" == str)
   {
      mc.mcFont.gotoAndStop(83);
   }
   else if("５" == str)
   {
      mc.mcFont.gotoAndStop(84);
   }
   else if("６" == str)
   {
      mc.mcFont.gotoAndStop(85);
   }
   else if("７" == str)
   {
      mc.mcFont.gotoAndStop(86);
   }
   else if("８" == str)
   {
      mc.mcFont.gotoAndStop(87);
   }
   else if("９" == str)
   {
      mc.mcFont.gotoAndStop(88);
   }
   else if("０" == str)
   {
      mc.mcFont.gotoAndStop(89);
   }
   else if("ァ" == str)
   {
      mc.mcFont.gotoAndStop(90);
   }
   else if("ィ" == str)
   {
      mc.mcFont.gotoAndStop(91);
   }
   else if("ゥ" == str)
   {
      mc.mcFont.gotoAndStop(90);
   }
   else if("ェ" == str)
   {
      mc.mcFont.gotoAndStop(91);
   }
   else if("ォ" == str)
   {
      mc.mcFont.gotoAndStop(92);
   }
   else if("。" == str)
   {
      mc.mcFont.gotoAndStop(93);
   }
   else if("、" == str)
   {
      mc.mcFont.gotoAndStop(94);
   }
   else
   {
      mc.mcFont.gotoAndStop(0);
   }
}
CKakugenMsgMan.prototype.init = function(mc, text001, text002, text003)
{
   this.m_nCount = 0;
   this.m_nMsgWait = 0;
   this.m_bStart = false;
   this.m_mcScreen = mc;
   this.m_szText001 = text001;
   this.m_szText002 = text002;
   this.m_szText003 = text003;
};
CKakugenMsgMan.prototype.quit = function()
{
   this.m_nCount = 0;
   this.m_nMsgWait = 0;
   this.m_bStart = false;
};
CKakugenMsgMan.prototype.exec = function()
{
   var _loc4_ = undefined;
   var _loc6_ = undefined;
   var _loc5_ = undefined;
   var _loc3_ = undefined;
   if(!this.m_bStart)
   {
      return undefined;
   }
   this.m_nMsgWait = this.m_nMsgWait + 1;
   if(this.MSG_WAIT < this.m_nMsgWait)
   {
      this.m_nMsgWait = 0;
      _loc6_ = this.OFFSET_X;
      _loc5_ = this.OFFSET_Y;
      _loc4_ = "";
      if(this.m_szMsg001.length < this.m_nTextLen001)
      {
         _loc3_ = this.m_szMsg001.length;
         _loc4_ = this.m_szText001.charAt(_loc3_);
         this.m_szMsg001 += _loc4_;
         _loc6_ += (this.FONT_W + this.MARGIN_W) * _loc3_;
         _loc5_ += (this.FONT_H + this.MARGIN_H) * 0;
      }
      else if(this.m_szMsg002.length < this.m_nTextLen002)
      {
         _loc3_ = this.m_szMsg002.length;
         _loc4_ = this.m_szText002.charAt(_loc3_);
         this.m_szMsg002 += _loc4_;
         _loc6_ += (this.FONT_W + this.MARGIN_W) * _loc3_;
         _loc5_ += (this.FONT_H + this.MARGIN_H) * 1;
      }
      else if(this.m_szMsg003.length < this.m_nTextLen003)
      {
         _loc3_ = this.m_szMsg003.length;
         _loc4_ = this.m_szText003.charAt(_loc3_);
         this.m_szMsg003 += this.m_szText003.charAt(this.m_szMsg003.length);
         _loc6_ += (this.FONT_W + this.MARGIN_W) * _loc3_;
         _loc5_ += (this.FONT_H + this.MARGIN_H) * 2;
      }
      else
      {
         this.m_bStart = false;
         trace("メッセージ終了\n");
      }
      if(_loc4_ != "")
      {
         var _loc7_ = "ActionFont" + this.m_nCount;
         var _loc8_ = {_x:_loc6_,_y:_loc5_,_visible:true};
         mc = this.m_mcScreen.attachMovie("mcActionFont",_loc7_,this.m_nCount,_loc8_);
         _root.PutC(mc,_loc4_);
         this.m_nCount = this.m_nCount + 1;
      }
   }
};
CKakugenMsgMan.prototype.start = function()
{
   this.m_nTextLen001 = this.m_szText001.length;
   this.m_nTextLen002 = this.m_szText002.length;
   this.m_nTextLen003 = this.m_szText003.length;
   this.m_szMsg001 = "";
   this.m_szMsg002 = "";
   this.m_szMsg003 = "";
   this.m_nCount = 0;
   this.m_nMsgWait = 0;
   this.m_bStart = true;
};
CKakugenMsgMan.prototype.isFinish = function()
{
   return !this.m_bStart;
};
var g_cMsgMan = new CKakugenMsgMan();
var g_Input001;
var g_Input002;
var g_Input003;
_root.g_Input001 = "";
_root.g_Input002 = "";
_root.g_Input003 = "";
