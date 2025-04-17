function JumpUpDispDemo(demo_no)
{
   _root.g_nDemoNo = demo_no;
   switch(_root.g_nDemoNo)
   {
      case _root.UP_DEMO_NORMAL:
         _root._parent.mcDispUp.gotoAndPlay("001_basic_01");
         break;
      case _root.UP_DEMO_CHAIN_1:
         _root._parent.mcDispUp.gotoAndPlay("002_chain_01");
         break;
      case _root.UP_DEMO_CHAIN_2:
         _root._parent.mcDispUp.gotoAndPlay("003_chain_02");
         break;
      case _root.UP_DEMO_CHAIN_3:
         _root._parent.mcDispUp.gotoAndPlay("004_chain_03");
         break;
      case _root.UP_DEMO_CHAIN_END:
         _root._parent.mcDispUp.gotoAndPlay("005_chain_end");
         break;
      case _root.UP_DEMO_NOISE:
         _root._parent.mcDispUp.gotoAndPlay("008_noise_01");
   }
}
function SetNextBlockType(n_next_block_type)
{
   switch(n_next_block_type)
   {
      case _root.BLOCK_TYPE_0:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_00");
         break;
      case _root.BLOCK_TYPE_1:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_01");
         break;
      case _root.BLOCK_TYPE_2:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_02");
         break;
      case _root.BLOCK_TYPE_3:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_03");
         break;
      case _root.BLOCK_TYPE_4:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_04");
         break;
      case _root.BLOCK_TYPE_5:
         _root.mcSprite0.mcNextBlock.gotoAndPlay("next_05");
   }
}
function SetEntryBlockType(n_entry_block_type)
{
   switch(n_entry_block_type)
   {
      case _root.BLOCK_TYPE_0:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_00");
         break;
      case _root.BLOCK_TYPE_1:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_01");
         break;
      case _root.BLOCK_TYPE_2:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_02");
         break;
      case _root.BLOCK_TYPE_3:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_03");
         break;
      case _root.BLOCK_TYPE_4:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_04");
         break;
      case _root.BLOCK_TYPE_5:
         _root.mcSprite0.mcEntryBlock.gotoAndPlay("entry_05");
   }
}
function updateGameInfo()
{
   if(_root.UP_DEMO_NONE != _root.g_nDemoNo)
   {
      switch(_root.g_nDemoNo)
      {
         case _root.UP_DEMO_NORMAL:
            _root._parent.mcDispUp.gotoAndPlay("001_basic_01");
            break;
         case _root.UP_DEMO_CHAIN_1:
            _root._parent.mcDispUp.gotoAndPlay("002_chain_01");
            break;
         case _root.UP_DEMO_CHAIN_2:
            _root._parent.mcDispUp.gotoAndPlay("003_chain_02");
            break;
         case _root.UP_DEMO_CHAIN_3:
            _root._parent.mcDispUp.gotoAndPlay("004_chain_03");
            break;
         case _root.UP_DEMO_CHAIN_END:
            _root._parent.mcDispUp.gotoAndPlay("005_chain_end");
            break;
         case _root.UP_DEMO_NOISE:
            _root._parent.mcDispUp.gotoAndPlay("008_noise_01");
      }
      _root.g_nDemoNo = _root.UP_DEMO_NONE;
   }
}
function CInputManager()
{
   this.m_bOld = [0,0,0,0,0,0];
   this.m_bNormal = [0,0,0,0,0,0];
   this.m_bTrigger = [0,0,0,0,0,0];
   this.m_bTriggerRep = [0,0,0,0,0,0];
   this.m_nRepCount = [0,0,0,0,0,0];
}
function CTrionBlockManager(mc)
{
   this.m_mcBlock = mc;
   this.m_nBlockType = _root.BLOCK_TYPE_0;
   this.m_nBlockDir = _root.BLOCK_DIR_0;
   this.m_nBlockX = 0;
   this.m_nBlockY = 0;
   this.gotoBlockLabel();
}
function CTrionChainGuaid(mc)
{
   this.m_mcBlock = mc;
}
function CTrionManagerGameStart(obj)
{
   this.m_cTrionCtx = obj;
   this.m_nCount = 0;
   props = {_x:100,_y:80,_visible:false};
   this.m_mcLogo = _root.mcSprite0.attachMovie("mcGameStart","GameStartLogo",1,props);
}
function CTrionManagerGameClear(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcLogo = mc;
   this.m_bEnable = false;
}
function CTrionManagerGameOver(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcLogo = mc;
   this.m_bEnable = false;
}
function CTrionManagerGameLevelUp(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcLevelUp = mc;
   this.m_nCount = 0;
   this.m_bStart = false;
}
function CTrionManagerBlockToOjyamaEffect(obj)
{
   this.m_cTrionCtx = obj;
   this.m_bFinish = true;
   this.m_bFirstBlock = false;
   this.m_nBlockCheckY = 0;
   this.m_anBlockCheckX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   this.m_abBlockCheck = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
}
function CTrionManagerGameOverBlockEffect(obj)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = _root.mcSprite1;
   this.m_cOyamaEffect = new CTrionManagerBlockToOjyamaEffect(obj);
   this.m_bFinish = true;
   this.m_asBlockList = [];
}
function CTrionManagerChainEffectStar(obj)
{
   this.m_cTrionCtx = obj;
   this.m_anStarList = [];
   this.m_mcParent = _root.mcSprite0.mcChainEffStar;
}
function CTrionManagerChainEffect(obj, mcEff, mcEffBlock)
{
   this.m_cTrionCtx = obj;
   this.m_mcChainEff = mcEff;
   this.m_mcChainEffBlock = mcEffBlock;
   this.m_nChainEffTimer = 0;
   this.m_nChainBlockEffTimer = 0;
   this.m_nChainCount = 0;
   this.m_anChainList = [];
   this.m_mcChainEff._visible = false;
   this.m_cEffStar = new CTrionManagerChainEffectStar(obj);
}
function CTrionManagerChainToCoinEffect(obj)
{
   this.m_cTrionCtx = obj;
   this.m_eCoinType = _root.BLOCK_TYPE_COIN_1;
   this.m_bFinish = true;
   this.m_bFirstChainBlock = false;
   this.m_nBlockCheckY = 0;
   this.m_anBlockCheckX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   this.m_abChainCheck = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
}
function CTrionManagerChainBreakCoinCounter(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_bEnable = false;
   this.m_nPutFrame = 0;
   this.m_nCoinCount = 0;
   this.m_eCoinType = _root.BLOCK_TYPE_COIN_1;
   this.m_nCoinValue = _root.COIN_BRONZE;
   this.m_mcParent._visible = false;
}
function CTrionManagerChainBreakEffect(obj)
{
   this.m_cTrionCtx = obj;
   this.m_bFinish = true;
   this.m_mcParent = _root.mcSprite0.mcCoinFall;
   this.m_anChainTmpList = [];
   this.m_anChainSprite = [];
   this.m_cCoinCounter = new CTrionManagerChainBreakCoinCounter(obj,_root.mcSprite0.mcCoinCounter);
}
function CTrionManagerPerfectEffect(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_bFinish = true;
   this.m_asUnit = [];
}
function CTrionManagerCoinShower(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_bEnable = false;
   this.m_bFinish = true;
   this.m_nDepth = 1;
   this.m_asCoins = [];
}
function CTrionManagerShootingStar(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_fRate = 0;
   this.m_asStar = [];
   this.m_asStar.push(this.m_mcParent.mcShooringStar01);
   this.m_asStar.push(this.m_mcParent.mcShooringStar02);
   this.m_asStar.push(this.m_mcParent.mcShooringStar03);
   this.m_asStar.push(this.m_mcParent.mcShooringStar04);
   this.m_asStar.push(this.m_mcParent.mcShooringStar05);
}
function CTrionManagerShipProgressMeter(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcMeter = mc;
   this.m_mcShip = this.m_mcMeter.mcShip;
   this.m_nCount = 0;
   this.m_mcMeter._visible = false;
}
function CTrionManagerDangerEffect(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_bEnable = false;
   this.m_nMoveCount = 0;
   this.m_nBaseX = 128;
   this.m_nBaseY = 128;
   this.m_mcParent._visible = false;
}
function CTrionManagerGameTimer(obj)
{
   this.m_cTrionCtx = obj;
   this.m_nGameTimerFrame = 0;
   this.m_nInitTimerFrame = 0;
   this.m_nSlowCount = 0;
}
function CTrionManagerGameMissionShipInfo(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_nFirstPosY = this.m_mcParent._y;
   this.m_nAddY = 0;
   this.m_nDepth = 1;
   this.m_asPlanet = [];
   this.m_asDistNum = [];
   this.m_asMeter = [];
}
function CTrionManagerMissionBooster(obj, mc)
{
   this.m_cTrionCtx = obj;
   this.m_mcParent = mc;
   this.m_nBoosterCount = 0;
   this.m_nAddWait = 0;
   this.m_asBooster = [];
}
function CTrionManagerGameMissionManager(obj)
{
   this.m_cTrionCtx = obj;
   this.m_nScore = 0;
   this.m_nScoreAdd = 0;
   this.m_nChainCount = 0;
   this.m_nChainUpCount = 0;
   this.m_bLevelUp = false;
   this.m_fShipSpeedRate = 0;
   this.m_nSpeedDownCount = 0;
   this.m_cShipInfo = new CTrionManagerGameMissionShipInfo(obj,_root.mcSprite3.mcShipInfo.mcInfo);
   this.m_cBooster = new CTrionManagerMissionBooster(obj,_root.mcSprite3.mcShipInfo);
   _root.mcSprite3.mcShipInfo._y = 0;
}
function CGameLevelTable(obj)
{
   this.m_cTrionCtx = obj;
   this.m_asGameLevelTable = [{m_nScore:0,m_nTimer:0,m_BlockRate1:0,m_BlockRate2:0,m_BlockRate3:0,m_BlockRate4:0,m_BlockRate5:0,m_nSpeedLow:0,m_nSpeedHi:0,m_nChainBreakLow:0,m_nChainBreakHi:0},{m_nScore:1000,m_nTimer:550,m_BlockRate1:50,m_BlockRate2:50,m_BlockRate3:0,m_BlockRate4:0,m_BlockRate5:0,m_nSpeedLow:240,m_nSpeedHi:60,m_nChainBreakLow:600,m_nChainBreakHi:6},{m_nScore:1020,m_nTimer:540,m_BlockRate1:20,m_BlockRate2:40,m_BlockRate3:40,m_BlockRate4:0,m_BlockRate5:0,m_nSpeedLow:237,m_nSpeedHi:60,m_nChainBreakLow:600,m_nChainBreakHi:6},{m_nScore:1040,m_nTimer:530,m_BlockRate1:20,m_BlockRate2:30,m_BlockRate3:25,m_BlockRate4:25,m_BlockRate5:0,m_nSpeedLow:234,m_nSpeedHi:59,m_nChainBreakLow:600,m_nChainBreakHi:6},{m_nScore:1060,m_nTimer:520,m_BlockRate1:25,m_BlockRate2:25,m_BlockRate3:20,m_BlockRate4:20,m_BlockRate5:10,m_nSpeedLow:231,m_nSpeedHi:59,m_nChainBreakLow:600,m_nChainBreakHi:6}];
}
function CTrionManager()
{
   this.m_nPhase = _root.PLAYER_PHASE_NONE;
   this.m_bEnable = false;
   this.m_bChain = false;
   this.m_bGameClear = false;
   this.m_bGameOver = false;
   this.m_nGameLevel = _root.GAME_LEVEL_MIN;
   this.m_nCoin = 0;
   this.m_nScoreAdd = 0;
   this.m_nScoreRemain = 0;
   this.m_bVisibleOperate = false;
   this.m_nBlockX = 0;
   this.m_nBlockY = 0;
   this.m_nBlockOffsetX = 0;
   this.m_nBlockOffsetY = 0;
   this.m_eBlockType = _root.BLOCK_TYPE_0;
   this.m_eBlockDir = _root.BLOCK_DIR_0;
   this.m_nBlockDownCount = 0;
   this.m_nChainCountFrame = 0;
   this.m_bChainBreakTimerOver = false;
   this.m_nEntryBlockNumOfLevel = 0;
   this.m_anBlockNextNumber = [0,0];
   this.m_nChainTotalCount = 0;
   this.m_nWait = 0;
   this.m_nBGScrollY = 0;
   this.m_cMyBlock = new CTrionBlockManager(_root.mcSprite2.mcMyBlock);
   this.m_cShadowBlock = new CTrionBlockManager(_root.mcSprite2.mcShadowBlock);
   this.m_cChainGuaid = new CTrionChainGuaid(_root.mcSprite0.mcChainGuaid);
   this.m_cGameStart = new CTrionManagerGameStart(this);
   this.m_cGameClear = new CTrionManagerGameClear(this,_root.mcSprite0.mcGameClear);
   this.m_cGameOver = new CTrionManagerGameOver(this,_root.mcSprite0.mcGameOver);
   this.m_cGameOverEffect = new CTrionManagerGameOverBlockEffect(this);
   this.m_cLevelUp = new CTrionManagerGameLevelUp(this,_root.mcSprite0.mcLevelUp);
   this.m_cChainEffect = new CTrionManagerChainEffect(this,_root.mcSprite0.mcChainEff,_root.mcSprite0.mcChainEffBlock);
   this.m_cChainToCoinEffect = new CTrionManagerChainToCoinEffect(this);
   this.m_cChainBreakEffect = new CTrionManagerChainBreakEffect(this);
   this.m_cPerfectEffect = new CTrionManagerPerfectEffect(this,_root.mcSprite0.mcPerfect);
   this.m_cCoinShower = new CTrionManagerCoinShower(this,_root.mcSprite0.mcCoinShower);
   this.m_cShootingStar = new CTrionManagerShootingStar(this,_root.mcSprite0.mcShootingStar);
   this.m_mShipProgressMeter = new CTrionManagerShipProgressMeter(this,_root.mcSprite0.mcProgress);
   this.m_cDangerEffect = new CTrionManagerDangerEffect(this,_root.mcSprite0.mcDanger);
   this.m_cGameTimer = new CTrionManagerGameTimer(this);
   this.m_cMissionMgr = new CTrionManagerGameMissionManager(this);
   this.m_cGameLevelTable = new CGameLevelTable(this);
   this.m_anBlockData = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
   this.m_anChainBlockCheck = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
   this.m_anBlockOffsetPos = [[[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0]]],[[[-1,0],[0,0],[1,0]],[[0,-1],[0,0],[0,1]],[[1,0],[0,0],[-1,0]],[[0,1],[0,0],[0,-1]]],[[[0,0],[0,-1],[1,0]],[[0,0],[1,0],[0,1]],[[0,0],[0,1],[-1,0]],[[0,0],[-1,0],[0,-1]]],[[[0,0],[-1,-1],[1,0]],[[0,0],[1,-1],[0,1]],[[0,0],[1,1],[-1,0]],[[0,0],[-1,1],[0,-1]]],[[[0,0],[-1,0],[1,-1]],[[0,0],[0,-1],[1,1]],[[0,0],[1,0],[-1,1]],[[0,0],[0,1],[-1,-1]]],[[[0,-1],[-1,0],[1,0]],[[1,0],[0,-1],[0,1]],[[0,1],[1,0],[-1,0]],[[-1,0],[0,1],[0,-1]]]];
}
function CBG0Manager(mc)
{
   this.m_mcBG0 = mc;
   this.m_cName = "Chain";
}
function CBG1Manager(mc)
{
   this.m_mcBG1 = mc;
   this.m_cName = "Block";
}
function CSoundManager(mcSE, mcBGM)
{
   this.m_mcSoundSE = mcSE;
   this.m_mcSoundBGM = mcBGM;
   this.m_cSoundSE = new Sound(this.m_mcSoundSE);
   this.m_cSoundBGM = new Sound(this.m_mcSoundBGM);
   this.m_nBGMVolume = 100;
   this.m_nBGMFadeOutRate = 0;
   this.m_asLabel = [];
   this.m_nBeforeID = 0;
   this.m_cSoundBGM.onLoad = function(success)
   {
      if(success)
      {
         this.start();
      }
   };
   this.m_cSoundBGM.onSoundComplete = function()
   {
      trace("BGM Play Finish..");
      this.start();
   };
}
function GameMain()
{
   if(_root.g_cTrionMgr.isEnable())
   {
      _root.g_cInputMgr.updateInput();
      _root.g_cTrionMgr.exec();
      updateAfterEvent();
      if(_root.g_cTrionMgr.isFinish())
      {
         trace("Game Finish...............................................");
         clearInterval(_root.g_nIntervalID);
         _root.g_cTrionMgr.quit();
         _root._parent._parent.gotoAndPlay("l_kattene");
      }
   }
}
var DS_FPS = 60;
var FLASH_FPS = 12;
var FPS = 60;
var FPS_RATE = 1;
var SCREEN_W = 256;
var SCREEN_H = 192;
var OFFSET_X = 8;
var OFFSET_Y = -40;
var BLOCK_W = 16;
var BLOCK_H = 16;
var BLOCK_BUF_W = 9;
var BLOCK_BUF_H = 14;
var BLOCK_GAME_OVER_LINE = 3;
var BLOCK_UNIT_NUM = 3;
var CHECK_RANGE_3x3 = 3;
var CHECK_CHAIN_BLOCK_NUM = 9;
var CHAIN_EFF_FRAME = 5;
var CHAIN_BLOCK_EFF_FRAME = Math.floor(15 * _root.FLASH_FPS / _root.FPS);
var GAME_LEVEL_MIN = 1;
var GAME_LEVEL_MAX = 4;
var GAME_CLEAR_LEVEL = 4;
var BLOCK_TYPE_0 = 0;
var BLOCK_TYPE_1 = 1;
var BLOCK_TYPE_2 = 2;
var BLOCK_TYPE_3 = 3;
var BLOCK_TYPE_4 = 4;
var BLOCK_TYPE_5 = 5;
var BLOCK_TYPE_OJYAMA = 6;
var BLOCK_TYPE_CHAIN = 7;
var BLOCK_TYPE_COIN_1 = 8;
var BLOCK_TYPE_COIN_2 = 9;
var BLOCK_TYPE_COIN_3 = 10;
var BLOCK_TYPE_COIN_4 = 11;
var BLOCK_TYPE_DUMMY = 12;
var BLOCK_DIR_0 = 0;
var BLOCK_DIR_1 = 1;
var BLOCK_DIR_2 = 2;
var BLOCK_DIR_3 = 3;
var BLOCK_DIR_MAX = 4;
var COIN_DIAMOND_CHAIN_COUNT = 60;
var COIN_GOLD_CHAIN_COUNT = 40;
var COIN_SILVER_CHAIN_COUNT = 20;
var COIN_BRONZE = 1;
var COIN_SILVER = 5;
var COIN_GOLD = 10;
var COIN_DIAMOND = 50;
var UP_DEMO_NONE = 0;
var UP_DEMO_NORMAL = 1;
var UP_DEMO_CHAIN_1 = 2;
var UP_DEMO_CHAIN_2 = 3;
var UP_DEMO_CHAIN_3 = 4;
var UP_DEMO_CHAIN_END = 5;
var UP_DEMO_NOISE = 6;
var TV_DEMO_CHAIN_LEVEL_1 = 1;
var TV_DEMO_CHAIN_LEVEL_2 = 20;
var TV_DEMO_CHAIN_LEVEL_3 = 40;
var SCORE_UP_RATE = 2 * _root.FPS_RATE;
var SCORE_UP_CHAIN_BASE = 10;
var GRAVITY = 2;
var INITIAL_RATE = -7.5;
var BLOCK_NOT_CONNECT_PAD_DOWN_FRAME = 3;
var BLOCK_CONNECT_FRAME = 30;
var BLOCK_DOWN_SPEED_UP_FRAME = 10;
var BLOCK_DOWN_SPEED_UP_RATE = 6;
var TIME_IS_MONEY_WAIT = 10;
var DANGER_SLOW_MOTION_FRAME = _root.FPS * 10;
var DANGER_SLOW_MOTION_RATE = 3;
var GAME_FINISH_WAIT = _root.FPS * 1;
var DEMO_SCROLL_SPEED_MIN = 1;
var DEMO_SCROLL_SPEED_MAX = 96;
var CHAIN_BLOCK_SWING_RATE = 4.5;
var CHAIN_BLOCK_SWING_FRAME = 3 * _root.FPS;
var GAME_PLAY_TIME_FRAME_DANGER = 10 * _root.FPS;
var SHIP_SPEED_DOWN_COUNT = 10;
var SHIP_SPEED_DOWN_DEMON = 3;
var SHIP_S_XPOS_S = 200;
var SHIP_S_YPOS_S = 148;
var SHIP_S_XPOS_E = 200;
var SHIP_S_YPOS_E = 64;
var SHIP_MOVE_RANGE = SHIP_S_YPOS_E - SHIP_S_YPOS_S;
var eSE_TYPE_GAME_START = 0;
var eSE_TYPE_GAME_CLEAR = 1;
var eSE_TYPE_GAME_OVER = 2;
var eSE_TYPE_MOVE_LR = 12;
var eSE_TYPE_MOVE_DOWN = 12;
var eSE_TYPE_CONNECT_BLOCK = 11;
var eSE_TYPE_ROTATION = 12;
var eSE_TYPE_SCORE_UP = 3;
var eSE_TYPE_COIN_FINISH = 9;
var eSE_TYPE_CHANGE_COIN = 4;
var eSE_TYPE_COIN01 = 5;
var eSE_TYPE_COIN02 = 6;
var eSE_TYPE_COIN03 = 7;
var eSE_TYPE_COIN04 = 8;
var eSE_TYPE_CHAIN_OVER = 2;
var eSE_TYPE_CHAIN_EFFECT = 12;
var eSE_TYPE_LEVEL_UP = 1;
var eSE_TYPE_DANGER = 13;
var eSE_TYPE_TIME_COUNT = 3;
var eSE_TYPE_AFTER_ATTACH_EFFECT1 = 14;
var eSE_TYPE_AFTER_ATTACH_EFFECT2 = 14;
var eSE_TYPE_AFTER_ATTACH_EFFECT3 = 14;
var eSE_TYPE_AFTER_ATTACH_EFFECT4 = 14;
var eSE_TYPE_AFTER_ATTACH_EFFECT5 = 14;
var g_nDemoNo = _root.UP_DEMO_NONE;
var INPUT_DATA_MAX = 6;
var INPUT_U = 0;
var INPUT_D = 1;
var INPUT_L = 2;
var INPUT_R = 3;
var INPUT_A = 4;
var INPUT_B = 5;
var BUTTON_A_CODE = 88;
var BUTTON_B_CODE = 90;
var REPEAT_COUNT = 4;
CInputManager.prototype.isNormal = function(type)
{
   if(INPUT_U <= type && type <= INPUT_B)
   {
      return !this.m_bNormal[type] ? false : true;
   }
   return 0;
};
CInputManager.prototype.isTrigger = function(type)
{
   if(INPUT_U <= type && type <= INPUT_B)
   {
      return !this.m_bTrigger[type] ? false : true;
   }
   return 0;
};
CInputManager.prototype.isTriggerRep = function(type)
{
   if(INPUT_U <= type && type <= INPUT_B)
   {
      return !this.m_bTriggerRep[type] ? false : true;
   }
   return 0;
};
CInputManager.prototype.updateInput = function()
{
   var _loc3_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < INPUT_DATA_MAX)
   {
      this.m_bOld[_loc3_] = this.m_bNormal[_loc3_];
      this.m_bNormal[_loc3_] = 0;
      _loc3_ = _loc3_ + 1;
   }
   if(Key.isDown(38))
   {
      this.m_bNormal[INPUT_U] = 1;
   }
   if(Key.isDown(40))
   {
      this.m_bNormal[INPUT_D] = 1;
   }
   if(Key.isDown(37))
   {
      this.m_bNormal[INPUT_L] = 1;
   }
   if(Key.isDown(39))
   {
      this.m_bNormal[INPUT_R] = 1;
   }
   if(Key.isDown(BUTTON_A_CODE))
   {
      this.m_bNormal[INPUT_A] = 1;
   }
   if(Key.isDown(BUTTON_B_CODE))
   {
      this.m_bNormal[INPUT_B] = 1;
   }
   _loc3_ = 0;
   while(_loc3_ < INPUT_DATA_MAX)
   {
      if(!this.m_bOld[_loc3_] && this.m_bNormal[_loc3_])
      {
         this.m_bTrigger[_loc3_] = 1;
      }
      else
      {
         this.m_bTrigger[_loc3_] = 0;
      }
      this.m_bTriggerRep[_loc3_] = this.m_bTrigger[_loc3_];
      if(this.m_bNormal[_loc3_])
      {
         this.m_nRepCount[_loc3_] = this.m_nRepCount[_loc3_] + 1;
         if(_root.REPEAT_COUNT <= this.m_nRepCount[_loc3_])
         {
            this.m_bTriggerRep[_loc3_] = 1;
         }
      }
      else
      {
         this.m_nRepCount[_loc3_] = 0;
      }
      _loc3_ = _loc3_ + 1;
   }
};
var PLAYER_PHASE_NONE = 0;
var PLAYER_PHASE_INIT = 1;
var PLAYER_PHASE_WAIT = 2;
var PLAYER_PHASE_GAME_START_DEMO_BEFORE = 3;
var PLAYER_PHASE_GAME_START_DEMO = 4;
var PLAYER_PHASE_GAME_START_DEMO_AFTER = 5;
var PLAYER_PHASE_WAIT_WL = 6;
var PLAYER_PHASE_GAME_START_LOGO_BEFORE = 7;
var PLAYER_PHASE_GAME_START_LOGO = 8;
var PLAYER_PHASE_GAME_START_LOGO_AFTER = 9;
var PLAYER_PHASE_INPUT_BEFORE = 10;
var PLAYER_PHASE_INPUT = 11;
var PLAYER_PHASE_INPUT_AFTER_BLOCK_SET = 12;
var PLAYER_PHASE_INPUT_AFTER = 13;
var PLAYER_PHASE_BLOCK_DOWN_BEFORE = 14;
var PLAYER_PHASE_BLOCK_DOWN = 15;
var PLAYER_PHASE_OJYAMA_BLOCK_BEFORE = 16;
var PLAYER_PHASE_OJYAMA_BLOCK = 17;
var PLAYER_PHASE_OJYAMA_BLOCK_AFTER = 18;
var PLAYER_PHASE_CHECK_GAME_OVER = 19;
var PLAYER_PHASE_NEXT_BLOCK_BEFORE = 20;
var PLAYER_PHASE_NEXT_BLOCK = 21;
var PLAYER_PHASE_NEXT_BLOCK_AFTER = 22;
var PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE = 23;
var PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN = 24;
var PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_AFTER = 25;
var PLAYER_PHASE_CHAIN_OVER_BEFORE = 26;
var PLAYER_PHASE_CHAIN_OVER = 27;
var PLAYER_PHASE_CHAIN_OVER_AFTER = 28;
var PLAYER_PHASE_CHAIN_OVER_EFFECT_WAIT = 29;
var PLAYER_PHASE_CHAIN_2ND_BEFORE = 30;
var PLAYER_PHASE_CHAIN_2ND = 31;
var PLAYER_PHASE_CHAIN_2ND_AFTER = 32;
var PLAYER_PHASE_CHECK_FALL_BLOCK = 33;
var PLAYER_PHASE_SHIP_PROGRESS_METER_BEFORE = 34;
var PLAYER_PHASE_SHIP_PROGRESS_METER = 35;
var PLAYER_PHASE_SHIP_PROGRESS_METER_AFTER = 36;
var PLAYER_PHASE_PERFECT_BEFORE = 37;
var PLAYER_PHASE_PERFECT = 38;
var PLAYER_PHASE_PERFECT_AFTER = 39;
var PLAYER_PHASE_GAME_OVER_BEFORE = 40;
var PLAYER_PHASE_GAME_OVER = 41;
var PLAYER_PHASE_GAME_OVER_AFTER = 42;
var PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_BEFOER = 43;
var PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_WAIT = 44;
var PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY = 45;
var PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_AFTER = 46;
var PLAYER_PHASE_GAME_CLEAR_BEFORE = 47;
var PLAYER_PHASE_GAME_CLEAR = 48;
var PLAYER_PHASE_GAME_CLEAR_AFTER = 49;
var PLAYER_PHASE_GAME_FINISH_WAIT_BEFORE = 50;
var PLAYER_PHASE_GAME_FINISH_WAIT = 51;
var PLAYER_PHASE_GAME_FINISH_WAITVS = 52;
var PLAYER_PHASE_GAME_FINISH = 53;
var PLAYER_PHASE_QUIT = 54;
CTrionBlockManager.prototype.setBlockType = function(type)
{
   this.m_nBlockType = type;
   this.gotoBlockLabel();
};
CTrionBlockManager.prototype.setBlockDir = function(dir)
{
   this.m_nBlockDir = dir;
   this.gotoBlockLabel();
};
CTrionBlockManager.prototype.setBlockPos = function(n_x, n_y, n_offset_x, n_offset_y)
{
   this.m_nBlockX = n_x;
   this.m_nBlockY = n_y;
   this.m_mcBlock._x = _root.OFFSET_X + _root.BLOCK_W * this.m_nBlockX + n_offset_x;
   this.m_mcBlock._y = _root.OFFSET_Y + _root.BLOCK_H * this.m_nBlockY + n_offset_y;
};
CTrionBlockManager.prototype.setVisible = function(is_visible)
{
   if(is_visible)
   {
      this.gotoBlockLabel();
   }
   else
   {
      this.m_mcBlock.gotoAndStop(1);
   }
};
CTrionBlockManager.prototype.gotoBlockLabel = function()
{
   var _loc3_ = undefined;
   _loc3_ = 1;
   if(_root.BLOCK_TYPE_0 != this.m_nBlockType)
   {
      _loc3_ += (this.m_nBlockType - _root.BLOCK_TYPE_1) * _root.BLOCK_DIR_MAX + this.m_nBlockDir;
      _loc3_ = _loc3_ + 1;
   }
   this.m_mcBlock.gotoAndStop(_loc3_);
};
CTrionChainGuaid.prototype.setLocate = function(n_x, n_y)
{
   this.m_mcBlock._x = n_x;
   this.m_mcBlock._y = n_y;
};
CTrionChainGuaid.prototype.setVisible = function(is_visible)
{
   this.m_mcBlock._visible = is_visible;
};
CTrionManagerGameStart.prototype.init = function()
{
   this.m_nCount = 0;
   this.m_mcLogo._visible = true;
   this.m_mcLogo.gotoAndPlay("l_game_start_logo");
};
CTrionManagerGameStart.prototype.quit = function()
{
   this.m_mcLogo._visible = false;
};
CTrionManagerGameStart.prototype.exec = function()
{
   this.m_nCount = this.m_nCount + 1;
};
CTrionManagerGameStart.prototype.isFinish = function()
{
   if(this.m_nCount < _root.FPS * 1)
   {
      return false;
   }
   return true;
};
CTrionManagerGameClear.prototype.init = function()
{
   this.m_bEnable = false;
};
CTrionManagerGameClear.prototype.quit = function()
{
   this.m_bEnable = false;
   this.m_mcLogo.gotoAndStop(1);
};
CTrionManagerGameClear.prototype.isEnable = function()
{
   return this.m_bEnable;
};
CTrionManagerGameClear.prototype.startEffect = function()
{
   if(this.isEnable())
   {
      return undefined;
   }
   this.m_bEnable = true;
   this.m_mcLogo.gotoAndPlay("l_game_clear_start");
};
CTrionManagerGameClear.prototype.isFinish = function()
{
   return true;
};
CTrionManagerGameOver.prototype.init = function()
{
   this.m_bEnable = false;
};
CTrionManagerGameOver.prototype.quit = function()
{
   this.m_bEnable = false;
   this.m_mcLogo.gotoAndStop(1);
};
CTrionManagerGameOver.prototype.isEnable = function()
{
   return this.m_bEnable;
};
CTrionManagerGameOver.prototype.startEffect = function()
{
   if(this.isEnable())
   {
      return undefined;
   }
   this.m_bEnable = true;
   this.m_mcLogo.gotoAndPlay("l_game_over_start");
};
CTrionManagerGameLevelUp.prototype.entry = function(n_level)
{
   var _loc2_ = undefined;
   this.m_nCount = 0;
   this.m_bStart = true;
   _loc2_ = "l_level_up_start_0" + n_level;
   this.m_mcLevelUp.gotoAndPlay(_loc2_);
};
CTrionManagerGameLevelUp.prototype.exec = function()
{
   if(this.m_bStart)
   {
      this.m_nCount = this.m_nCount + 1;
      if(this.m_nCount < _root.FPS * 3)
      {
         this.m_bStart = false;
      }
   }
};
CTrionManagerGameLevelUp.prototype.isFinish = function()
{
   return !this.m_bStart;
};
CTrionManagerBlockToOjyamaEffect.prototype.init = function()
{
   trace("Block To Ojyama Effect Init");
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   this.m_nBlockCheckY = 0;
   this.m_bFinish = false;
   this.m_bFirstBlock = true;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      this.m_anBlockCheckX[_loc4_] = 0;
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] != _root.BLOCK_TYPE_0)
         {
            this.m_abBlockCheck[_loc4_][_loc3_] = true;
         }
         else
         {
            this.m_abBlockCheck[_loc4_][_loc3_] = false;
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CTrionManagerBlockToOjyamaEffect.prototype.quit = function()
{
   trace("Block To Ojyama Effect Quit");
   this.m_bFinish = true;
};
CTrionManagerBlockToOjyamaEffect.prototype.exec = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   if(this.isFinish())
   {
      return undefined;
   }
   if(this.m_bFirstBlock)
   {
      this.m_bFirstBlock = false;
      this.serchFirstBlock();
   }
   _loc3_ = 0;
   while(_loc3_ < this.m_nBlockCheckY)
   {
      _loc4_ = this.m_anBlockCheckX[_loc3_]++;
      if(_root.BLOCK_BUF_W <= this.m_anBlockCheckX[_loc3_])
      {
         this.m_anBlockCheckX[_loc3_] = _root.BLOCK_BUF_W;
      }
      if(_loc4_ < _root.BLOCK_BUF_W)
      {
         if(this.m_abBlockCheck[_loc3_][_loc4_])
         {
            this.m_cTrionCtx.setBlockObjBGOne(_loc4_,_loc3_,_root.BLOCK_TYPE_0,_root.TRI_BG_CHAIN_BLOCK);
            this.m_cTrionCtx.setBlockObjBGOne(_loc4_,_loc3_,_root.BLOCK_TYPE_OJYAMA,_root.TRI_BG_MAIN_BLOCK);
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   this.m_nBlockCheckY = this.m_nBlockCheckY + 1;
   if(_root.BLOCK_BUF_H < this.m_nBlockCheckY)
   {
      this.m_nBlockCheckY = _root.BLOCK_BUF_H;
      if(_root.BLOCK_BUF_W <= this.m_anBlockCheckX[_root.BLOCK_BUF_H - 1])
      {
         this.m_bFinish = true;
      }
   }
};
CTrionManagerBlockToOjyamaEffect.prototype.isFinish = function()
{
   return this.m_bFinish;
};
CTrionManagerBlockToOjyamaEffect.prototype.serchFirstBlock = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   this.m_nBlockCheckY = 0;
   while(this.m_nBlockCheckY < _root.BLOCK_BUF_H)
   {
      _loc3_ = this.m_nBlockCheckY;
      this.m_anBlockCheckX[_loc3_] = 0;
      while(this.m_anBlockCheckX[_loc3_] < _root.BLOCK_BUF_W)
      {
         _loc4_ = this.m_anBlockCheckX[_loc3_];
         if(this.m_abBlockCheck[_loc3_][_loc4_])
         {
            trace("FirstBlock::" + _loc4_ + ":" + _loc3_);
            return undefined;
         }
         this.m_anBlockCheckX[_loc3_] = this.m_anBlockCheckX[_loc3_] + 1;
      }
      this.m_nBlockCheckY = this.m_nBlockCheckY + 1;
   }
};
CTrionManagerGameOverBlockEffect.prototype.init = function()
{
   trace("GameOverMgr Init");
   this.m_bFinish = false;
   this.m_cOyamaEffect.init();
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   var _loc8_ = undefined;
   var _loc3_ = undefined;
   _loc6_ = 1;
   _loc7_ = 0;
   _loc5_ = 0;
   while(_loc5_ < _root.BLOCK_BUF_H)
   {
      _loc4_ = 0;
      while(_loc4_ < _root.BLOCK_BUF_W)
      {
         if(this.m_cTrionCtx.m_anBlockData[_loc5_][_loc4_] != _root.BLOCK_TYPE_0)
         {
            _loc8_ = "OJYA" + _loc6_;
            _loc3_ = {m_bEnable:true,m_nBGX:_loc4_,m_nBGY:_loc5_,m_fX:_loc4_ * _root.BLOCK_W + _root.OFFSET_X,m_fY:_loc5_ * _root.BLOCK_H + _root.OFFSET_Y,m_fAccel:0,m_nWait:_loc7_,m_mcSprite:this.m_mcParent.attachMovie("mcBG1Block",_loc8_,_loc6_)};
            _loc3_.m_mcSprite.gotoAndStop(_root.BLOCK_TYPE_OJYAMA);
            _loc3_.m_mcSprite._visible = false;
            _loc3_.m_mcSprite._x = Math.floor(_loc3_.m_fX);
            _loc3_.m_mcSprite._y = Math.floor(_loc3_.m_fY);
            this.m_asBlockList.push(_loc3_);
            _loc7_ += Math.floor(Math.random() * (_root.FPS / 10));
            _loc6_ = _loc6_ + 1;
         }
         _loc4_ = _loc4_ + 1;
      }
      _loc5_ = _loc5_ + 1;
   }
};
CTrionManagerGameOverBlockEffect.prototype.quit = function()
{
   trace("GameOverMgr Quit");
   this.m_bFinish = true;
   this.m_asBlockList = [];
   this.m_cOyamaEffect.quit();
};
CTrionManagerGameOverBlockEffect.prototype.exec = function()
{
   if(!this.m_cOyamaEffect.isFinish())
   {
      this.m_cOyamaEffect.exec();
   }
   else
   {
      var _loc4_ = undefined;
      var _loc6_ = undefined;
      var _loc3_ = undefined;
      var _loc5_ = undefined;
      _loc6_ = this.m_asBlockList.length;
      _loc5_ = true;
      _loc4_ = 0;
      while(_loc4_ < _loc6_)
      {
         if(this.m_asBlockList[_loc4_].m_bEnable)
         {
            _loc5_ = false;
            _loc3_ = this.m_asBlockList[_loc4_];
            if(0 < _loc3_.m_nWait)
            {
               _loc3_.m_nWait = _loc3_.m_nWait - 1;
            }
            else
            {
               if(!_loc3_.m_mcSprite._visible)
               {
                  _loc3_.m_mcSprite._visible = true;
                  this.m_cTrionCtx.m_anBlockData[_loc3_.m_nBGY][_loc3_.m_nBGX] = _root.BLOCK_TYPE_0;
                  this.m_cTrionCtx.setBlockObjBGOne(_loc3_.m_nBGX,_loc3_.m_nBGY,_root.BLOCK_TYPE_0,_root.TRI_BG_MAIN_BLOCK);
               }
               _loc3_.m_fY += _loc3_.m_fAccel;
               _loc3_.m_fAccel += _root.GRAVITY;
               _loc3_.m_mcSprite._y = Math.floor(_loc3_.m_fY);
               if(_root.SCREEN_H + _root.BLOCK_H < _loc3_.m_mcSprite._y)
               {
                  _loc3_.m_mcSprite.removeMovieClip();
                  _loc3_.m_mcSprite = 0;
                  _loc3_.m_bEnable = false;
               }
            }
            this.m_asBlockList[_loc4_] = _loc3_;
         }
         _loc4_ = _loc4_ + 1;
      }
      this.m_bFinish = _loc5_;
   }
};
CTrionManagerGameOverBlockEffect.prototype.isFinish = function()
{
   return this.m_bFinish;
};
var STAR_MAX = 28;
var STAR_MIN_X = 8;
var STAR_MAX_X = 152;
CTrionManagerChainEffectStar.prototype.init = function()
{
   var _loc3_ = undefined;
   this.m_anStarList = [];
   _loc3_ = 0;
   while(_loc3_ < _root.STAR_MAX)
   {
      var _loc4_ = {m_bEnable:false,m_fX:0,m_fY:0,m_fXDir:0,m_fYDir:0,m_fG:0,m_mcStar:0};
      this.m_anStarList.push(_loc4_);
      _loc3_ = _loc3_ + 1;
   }
   trace("Chain Effect Star Init");
};
CTrionManagerChainEffectStar.prototype.quit = function()
{
   this.m_anStarList = [];
   trace("Chain Effect Star Quit");
};
CTrionManagerChainEffectStar.prototype.exec = function()
{
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   var _loc6_ = undefined;
   var _loc4_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < _root.STAR_MAX)
   {
      if(this.m_anStarList[_loc3_].m_bEnable)
      {
         this.m_anStarList[_loc3_].m_fX += this.m_anStarList[_loc3_].m_fXDir;
         this.m_anStarList[_loc3_].m_fY += this.m_anStarList[_loc3_].m_fYDir;
         this.m_anStarList[_loc3_].m_fYDir += this.m_anStarList[_loc3_].m_fG;
         this.m_anStarList[_loc3_].m_mcStar._x = this.m_anStarList[_loc3_].m_fX;
         this.m_anStarList[_loc3_].m_mcStar._y = this.m_anStarList[_loc3_].m_fY;
         if(_root.SCREEN_H < this.m_anStarList[_loc3_].m_fY)
         {
            this.m_anStarList[_loc3_].m_bEnable = false;
            this.m_anStarList[_loc3_].m_mcStar.removeMovieClip();
            this.m_anStarList[_loc3_].m_mcStar = 0;
            this.m_cTrionCtx.m_cMissionMgr.incMissionBooster();
         }
         else
         {
            if(this.m_anStarList[_loc3_].m_fX < _root.STAR_MIN_X)
            {
               this.m_anStarList[_loc3_].m_fX = _root.STAR_MIN_X;
               this.m_anStarList[_loc3_].m_fXDir = - this.m_anStarList[_loc3_].m_fXDir;
            }
            else if(_root.STAR_MAX_X < this.m_anStarList[_loc3_].m_fX)
            {
               this.m_anStarList[_loc3_].m_fX = _root.STAR_MAX_X;
               this.m_anStarList[_loc3_].m_fXDir = - this.m_anStarList[_loc3_].m_fXDir;
            }
            this.m_anStarList[_loc3_].m_mcStar._x = this.m_anStarList[_loc3_].m_fX;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerChainEffectStar.prototype.isFinish = function()
{
   return true;
};
CTrionManagerChainEffectStar.prototype.entry = function(n_eff_x, n_eff_y, f_v0, f_g, is_big_star)
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   var _loc6_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < _root.STAR_MAX)
   {
      if(!this.m_anStarList[_loc3_].m_bEnable)
      {
         _loc4_ = Math.random() * 3.141592653589793 * 0.5;
         _loc4_ += 0.7853981633974483;
         _loc5_ = _loc3_ + 1;
         _loc6_ = "Eff" + _loc5_;
         this.m_anStarList[_loc3_].m_bEnable = true;
         this.m_anStarList[_loc3_].m_fX = n_eff_x;
         this.m_anStarList[_loc3_].m_fY = n_eff_y;
         this.m_anStarList[_loc3_].m_fXDir = Math.cos(_loc4_) * 5;
         this.m_anStarList[_loc3_].m_fYDir = Math.sin(_loc4_) * f_v0;
         this.m_anStarList[_loc3_].m_fG = f_g;
         if(is_big_star)
         {
            this.m_anStarList[_loc3_].m_mcStar = this.m_mcParent.attachMovie("mcStarL",_loc6_,_loc5_);
         }
         else
         {
            this.m_anStarList[_loc3_].m_mcStar = this.m_mcParent.attachMovie("mcStarS",_loc6_,_loc5_);
         }
         this.m_anStarList[_loc3_].m_mcStar._x = n_eff_x;
         this.m_anStarList[_loc3_].m_mcStar._y = n_eff_y;
         this.m_anStarList[_loc3_].m_mcStar._visible = true;
         break;
      }
      _loc3_ = _loc3_ + 1;
   }
};
var STAR_ENTRY_MAX = 5;
var STAR_BIG_SCORE = 20;
var STAR_SMALL_SCORE = 10;
CTrionManagerChainEffect.prototype.init = function()
{
   trace("Chain Effect Init");
   this.m_nChainEffTimer = 0;
   this.m_nChainBlockEffTimer = 0;
   this.m_nChainCount = 0;
   this.m_anChainList = [];
   this.m_cEffStar.init();
};
CTrionManagerChainEffect.prototype.quit = function()
{
   trace("Chain Effect Quit");
   this.m_nChainEffTimer = 0;
   this.m_nChainBlockEffTimer = 0;
   this.m_nChainCount = 0;
   this.m_anChainList = [];
   this.m_cEffStar.quit();
};
CTrionManagerChainEffect.prototype.exec = function()
{
   var _loc10_ = undefined;
   this.m_cEffStar.exec();
   if(0 < this.m_nChainBlockEffTimer)
   {
      this.m_nChainBlockEffTimer = this.m_nChainBlockEffTimer - 1;
   }
   if(0 < this.m_nChainEffTimer)
   {
      var _loc9_ = undefined;
      this.m_nChainEffTimer = this.m_nChainEffTimer - 1;
      _loc9_ = 100 + (_root.CHAIN_EFF_FRAME - this.m_nChainEffTimer) * 50 / _root.CHAIN_EFF_FRAME;
      this.m_mcChainEff._xscale = _loc9_;
      this.m_mcChainEff._yscale = _loc9_;
      this.m_mcChainEff;
      if(this.m_nChainEffTimer <= 0)
      {
         this.m_mcChainEff._visible = false;
      }
   }
   else if(this.m_anChainList.length)
   {
      var _loc3_ = undefined;
      _loc3_ = this.m_anChainList.shift();
      this.m_nChainEffTimer = _root.CHAIN_EFF_FRAME;
      this.m_nChainBlockEffTimer = _root.CHAIN_BLOCK_EFF_FRAME;
      this.m_mcChainEffBlock.gotoAndPlay("l_eff_start");
      this.m_mcChainEffBlock._x = _loc3_.m_nX;
      this.m_mcChainEffBlock._y = _loc3_.m_nY;
      this.m_mcChainEff._visible = true;
      this.m_mcChainEff._x = _loc3_.m_nX;
      this.m_mcChainEff._y = _loc3_.m_nY;
      this.m_mcChainEff._xscale = 100;
      this.m_mcChainEff._yscale = 100;
      this.m_cTrionCtx.setPlaySEFlag(_root.eSE_TYPE_AFTER_ATTACH_EFFECT1);
      var _loc8_ = undefined;
      var _loc5_ = undefined;
      var _loc6_ = undefined;
      _loc8_ = this.m_cTrionCtx.getChainBlockRate();
      _loc5_ = _loc8_ * 1.4;
      _loc5_ *= _loc5_;
      _loc5_ += 0.4;
      _loc6_ = _loc8_ + 2;
      _loc6_ *= -6;
      var _loc4_ = undefined;
      var _loc7_ = undefined;
      _loc4_ = this.m_cTrionCtx.calcScoreFromChainCount(_loc3_.m_nChainCount);
      _loc7_ = 0;
      this.m_cEffStar.entry(_loc3_.m_nX,_loc3_.m_nY,_loc6_,_loc5_,false);
      this.m_cEffStar.entry(_loc3_.m_nX,_loc3_.m_nY,_loc6_,_loc5_,false);
      this.m_cEffStar.entry(_loc3_.m_nX,_loc3_.m_nY,_loc6_,_loc5_,false);
      while(0 < _loc4_ && _loc7_ < _root.STAR_ENTRY_MAX)
      {
         if(_root.STAR_BIG_SCORE <= _loc4_)
         {
            _loc4_ -= _root.STAR_BIG_SCORE;
            this.m_cEffStar.entry(_loc3_.m_nX,_loc3_.m_nY,_loc6_,_loc5_,true);
         }
         else
         {
            if(_root.STAR_SMALL_SCORE > _loc4_)
            {
               break;
            }
            _loc4_ -= _root.STAR_SMALL_SCORE;
            this.m_cEffStar.entry(_loc3_.m_nX,_loc3_.m_nY,_loc6_,_loc5_,false);
         }
         _loc7_ = _loc7_ + 1;
      }
      this.m_cTrionCtx.change3x3ToChainBlock(_loc3_.m_nBGX,_loc3_.m_nBGY);
   }
};
CTrionManagerChainEffect.prototype.isFinish = function()
{
   if(0 < this.m_anChainList.length || 0 < this.m_nChainBlockEffTimer)
   {
      return false;
   }
   return true;
};
CTrionManagerChainEffect.prototype.isFinishChainEffectOnly = function()
{
   if(0 < this.m_anChainList.length || 0 < this.m_nChainBlockEffTimer)
   {
      return false;
   }
   return true;
};
CTrionManagerChainEffect.prototype.checkEntryEffect = function(n_eff_x, n_eff_y)
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_anChainList.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      if(this.m_anChainList[_loc2_].m_nX == n_eff_x && this.m_anChainList[_loc2_].m_nY == n_eff_y)
      {
         return true;
      }
      _loc2_ = _loc2_ + 1;
   }
   return false;
};
CTrionManagerChainEffect.prototype.entry = function(n_eff_x, n_eff_y, n_block_x, n_block_y, n_douji_chain_count)
{
   if(this.checkEntryEffect(n_eff_x,n_eff_y))
   {
      return undefined;
   }
   this.m_nChainCount = this.m_nChainCount + 1;
   var _loc2_ = {m_nX:n_eff_x,m_nY:n_eff_y,m_nBGX:n_block_x,m_nBGY:n_block_y,m_nChainCount:this.m_nChainCount,m_nDoujiChainCount:n_douji_chain_count};
   this.m_anChainList.push(_loc2_);
};
CTrionManagerChainEffect.prototype.reset = function()
{
   this.m_nChainCount = 0;
   this.m_anChainList = [];
};
CTrionManagerChainEffect.prototype.getChainCount = function()
{
   return this.m_nChainCount;
};
CTrionManagerChainToCoinEffect.prototype.init = function(n_coin_type)
{
   trace("Chain To Coin Effect Init");
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   this.m_bFinish = false;
   this.m_bFirstChainBlock = true;
   this.m_eCoinType = n_coin_type;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      this.m_anBlockCheckX[_loc4_] = 0;
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         this.m_abChainCheck[_loc4_][_loc3_] = this.m_cTrionCtx.m_anChainBlockCheck[_loc4_][_loc3_];
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CTrionManagerChainToCoinEffect.prototype.quit = function()
{
   trace("Chain To Coin Effect Quit");
   this.m_bFinish = true;
};
CTrionManagerChainToCoinEffect.prototype.exec = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   if(this.isFinish())
   {
      return undefined;
   }
   if(this.m_bFirstChainBlock)
   {
      this.m_bFirstChainBlock = false;
      this.serchFirstChainBlock();
   }
   _loc3_ = 0;
   while(_loc3_ < this.m_nBlockCheckY)
   {
      _loc4_ = this.m_anBlockCheckX[_loc3_]++;
      if(_root.BLOCK_BUF_W <= this.m_anBlockCheckX[_loc3_])
      {
         this.m_anBlockCheckX[_loc3_] = _root.BLOCK_BUF_W;
      }
      if(_loc4_ < _root.BLOCK_BUF_W)
      {
         if(this.m_abChainCheck[_loc3_][_loc4_])
         {
            this.m_cTrionCtx.setBlockObjBGOne(_loc4_,_loc3_,_root.BLOCK_TYPE_0,_root.TRI_BG_CHAIN_BLOCK);
            this.m_cTrionCtx.setBlockObjBGOne(_loc4_,_loc3_,this.m_eCoinType,_root.TRI_BG_MAIN_BLOCK);
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   this.m_nBlockCheckY = this.m_nBlockCheckY + 1;
   if(_root.BLOCK_BUF_H < this.m_nBlockCheckY)
   {
      this.m_nBlockCheckY = _root.BLOCK_BUF_H;
      if(_root.BLOCK_BUF_W <= this.m_anBlockCheckX[_root.BLOCK_BUF_H - 1])
      {
         this.m_bFinish = true;
      }
   }
};
CTrionManagerChainToCoinEffect.prototype.isFinish = function()
{
   return this.m_bFinish;
};
CTrionManagerChainToCoinEffect.prototype.serchFirstChainBlock = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   this.m_nBlockCheckY = 0;
   while(this.m_nBlockCheckY < _root.BLOCK_BUF_H)
   {
      _loc3_ = this.m_nBlockCheckY;
      this.m_anBlockCheckX[_loc3_] = 0;
      while(this.m_anBlockCheckX[_loc3_] < _root.BLOCK_BUF_W)
      {
         _loc4_ = this.m_anBlockCheckX[_loc3_];
         if(this.m_abChainCheck[_loc3_][_loc4_])
         {
            this.m_cTrionCtx.setPlaySEFlag(_root.eSE_TYPE_CHANGE_COIN);
            return undefined;
         }
         this.m_anBlockCheckX[_loc3_] = this.m_anBlockCheckX[_loc3_] + 1;
      }
      this.m_nBlockCheckY = this.m_nBlockCheckY + 1;
   }
};
CTrionManagerChainBreakCoinCounter.prototype.init = function()
{
   this.m_bEnable = true;
   this.m_nPutFrame = 0;
   this.m_nCoinCount = 0;
};
CTrionManagerChainBreakCoinCounter.prototype.quit = function()
{
   this.m_bEnable = false;
   this.m_nPutFrame = 0;
   this.m_nCoinCount = 0;
   this.m_mcParent._visible = false;
};
CTrionManagerChainBreakCoinCounter.prototype.isFinish = function()
{
   if(this.m_bEnable)
   {
      return false;
   }
   return true;
};
CTrionManagerChainBreakCoinCounter.prototype.exec = function()
{
   if(!this.m_bEnable)
   {
      return undefined;
   }
   this.m_nPutFrame = this.m_nPutFrame - 1;
   if(this.m_nPutFrame < 0)
   {
      this.m_bEnable = false;
   }
};
CTrionManagerChainBreakCoinCounter.prototype.isVisible = function(is_visible)
{
   this.m_mcParent._visible = is_visible;
};
CTrionManagerChainBreakCoinCounter.prototype.setCoinType = function(n_coin_type, n_coin_value)
{
   this.m_nEnable = true;
   this.m_mcParent._visible = true;
   this.m_eCoinType = n_coin_type;
   this.m_nCoinValue = n_coin_value;
   this.m_nPutFrame = _root.FPS;
   this.m_mcParent.mcCoin.gotoAndStop(n_coin_type);
};
CTrionManagerChainBreakCoinCounter.prototype.setCoinCount = function(n_coin_num)
{
   var _loc3_ = undefined;
   var _loc2_ = undefined;
   this.m_nCoinCount = n_coin_num;
   _loc2_ = this.m_nCoinCount;
   _loc3_ = _loc2_ % 10;
   _loc2_ = Math.floor(_loc2_ / 10);
   this.m_mcParent.mcCounter.mcDigit1.gotoAndStop(_loc3_ + 1);
   _loc3_ = _loc2_ % 10;
   _loc2_ = Math.floor(_loc2_ / 10);
   this.m_mcParent.mcCounter.mcDigit10.gotoAndStop(_loc3_ + 1);
   _loc3_ = _loc2_ % 10;
   this.m_mcParent.mcCounter.mcDigit100.gotoAndStop(_loc3_ + 1);
};
CTrionManagerChainBreakCoinCounter.prototype.incCoinCount = function()
{
   this.setCoinCount(this.m_nCoinCount + 1);
};
var BLOCK_CHAIN_TYPE_NONE = 0;
var BLOCK_CHAIN_TYPE_3x3 = 1;
var BLOCK_CHAIN_TYPE_DELETE = 2;
var BLOCK_CHAIN_TYPE_FALL = 3;
CTrionManagerChainBreakEffect.prototype.init = function()
{
   this.m_bFinish = false;
   this.initChainBlockUnit();
   this.m_cCoinCounter.init();
   trace("Chain Break Effect Init");
};
CTrionManagerChainBreakEffect.prototype.quit = function()
{
   this.m_bFinish = true;
   initChainBlockUnit();
   this.m_cCoinCounter.quit();
   trace("Chain Break Effect Quit");
};
CTrionManagerChainBreakEffect.prototype.exec = function()
{
   var _loc9_ = undefined;
   var _loc8_ = undefined;
   var _loc7_ = undefined;
   var _loc3_ = undefined;
   _loc9_ = true;
   _loc8_ = this.m_anChainSprite.length;
   _loc7_ = 0;
   while(_loc7_ < _loc8_)
   {
      _loc3_ = this.m_anChainSprite[_loc7_];
      if(_loc3_.m_bUsedSprite)
      {
         if(_loc3_.m_fY < _loc3_.m_fYEnd)
         {
            _loc9_ = false;
            if(_loc3_.m_bEnableFall)
            {
               if(0 < _loc3_.m_nWaitFrame)
               {
                  _loc3_.m_nWaitFrame = _loc3_.m_nWaitFrame - 1;
               }
               else
               {
                  _loc3_.m_fY += _loc3_.m_fAccel;
                  _loc3_.m_fAccel += _root.GRAVITY;
                  if(_loc3_.m_fY > _loc3_.m_fYEnd)
                  {
                     _loc3_.m_fY = _loc3_.m_fYEnd;
                  }
                  _loc3_.m_mcBlock._y = Math.floor(_loc3_.m_fY);
               }
            }
            else
            {
               var _loc4_ = undefined;
               _loc4_ = 0;
               while(_loc4_ < _loc8_)
               {
                  if(this.m_anChainSprite[_loc4_].m_bEnableSprite && _loc4_ != _loc7_)
                  {
                     var _loc6_ = undefined;
                     var _loc5_ = undefined;
                     _loc6_ = Math.floor(this.m_anChainSprite[_loc4_].m_fX - _loc3_.m_fX);
                     _loc5_ = Math.floor(this.m_anChainSprite[_loc4_].m_fY - _loc3_.m_fY);
                     _loc6_ = Math.abs(_loc6_);
                     _loc5_ = Math.abs(_loc5_);
                     if(_loc6_ < _root.BLOCK_W && _loc5_ < _root.BLOCK_H)
                     {
                        _loc3_.m_bEnableFall = true;
                        _loc3_.m_nWaitFrame = 0;
                     }
                  }
                  _loc4_ = _loc4_ + 1;
               }
            }
            if(_loc3_.m_bEnableFall && _loc3_.m_nWaitFrame <= 0 && !_loc3_.m_bEnableSprite)
            {
               _loc3_.m_bEnableSprite = true;
               switch(_loc3_.m_eChainType)
               {
                  case _root.BLOCK_CHAIN_TYPE_DELETE:
                  case _root.BLOCK_CHAIN_TYPE_FALL:
                     break;
                  case _root.BLOCK_CHAIN_TYPE_3x3:
                     this.m_cTrionCtx.setPlaySEFlag(_loc3_.m_nCoinSEType);
                     this.m_cTrionCtx.addCoin(_loc3_.m_nCoinValue);
                     this.m_cCoinCounter.incCoinCount();
               }
               _loc3_.m_mcBlock._visible = true;
               this.m_cTrionCtx.setBlockObjBGOne(_loc3_.m_nBGBeginX,_loc3_.m_nBGBeginY,_root.BLOCK_TYPE_0,_root.TRI_BG_MAIN_BLOCK);
            }
         }
         else
         {
            _loc3_.m_bUsedSprite = false;
            _loc3_.m_bEnableSprite = false;
            _loc3_.m_mcBlock.removeMovieClip();
            if(_loc3_.m_eChainType === _root.BLOCK_CHAIN_TYPE_FALL)
            {
               this.m_cTrionCtx.setBlockObjBGOne(_loc3_.m_nBGEndX,_loc3_.m_nBGEndY,this.m_cTrionCtx.m_anBlockData[_loc3_.m_nBGEndY][_loc3_.m_nBGEndX],_root.TRI_BG_MAIN_BLOCK);
            }
         }
      }
      this.m_anChainSprite[_loc7_] = _loc3_;
      _loc7_ = _loc7_ + 1;
   }
   if(!this.m_bFinish && _loc9_)
   {
      trace("Finish........................");
      this.m_cTrionCtx.setPlaySEFlag(_root.eSE_TYPE_COIN_FINISH);
   }
   this.m_cCoinCounter.exec();
   this.m_bFinish = _loc9_;
};
CTrionManagerChainBreakEffect.prototype.entry = function(n_coin_type, n_coin_value, n_coin_se_type, is_game_clear_mode)
{
   m_bFinish = false;
   this.m_cCoinCounter.setCoinType(n_coin_type,n_coin_value);
   this.m_cCoinCounter.setCoinCount(0);
   this.initChainBlockSpriteFromBG_Cue();
   if(is_game_clear_mode)
   {
      this.deleteBlockForGameClear();
   }
   else
   {
      this.deleteBlock();
   }
   this.entryChainBlockSpriteFromBG(n_coin_type,n_coin_value,n_coin_se_type);
   this.quitChainBlockSpriteFromBG_Cue();
};
CTrionManagerChainBreakEffect.prototype.isFinish = function()
{
   return this.m_bFinish && this.m_cCoinCounter.isFinish();
};
CTrionManagerChainBreakEffect.prototype.initChainBlockUnit = function()
{
   this.m_anChainSprite = [];
};
CTrionManagerChainBreakEffect.prototype.initChainBlockSpriteFromBG_Cue = function()
{
   this.m_anChainTmpList = [];
};
CTrionManagerChainBreakEffect.prototype.quitChainBlockSpriteFromBG_Cue = function()
{
   this.m_anChainTmpList = [];
};
CTrionManagerChainBreakEffect.prototype.deleteBlock = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc6_ = [0,0,0,0,0,0,0,0,0];
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      _loc6_[_loc3_] = _root.BLOCK_BUF_H;
      _loc3_ = _loc3_ + 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(this.m_cTrionCtx.m_anChainBlockCheck[_loc4_][_loc3_])
         {
            this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_3x3,_root.BLOCK_TYPE_CHAIN,true,_loc3_,_loc4_,_loc3_,_root.BLOCK_BUF_H + 1);
            this.m_cTrionCtx.m_anChainBlockCheck[_loc4_][_loc3_] = false;
            this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
            if(_loc6_[_loc3_] > _loc4_)
            {
               _loc6_[_loc3_] = _loc4_;
            }
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      if(_loc6_[_loc3_] < _root.BLOCK_BUF_H)
      {
         _loc4_ = _loc6_[_loc3_];
         while(_loc4_ < _root.BLOCK_BUF_H)
         {
            if(this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] != _root.BLOCK_TYPE_0)
            {
               this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_DELETE,this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_],false,_loc3_,_loc4_,_loc3_,_root.BLOCK_BUF_H + 1);
               this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
            }
            _loc4_ = _loc4_ + 1;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      if(_loc6_[_loc3_] < _root.BLOCK_BUF_H)
      {
         var _loc7_ = undefined;
         _loc7_ = _root.BLOCK_BUF_H - 1;
         _loc4_ = _loc6_[_loc3_];
         while(_loc4_ >= 0)
         {
            if(this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] != _root.BLOCK_TYPE_0)
            {
               this.m_cTrionCtx.m_anBlockData[_loc7_][_loc3_] = this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_];
               this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
               this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_FALL,this.m_cTrionCtx.m_anBlockData[_loc7_][_loc3_],true,_loc3_,_loc4_,_loc3_,_loc7_);
               _loc7_ = _loc7_ - 1;
            }
            _loc4_ = _loc4_ - 1;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   var _loc5_ = undefined;
   var _loc9_ = undefined;
   var _loc8_ = undefined;
   _loc5_ = 0;
   _loc9_ = 0;
   _loc8_ = 0;
   while(_loc5_ < _root.BLOCK_BUF_W)
   {
      while(_loc5_ < _root.BLOCK_BUF_W)
      {
         if(_root.BLOCK_BUF_H <= _loc6_[_loc5_])
         {
            _loc9_ = _loc5_;
            break;
         }
         _loc5_ = _loc5_ + 1;
      }
      if(_root.BLOCK_BUF_W <= _loc5_)
      {
         break;
      }
      while(_loc5_ < _root.BLOCK_BUF_W)
      {
         if(_loc6_[_loc5_] < _root.BLOCK_BUF_H)
         {
            _loc8_ = _loc5_ - 1;
            break;
         }
         _loc5_ = _loc5_ + 1;
      }
      if(_root.BLOCK_BUF_W <= _loc5_)
      {
         _loc8_ = _root.BLOCK_BUF_W - 1;
      }
      if(_loc9_ <= _loc8_)
      {
         this.checkBlockDown(_loc9_,_loc8_);
      }
   }
};
CTrionManagerChainBreakEffect.prototype.deleteBlockForGameClear = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = [0,0,0,0,0,0,0,0,0];
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      _loc5_[_loc3_] = _root.BLOCK_BUF_H;
      _loc3_ = _loc3_ + 1;
   }
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(this.m_cTrionCtx.m_anChainBlockCheck[_loc4_][_loc3_])
         {
            this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_3x3,_root.BLOCK_TYPE_CHAIN,true,_loc3_,_loc4_,_loc3_,_root.BLOCK_BUF_H + 1);
            this.m_cTrionCtx.m_anChainBlockCheck[_loc4_][_loc3_] = false;
            this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
            if(_loc5_[_loc3_] > _loc4_)
            {
               _loc5_[_loc3_] = _loc4_;
            }
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      if(_loc5_[_loc3_] < _root.BLOCK_BUF_H)
      {
         _loc4_ = _loc5_[_loc3_];
         while(_loc4_ < _root.BLOCK_BUF_H)
         {
            if(this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] != _root.BLOCK_TYPE_0)
            {
               this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_DELETE,this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_],true,_loc3_,_loc4_,_loc3_,_root.BLOCK_BUF_H + 1);
               this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
            }
            _loc4_ = _loc4_ + 1;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_BUF_W)
   {
      _loc4_ = _root.BLOCK_BUF_H - 1;
      while(_loc4_ >= 0)
      {
         if(this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] != _root.BLOCK_TYPE_0)
         {
            this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_DELETE,this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_],true,_loc3_,_loc4_,_loc3_,_root.BLOCK_BUF_H + 1);
            this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
         }
         _loc4_ = _loc4_ - 1;
      }
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerChainBreakEffect.prototype.checkBlockDown = function(n_min_x, n_max_x)
{
   var _loc5_ = undefined;
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc6_ = undefined;
   var _loc10_ = undefined;
   var _loc7_ = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
   _loc10_ = _root.BLOCK_BUF_H - 1;
   _loc3_ = n_min_x;
   while(_loc3_ <= n_max_x)
   {
      if(_root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[_loc10_][_loc3_])
      {
         this.checkBlockDownInside(n_min_x,n_max_x,_loc3_,_loc10_,_loc7_);
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = n_min_x;
   while(_loc3_ <= n_max_x)
   {
      _loc4_ = _root.BLOCK_BUF_H - 1;
      while(_loc4_ >= 0)
      {
         if(_root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_])
         {
            if(!_loc7_[_loc4_][_loc3_])
            {
               _loc6_ = _root.BLOCK_BUF_H - 1;
               _loc5_ = _loc4_ + 1;
               while(_loc5_ < _root.BLOCK_BUF_H)
               {
                  if(_loc7_[_loc5_][_loc3_])
                  {
                     _loc6_ = _loc5_ - 1;
                     break;
                  }
                  _loc5_ = _loc5_ + 1;
               }
               this.addChainBlockSpriteFromBG_Cue(_root.BLOCK_CHAIN_TYPE_FALL,this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_],true,_loc3_,_loc4_,_loc3_,_loc6_);
               this.m_cTrionCtx.m_anBlockData[_loc6_][_loc3_] = this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_];
               _loc7_[_loc6_][_loc3_] = true;
               this.m_cTrionCtx.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
            }
         }
         _loc4_ = _loc4_ - 1;
      }
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerChainBreakEffect.prototype.checkBlockDownInside = function(min_x, max_x, x, y, an_check_buf)
{
   if(an_check_buf[y][x])
   {
      return undefined;
   }
   an_check_buf[y][x] = true;
   if(y + 1 < _root.BLOCK_BUF_H)
   {
      if(!an_check_buf[y + 1][x + 0] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y + 1][x + 0])
      {
         this.checkBlockDownInside(min_x,max_x,x + 0,y + 1,an_check_buf);
      }
      if(x - 1 >= 0 && x - 1 >= min_x)
      {
         if(!an_check_buf[y + 1][x - 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y + 1][x - 1])
         {
            this.checkBlockDownInside(min_x,max_x,x - 1,y + 1,an_check_buf);
         }
      }
      if(x + 1 < _root.BLOCK_BUF_H && x + 1 <= max_x)
      {
         if(!an_check_buf[y + 1][x + 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y + 1][x + 1])
         {
            this.checkBlockDownInside(min_x,max_x,x + 1,y + 1,an_check_buf);
         }
      }
   }
   if(x - 1 >= 0 && x - 1 >= min_x)
   {
      if(!an_check_buf[y + 0][x - 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y + 0][x - 1])
      {
         this.checkBlockDownInside(min_x,max_x,x - 1,y + 0,an_check_buf);
      }
   }
   if(x + 1 < _root.BLOCK_BUF_H && x + 1 <= max_x)
   {
      if(!an_check_buf[y + 0][x + 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y + 0][x + 1])
      {
         this.checkBlockDownInside(min_x,max_x,x + 1,y + 0,an_check_buf);
      }
   }
   if(y - 1 >= 0)
   {
      if(!an_check_buf[y - 1][x + 0] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y - 1][x + 0])
      {
         this.checkBlockDownInside(min_x,max_x,x + 0,y - 1,an_check_buf);
      }
      if(x - 1 >= 0 && x - 1 >= min_x)
      {
         if(!an_check_buf[y - 1][x - 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y - 1][x - 1])
         {
            this.checkBlockDownInside(min_x,max_x,x - 1,y - 1,an_check_buf);
         }
      }
      if(x + 1 < _root.BLOCK_BUF_H && x + 1 <= max_x)
      {
         if(!an_check_buf[y - 1][x + 1] && _root.BLOCK_TYPE_0 != this.m_cTrionCtx.m_anBlockData[y - 1][x + 1])
         {
            this.checkBlockDownInside(min_x,max_x,x + 1,y - 1,an_check_buf);
         }
      }
   }
};
CTrionManagerChainBreakEffect.prototype.addChainBlockSpriteFromBG_Cue = function(e_chain_type, e_block_type, is_fall_enable, n_begin_x, n_begin_y, n_end_x, n_end_y)
{
   props = {m_eChainType:e_chain_type,m_eBlockType:e_block_type,m_bEnableFall:is_fall_enable,m_nBeginX:n_begin_x,m_nBeginY:n_begin_y,m_nEndX:n_end_x,m_nEndY:n_end_y};
   this.m_anChainTmpList.push(props);
};
CTrionManagerChainBreakEffect.prototype.sortFunc = function(obj_l, obj_r)
{
   if(obj_l.m_eChainType < obj_r.m_eChainType)
   {
      return -1;
   }
   if(obj_l.m_eChainType == obj_r.m_eChainType)
   {
      if(obj_l.m_nBeginY < obj_r.m_nBeginY)
      {
         return 1;
      }
      return -1;
   }
   return -1;
};
CTrionManagerChainBreakEffect.prototype.entryChainBlockSpriteFromBG = function(n_coin_type, n_coin_value, n_coin_se_type)
{
   var _loc3_ = undefined;
   var _loc32_ = undefined;
   var _loc9_ = undefined;
   var _loc12_ = undefined;
   var _loc8_ = undefined;
   var _loc13_ = undefined;
   this.m_anChainTmpList.sort(this.sortFunc);
   _loc12_ = 0;
   _loc32_ = this.m_anChainTmpList.length;
   _loc3_ = 0;
   while(_loc3_ < _loc32_)
   {
      var _loc5_ = undefined;
      var _loc6_ = undefined;
      var _loc10_ = undefined;
      var _loc11_ = undefined;
      _loc5_ = this.m_anChainTmpList[_loc3_].m_nBeginX * _root.BLOCK_W + _root.OFFSET_X;
      _loc6_ = this.m_anChainTmpList[_loc3_].m_nBeginY * _root.BLOCK_H + _root.OFFSET_Y;
      _loc10_ = this.m_anChainTmpList[_loc3_].m_nEndX * _root.BLOCK_W + _root.OFFSET_X;
      _loc11_ = this.m_anChainTmpList[_loc3_].m_nEndY * _root.BLOCK_H + _root.OFFSET_Y;
      var _loc7_ = undefined;
      if(this.m_anChainTmpList[_loc3_].m_eChainType == _root.BLOCK_CHAIN_TYPE_3x3)
      {
         _loc7_ = _root.INITIAL_RATE;
         _loc9_ = n_coin_type;
      }
      else
      {
         _loc7_ = 0;
         _loc9_ = this.m_anChainTmpList[_loc3_].m_eBlockType;
      }
      _loc8_ = _loc3_ + 1;
      _loc13_ = "Coin" + _loc8_;
      var _loc4_ = {m_bUsedSprite:true,m_bEnableSprite:false,m_bEnableFall:this.m_anChainTmpList[_loc3_].m_bEnableFall,m_nBGBeginX:this.m_anChainTmpList[_loc3_].m_nBeginX,m_nBGBeginY:this.m_anChainTmpList[_loc3_].m_nBeginY,m_nBGEndX:this.m_anChainTmpList[_loc3_].m_nEndX,m_nBGEndY:this.m_anChainTmpList[_loc3_].m_nEndY,m_eBlockType:_loc9_,m_nCoinSEType:coin_se_type,m_eChainType:this.m_anChainTmpList[_loc3_].m_eChainType,m_nCoinValue:n_coin_value,m_fX:_loc5_,m_fY:_loc6_,m_fXEnd:_loc10_,m_fYEnd:_loc11_,m_fAccel:_loc7_,m_mcBlock:this.m_mcParent.attachMovie("mcBG1Block"
      ,_loc13_,_loc8_),m_nWaitFrame:_loc12_ + Math.floor(Math.random() * (_root.FPS / 10))};
      _loc4_.m_mcBlock._x = Math.floor(_loc5_);
      _loc4_.m_mcBlock._y = Math.floor(_loc6_);
      _loc4_.m_mcBlock.gotoAndStop(_loc4_.m_eBlockType);
      _loc4_.m_mcBlock._visible = false;
      _loc12_ += Math.floor(Math.random() * (_root.FPS / 20));
      this.m_anChainSprite.push(_loc4_);
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerPerfectEffect.prototype.init = function()
{
   trace("Perfect Effect Init");
   this.m_bFinish = false;
   this.m_asUnit = [];
};
CTrionManagerPerfectEffect.prototype.quit = function()
{
   trace("Perfect Effect Quit");
   this.m_bFinish = true;
   this.m_asUnit = [];
};
CTrionManagerPerfectEffect.prototype.exec = function()
{
   var _loc2_ = undefined;
   var _loc6_ = undefined;
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   _loc5_ = true;
   if(this.isFinish())
   {
      return undefined;
   }
   _loc6_ = this.m_asUnit.length;
   _loc2_ = 0;
   while(_loc2_ < _loc6_)
   {
      if(this.m_asUnit[_loc2_].m_nWait)
      {
         _loc5_ = false;
         this.m_asUnit[_loc2_].m_nWait--;
      }
      else if(!this.m_asUnit[_loc2_].m_bEnable)
      {
         this.m_asUnit[_loc2_].m_bEnable = true;
         _loc3_ = _loc2_ + 1;
         _loc4_ = "Per" + _loc3_;
         mc = this.m_mcParent.attachMovie("mcPerfectUnit",_loc4_,_loc3_);
         mc._x = this.m_asUnit[_loc2_].m_nX;
         mc._y = this.m_asUnit[_loc2_].m_nY;
         mc.gotoAndPlay(1);
      }
      _loc2_ = _loc2_ + 1;
   }
   this.m_bFinish = _loc5_;
};
CTrionManagerPerfectEffect.prototype.isFinish = function()
{
   return this.m_bFinish;
};
CTrionManagerPerfectEffect.prototype.entry = function()
{
   var _loc5_ = undefined;
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc6_ = undefined;
   _loc5_ = 0;
   _loc4_ = _root.BLOCK_GAME_OVER_LINE;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         _loc6_ = {m_bEnable:false,m_nX:_loc3_ * _root.BLOCK_W + _root.OFFSET_X,m_nY:_loc4_ * _root.BLOCK_H + _root.OFFSET_Y,m_nWait:_loc5_};
         this.m_asUnit.push(_loc6_);
         _loc5_ = _loc5_ + 1;
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
var COIN_MOVE_SPEED = 6;
CTrionManagerCoinShower.prototype.init = function()
{
   trace("Init Coin Shower");
   this.m_bEnable = true;
   this.m_bFinish = false;
   this.m_nDepth = 1;
   this.m_asCoins = [];
};
CTrionManagerCoinShower.prototype.quit = function()
{
   trace("Quit Coin Shower");
   this.removeCoins();
   this.m_bEnable = false;
   this.m_bFinish = true;
   this.m_nDepth = 1;
   this.m_asCoins = [];
};
CTrionManagerCoinShower.prototype.isEnable = function()
{
   return this.m_bEnable;
};
CTrionManagerCoinShower.prototype.isFinish = function()
{
   if(!this.isEnable())
   {
      trace("Not Enable!!");
      return true;
   }
   trace("CheckFinish::" + this.m_bFinish);
   return this.m_bFinish;
};
CTrionManagerCoinShower.prototype.exec = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   this.m_bFinish = true;
   _loc3_ = this.m_asCoins.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      if(this.m_asCoins[_loc2_].m_nFrame > 0)
      {
         this.m_bFinish = false;
         this.m_asCoins[_loc2_].m_nSX += this.m_asCoins[_loc2_].m_fMX;
         this.m_asCoins[_loc2_].m_nSY += this.m_asCoins[_loc2_].m_fMY;
         this.m_asCoins[_loc2_].m_mcCoin._x = Math.floor(this.m_asCoins[_loc2_].m_nSX);
         this.m_asCoins[_loc2_].m_mcCoin._y = Math.floor(this.m_asCoins[_loc2_].m_nSY);
         this.m_asCoins[_loc2_].m_nFrame--;
         if(this.m_asCoins[_loc2_].m_nFrame <= 0)
         {
            this.m_asCoins[_loc2_].m_mcCoin._visible = false;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
};
CTrionManagerCoinShower.prototype.entryCoin = function(n_sx, n_sy, n_ex, n_ey)
{
   if(!this.isEnable())
   {
      return undefined;
   }
   var _loc4_ = undefined;
   var _loc6_ = undefined;
   var _loc5_ = undefined;
   var _loc9_ = undefined;
   var _loc7_ = undefined;
   var _loc3_ = undefined;
   var _loc18_ = undefined;
   _loc9_ = Math.random() * 32 - 16;
   _loc7_ = Math.random() * 16;
   _loc6_ = n_sx + _loc9_;
   _loc5_ = n_sy + _loc7_;
   _loc4_ = (n_ex - n_sx) * (n_ex - n_sx) + (n_ey - n_sy) * (n_ey - n_sy);
   _loc4_ = Math.sqrt(_loc4_);
   _loc3_ = Math.floor(_loc4_ / _root.COIN_MOVE_SPEED);
   _loc3_ = _loc3_ >= 0 ? _loc3_ : 1;
   _loc18_ = "Coin" + this.m_nDepth;
   this.m_nDepth = this.m_nDepth + 1;
   mc = this.m_mcParent.attachMovie("mcCoinGold",newname,this.m_nDepth);
   mc._x = _loc6_;
   mc._y = _loc5_;
   s_coin = {m_nSX:_loc6_,m_nSY:_loc5_,m_fMX:(n_ex - _loc6_) / _loc3_,m_fMY:(n_ey - _loc5_) / _loc3_,m_nFrame:_loc3_,m_mcCoin:mc};
   this.m_asCoins.push(s_coin);
};
CTrionManagerCoinShower.prototype.removeCoins = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_asCoins.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asCoins[_loc2_].m_mcCoin.removeMovieClip();
      _loc2_ = _loc2_ + 1;
   }
   this.m_asCoins = [];
};
CTrionManagerShootingStar.prototype.init = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_asStar.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asStar[_loc2_]._visible = false;
      _loc2_ = _loc2_ + 1;
   }
};
CTrionManagerShootingStar.prototype.quit = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_asStar.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asStar[_loc2_]._visible = false;
      _loc2_ = _loc2_ + 1;
   }
};
CTrionManagerShootingStar.prototype.exec = function(f_rate)
{
   var _loc7_ = 1 / (_root.FPS * 4.8);
   if(this.m_fRate < f_rate)
   {
      this.m_fRate = f_rate;
   }
   else if(0 < this.m_fRate)
   {
      this.m_fRate -= _loc7_;
      if(this.m_fRate < 0)
      {
         this.m_fRate = 0;
      }
   }
   this.addShootingStar(this.m_fRate);
   var _loc4_ = 2;
   var _loc6_ = 21;
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   _loc5_ = this.m_asStar.length;
   _loc3_ = 0;
   while(_loc3_ < _loc5_)
   {
      if(this.m_asStar[_loc3_]._visible)
      {
         this.m_asStar[_loc3_]._y += Math.floor((_loc6_ - _loc4_) * this.m_fRate + _loc4_);
         if(_root.SCREEN_H < this.m_asStar[_loc3_]._y)
         {
            this.m_asStar[_loc3_]._visible = false;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerShootingStar.prototype.addShootingStar = function(f_rate)
{
   var _loc5_ = undefined;
   _loc5_ = Math.random() * (f_rate + 1);
   if(_loc5_ < 0.95)
   {
      return undefined;
   }
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _loc4_ = this.m_asStar.length;
   _loc3_ = 0;
   while(_loc3_ < _loc4_)
   {
      if(!this.m_asStar[_loc3_]._visible)
      {
         this.m_asStar[_loc3_]._visible = true;
         this.m_asStar[_loc3_]._x = Math.floor(Math.random() * _root.SCREEN_W);
         this.m_asStar[_loc3_]._y = -32;
         break;
      }
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManagerShipProgressMeter.prototype.init = function(f_rate)
{
   this.exec(f_rate);
   this.m_mcMeter._visible = true;
   this.m_nCount = 0;
};
CTrionManagerShipProgressMeter.prototype.quit = function()
{
   this.m_mcMeter._visible = false;
};
CTrionManagerShipProgressMeter.prototype.exec = function(f_rate)
{
   var _loc4_ = 0;
   var _loc5_ = 112;
   this.m_nCount = this.m_nCount + 1;
   this.m_mcShip._x = Math.floor((_loc5_ - _loc4_) * f_rate + _loc4_);
   var _loc6_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = Math.sin(6.283185307179586 * this.m_nCount / _root.FPS);
   _loc3_ = Math.abs(_loc3_);
   _loc6_ = (_loc3_ + 1) * 100;
   this.m_mcShip._xscale = this.m_mcShip._yscale = _loc6_;
};
CTrionManagerShipProgressMeter.prototype.isFinish = function()
{
   if(_root.FPS < this.m_nCount)
   {
      return true;
   }
   return false;
};
CTrionManagerDangerEffect.prototype.init = function()
{
   this.m_bEnable = true;
   this.m_nMoveCount = 0;
   this.m_mcParent._visible = false;
};
CTrionManagerDangerEffect.prototype.quit = function()
{
   this.m_bEnable = false;
   this.m_nMoveCount = 0;
   this.m_mcParent._visible = false;
};
CTrionManagerDangerEffect.prototype.exec = function(n_timer)
{
   if(!this.m_bEnable)
   {
      return undefined;
   }
   if(_root.GAME_PLAY_TIME_FRAME_DANGER <= n_timer || this.m_cTrionCtx.isGameClear() || this.m_cTrionCtx.isGameOver())
   {
      if(this.m_mcParent._visible)
      {
         this.m_mcParent._visible = false;
         this.m_nMoveCount = 0;
      }
   }
   else
   {
      var _loc6_ = undefined;
      var _loc3_ = undefined;
      var _loc4_ = undefined;
      _loc6_ = n_timer / _root.GAME_PLAY_TIME_FRAME_DANGER;
      _loc3_ = 0;
      _loc4_ = 0;
      this.setNumber(int(n_timer / _root.FPS));
      var _loc14_ = _root.FPS * 3;
      var _loc7_ = _root.BLOCK_W * 4;
      var _loc15_ = undefined;
      var _loc12_ = undefined;
      var _loc11_ = undefined;
      this.m_nMoveCount = this.m_nMoveCount + 1;
      _loc15_ = this.m_nMoveCount * 3.141592653589793 / _loc14_;
      _loc12_ = Math.sin(_loc15_);
      _loc11_ = _loc12_ * _loc7_;
      _loc3_ = Math.floor(_loc11_);
      var _loc13_ = 16;
      var _loc10_ = undefined;
      var _loc5_ = undefined;
      _loc10_ = 1 - _loc6_;
      _loc5_ = _loc10_ * _loc13_;
      _loc3_ += Math.floor((Math.random() * 0.5 - 0.5) * _loc5_);
      _loc4_ += Math.floor((Math.random() * 0.5 - 0.5) * _loc5_);
      this.m_mcParent._visible = true;
      this.m_mcParent._x = this.m_nBaseX + _loc3_;
      this.m_mcParent._y = this.m_nBaseY + _loc4_;
      var _loc8_ = 24;
      if(!(this.m_nMoveCount % _loc8_))
      {
         this.m_cTrionCtx.setPlaySEFlag(_root.eSE_TYPE_DANGER);
      }
   }
};
CTrionManagerDangerEffect.prototype.setNumber = function(n_num)
{
   var _loc2_ = undefined;
   _loc2_ = n_num % 10;
   this.m_mcParent.mcCounter.gotoAndStop(_loc2_ + 1);
};
CTrionManagerGameTimer.prototype.init = function()
{
   this.m_nGameTimerFrame = 0;
   this.m_nInitTimerFrame = 0;
   this.m_nSlowCount = 0;
};
CTrionManagerGameTimer.prototype.quit = function()
{
   this.m_nGameTimerFrame = 0;
   this.m_nInitTimerFrame = 0;
   this.m_nSlowCount = 0;
};
CTrionManagerGameTimer.prototype.reset = function()
{
   this.m_nGameTimerFrame = this.m_nInitTimerFrame;
   this.m_nSlowCount = 0;
};
CTrionManagerGameTimer.prototype.exec = function()
{
   if(this.isFinish())
   {
      return undefined;
   }
   if(this.m_nGameTimerFrame <= _root.DANGER_SLOW_MOTION_FRAME)
   {
      var _loc3_ = m_nGameTimerFrame;
      this.m_nSlowCount = this.m_nSlowCount + 1;
      if(_root.DANGER_SLOW_MOTION_RATE <= this.m_nSlowCount)
      {
         this.m_nSlowCount = 0;
         this.m_nGameTimerFrame = this.m_nGameTimerFrame - 1;
      }
      if(_loc3_ / _root.FPS != this.m_nGameTimerFrame / _root.FPS)
      {
         this.m_cTrionCtx.setPlaySEFlag(_root.eSE_TYPE_TIME_COUNT);
      }
   }
   else
   {
      this.m_nGameTimerFrame = this.m_nGameTimerFrame - 1;
   }
   if(this.m_nGameTimerFrame < 0)
   {
      this.m_nGameTimerFrame = 0;
   }
};
CTrionManagerGameTimer.prototype.isFinish = function()
{
   if(this.m_nGameTimerFrame <= 0)
   {
      return true;
   }
   return false;
};
CTrionManagerGameTimer.prototype.setGameTimerFrame = function(n_frame)
{
   this.m_nInitTimerFrame = n_frame;
   this.m_nGameTimerFrame = n_frame;
};
CTrionManagerGameTimer.prototype.getGameTimerFrame = function()
{
   return this.m_nGameTimerFrame;
};
CTrionManagerGameTimer.prototype.getGameTimerFrameOfBegin = function()
{
   return this.m_nInitTimerFrame;
};
CTrionManagerGameMissionShipInfo.prototype.init = function()
{
   this.m_nAddY = 0;
   this.m_nDepth = 1;
   this.m_asPlanet = [];
   this.m_asDistNum = [];
   this.m_asMeter = [];
};
CTrionManagerGameMissionShipInfo.prototype.quit = function()
{
   this.cleanMovieClip();
};
CTrionManagerGameMissionShipInfo.prototype.addScore = function(n_add_score)
{
   this.m_nAddY += n_add_score;
   this.m_mcParent._y += n_add_score;
};
CTrionManagerGameMissionShipInfo.prototype.setShipInfo = function(n_clear_score)
{
   var _loc6_ = 44;
   var _loc5_ = 36;
   var _loc7_ = 28;
   var _loc8_ = 20;
   var _loc4_ = undefined;
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   this.cleanMovieClip();
   _loc4_ = 0;
   _loc2_ = n_clear_score;
   while(0 <= _loc2_)
   {
      _loc3_ = "Line" + this.m_nDepth;
      mc = this.m_mcParent.attachMovie("mcLine",_loc3_,this.m_nDepth);
      if(!(_loc2_ % 100))
      {
         mc._x = _loc7_;
      }
      else if(!(_loc2_ % 50))
      {
         mc._x = _loc5_;
      }
      else
      {
         mc._x = _loc6_;
      }
      mc._y = _loc4_;
      this.m_nDepth = this.m_nDepth + 1;
      this.m_asMeter.push(mc);
      if(!(_loc2_ % 100))
      {
         _loc3_ = "Dist" + this.m_nDepth;
         mc = this.m_mcParent.attachMovie("mcNumberDist",_loc3_,this.m_nDepth);
         this.setDistNumber(mc,_loc2_);
         mc._x = _loc8_;
         mc._y = _loc4_;
         this.m_nDepth = this.m_nDepth + 1;
         this.m_asDistNum.push(mc);
      }
      if(n_clear_score / 2 == _loc2_)
      {
         _loc3_ = "Pla" + this.m_nDepth;
         mc = this.m_mcParent.attachMovie("mcPlanetS",_loc3_,this.m_nDepth);
         mc._x = 0;
         mc._y = _loc4_;
         this.m_nDepth = this.m_nDepth + 1;
         this.m_asPlanet.push(mc);
      }
      if(!_loc2_)
      {
         _loc3_ = "Pla" + this.m_nDepth;
         mc = this.m_mcParent.attachMovie("mcPlanetL",_loc3_,this.m_nDepth);
         mc._x = 0;
         mc._y = _loc4_;
         this.m_nDepth = this.m_nDepth + 1;
         this.m_asPlanet.push(mc);
      }
      _loc4_ -= 10;
      _loc2_ -= 10;
   }
};
CTrionManagerGameMissionShipInfo.prototype.setDistNumber = function(mc, n_dist)
{
   var _loc1_ = undefined;
   var _loc3_ = undefined;
   _loc1_ = n_dist;
   mc.mcDigit1000._visible = false;
   mc.mcDigit100._visible = false;
   mc.mcDigit10._visible = false;
   _loc3_ = _loc1_ % 10;
   mc.mcDigit1.gotoAndStop(_loc3_ + 1);
   _loc1_ = Math.floor(_loc1_ / 10);
   if(_loc1_)
   {
      mc.mcDigit10._visible = true;
      _loc3_ = _loc1_ % 10;
      mc.mcDigit10.gotoAndStop(_loc3_ + 1);
      _loc1_ = Math.floor(_loc1_ / 10);
   }
   if(_loc1_)
   {
      mc.mcDigit100._visible = true;
      _loc3_ = _loc1_ % 10;
      mc.mcDigit100.gotoAndStop(_loc3_ + 1);
      _loc1_ = Math.floor(_loc1_ / 10);
   }
   if(_loc1_)
   {
      mc.mcDigit1000._visible = true;
      _loc3_ = _loc1_ % 10;
      mc.mcDigit1000.gotoAndStop(_loc3_ + 1);
      _loc1_ = Math.floor(_loc1_ / 10);
   }
};
CTrionManagerGameMissionShipInfo.prototype.cleanMovieClip = function()
{
   var _loc2_ = undefined;
   this.m_mcParent._y -= this.m_nAddY;
   this.m_nAddY = 0;
   var _loc3_ = undefined;
   _loc3_ = this.m_asMeter.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asMeter[_loc2_].removeMovieClip();
      _loc2_ = _loc2_ + 1;
   }
   this.m_asMeter = [];
   _loc3_ = this.m_asDistNum.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asDistNum[_loc2_].removeMovieClip();
      _loc2_ = _loc2_ + 1;
   }
   this.m_asDistNum = [];
   _loc3_ = this.m_asPlanet.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asPlanet[_loc2_].removeMovieClip();
      _loc2_ = _loc2_ + 1;
   }
   this.m_asPlanet = [];
   this.m_nDepth = 1;
};
CTrionManagerMissionBooster.prototype.init = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   this.m_nAddWait = 0;
   this.m_nBoosterCount = 0;
   sp01 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster01};
   this.m_asBooster.push(sp01);
   sp02 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster02};
   this.m_asBooster.push(sp02);
   sp03 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster03};
   this.m_asBooster.push(sp03);
   sp04 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster04};
   this.m_asBooster.push(sp04);
   sp05 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster05};
   this.m_asBooster.push(sp05);
   sp06 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster06};
   this.m_asBooster.push(sp06);
   sp07 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster07};
   this.m_asBooster.push(sp07);
   sp08 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster08};
   this.m_asBooster.push(sp08);
   sp09 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster09};
   this.m_asBooster.push(sp09);
   sp10 = {m_nCount:0,m_fMX:0,m_fMY:0,m_mcBooster:this.m_mcParent.mcBooster10};
   this.m_asBooster.push(sp10);
   _loc3_ = this.m_asBooster.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asBooster[_loc2_].m_mcBooster._visible = false;
      _loc2_ = _loc2_ + 1;
   }
   trace("MissionBooster INIT");
};
CTrionManagerMissionBooster.prototype.quit = function()
{
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_asBooster.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      this.m_asBooster[_loc2_].m_mcBooster._visible = false;
      _loc2_ = _loc2_ + 1;
   }
   this.m_asBooster = [];
   trace("MissionBooster QUIT");
};
CTrionManagerMissionBooster.prototype.exec = function()
{
   this.execBoosterInside();
   var _loc2_ = undefined;
   var _loc3_ = undefined;
   _loc3_ = this.m_asBooster.length;
   _loc2_ = 0;
   while(_loc2_ < _loc3_)
   {
      if(this.m_asBooster[_loc2_].m_nCount)
      {
         this.m_asBooster[_loc2_].m_mcBooster._x += this.m_asBooster[_loc2_].m_fMX;
         this.m_asBooster[_loc2_].m_mcBooster._y += this.m_asBooster[_loc2_].m_fMY;
         this.m_asBooster[_loc2_].m_nCount--;
         if(this.m_asBooster[_loc2_].m_nCount <= 0)
         {
            this.m_asBooster[_loc2_].m_nCount = 0;
            this.m_asBooster[_loc2_].m_mcBooster._visible = false;
         }
      }
      _loc2_ = _loc2_ + 1;
   }
};
CTrionManagerMissionBooster.prototype.addBooster = function()
{
   this.m_nBoosterCount = this.m_nBoosterCount + 1;
};
CTrionManagerMissionBooster.prototype.execBoosterInside = function()
{
   if(0 < this.m_nAddWait)
   {
      this.m_nAddWait = this.m_nAddWait - 1;
   }
   if(0 < this.m_nBoosterCount)
   {
      var _loc3_ = undefined;
      var _loc4_ = undefined;
      _loc4_ = this.m_asBooster.length;
      _loc3_ = 0;
      while(_loc3_ < _loc4_)
      {
         if(!this.m_asBooster[_loc3_].m_nCount)
         {
            this.m_asBooster[_loc3_].m_mcBooster._visible = true;
            this.m_asBooster[_loc3_].m_mcBooster._x = this.m_mcParent.mcShip._x;
            this.m_asBooster[_loc3_].m_mcBooster._y = this.m_mcParent.mcShip._y + 16;
            this.m_asBooster[_loc3_].m_nCount = _root.FPS / 2;
            this.m_asBooster[_loc3_].m_fMX = Math.random() * 2 - 1;
            this.m_asBooster[_loc3_].m_fMY = 8;
            this.m_nBoosterCount = this.m_nBoosterCount - 1;
            this.m_nAddWait = _root.FPS / 10;
            break;
         }
         _loc3_ = _loc3_ + 1;
      }
   }
};
CTrionManagerGameMissionManager.prototype.init = function()
{
   this.m_nScore = 0;
   this.m_nScoreAdd = 0;
   this.m_nChainCount = 0;
   this.m_nChainUpCount = 0;
   this.m_bLevelUp = false;
   this.m_fShipSpeedRate = 0;
   this.m_nSpeedDownCount = 0;
   this.m_cShipInfo.init();
   this.m_cShipInfo.setShipInfo(1000);
   this.m_cBooster.init();
};
CTrionManagerGameMissionManager.prototype.quit = function()
{
   this.m_cShipInfo.quit();
   this.m_nScore = 0;
   this.m_nScoreAdd = 0;
   this.m_nChainCount = 0;
   this.m_nChainUpCount = 0;
   this.m_bLevelUp = false;
   this.m_fShipSpeedRate = 0;
   this.m_nSpeedDownCount = 0;
   this.m_cBooster.quit();
   _root.mcSprite3.mcShipInfo._y = 0;
};
CTrionManagerGameMissionManager.prototype.exec = function(n_chain_count)
{
   this.execLevel();
   this.execChain(n_chain_count);
   this.execShipSpeed();
   this.execBooster();
};
CTrionManagerGameMissionManager.prototype.addMissionCountUpScore = function(n_add_score)
{
   this.m_nScoreAdd += n_add_score;
};
CTrionManagerGameMissionManager.prototype.getMissionScoreRate = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   var _loc2_ = undefined;
   _loc4_ = this.m_cTrionCtx.getLevel();
   _loc3_ = this.m_cTrionCtx.m_cGameLevelTable.getLeveUpScore(_loc4_);
   if(_loc3_ < 0)
   {
      _loc3_ = 0;
   }
   _loc2_ = this.m_nScore / _loc3_;
   if(1 < _loc2_)
   {
      _loc2_ = 1;
   }
   return _loc2_;
};
CTrionManagerGameMissionManager.prototype.getMissionScoreOfRemain = function()
{
   var _loc3_ = undefined;
   var _loc2_ = undefined;
   _loc3_ = this.m_cTrionCtx.getLevel();
   _loc2_ = this.m_cTrionCtx.m_cGameLevelTable.getLeveUpScore(_loc3_);
   if(_loc2_ < 0)
   {
      _loc2_ = 0;
   }
   return _loc2_ - this.m_nScore;
};
CTrionManagerGameMissionManager.prototype.isLevelUpMissionCountUpScore = function()
{
   return this.m_bLevelUp;
};
CTrionManagerGameMissionManager.prototype.getMissionShipSpeedRate = function()
{
   return this.m_fShipSpeedRate;
};
CTrionManagerGameMissionManager.prototype.getMissionShipLocateX = function()
{
   var _loc2_ = {x:_root.mcSprite3.mcShipInfo.mcShip._x - _root.mcSprite3.mcShipInfo.mcShip._width / 2,y:_root.mcSprite3.mcShipInfo.mcShip._y - _root.mcSprite3.mcShipInfo.mcShip._height / 2};
   _root.mcSprite3.mcShipInfo.localToGlobal(_loc2_);
   _root.globalToLocal(_loc2_);
   return _loc2_.x;
};
CTrionManagerGameMissionManager.prototype.getMissionShipLocateY = function()
{
   var _loc2_ = {x:_root.mcSprite3.mcShipInfo.mcShip._x - _root.mcSprite3.mcShipInfo.mcShip._width / 2,y:_root.mcSprite3.mcShipInfo.mcShip._y - _root.mcSprite3.mcShipInfo.mcShip._height / 2};
   _root.mcSprite3.mcShipInfo.localToGlobal(_loc2_);
   _root.globalToLocal(_loc2_);
   return _loc2_.y;
};
CTrionManagerGameMissionManager.prototype.incMissionBooster = function()
{
   this.m_cBooster.addBooster();
};
CTrionManagerGameMissionManager.prototype.execLevel = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   if(this.m_cTrionCtx.isGameClear() || this.m_cTrionCtx.isGameOver())
   {
      return undefined;
   }
   if(this.m_bLevelUp)
   {
      this.m_bLevelUp = false;
      _loc3_ = this.m_cTrionCtx.getLevel();
      if(_loc3_ < _root.GAME_LEVEL_MAX)
      {
         _loc4_ = this.m_cTrionCtx.m_cGameLevelTable.getLeveUpScore(_loc3_);
         trace("GameLevel::" + _loc3_);
         trace("GameScore::" + _loc4_);
         this.m_cShipInfo.setShipInfo(_loc4_);
      }
   }
   if(this.m_nScoreAdd)
   {
      if(_root.SCORE_UP_RATE < this.m_nScoreAdd)
      {
         this.m_cShipInfo.addScore(_root.SCORE_UP_RATE);
         this.m_nScore += _root.SCORE_UP_RATE;
         this.m_nScoreAdd -= _root.SCORE_UP_RATE;
      }
      else
      {
         this.m_cShipInfo.addScore(this.m_nScoreAdd);
         this.m_nScore += this.m_nScoreAdd;
         this.m_nScoreAdd = 0;
      }
      _loc3_ = this.m_cTrionCtx.getLevel();
      if(_loc3_ <= _root.GAME_LEVEL_MAX)
      {
         _loc4_ = this.m_cTrionCtx.m_cGameLevelTable.getLeveUpScore(_loc3_);
         if(_loc4_ <= this.m_nScore)
         {
            this.m_bLevelUp = true;
            this.m_nScore -= _loc4_;
         }
      }
   }
};
CTrionManagerGameMissionManager.prototype.execChain = function(n_chain_count)
{
   var _loc3_ = _root.mcSprite3.mcShipInfo._y;
   if(this.m_nChainCount != n_chain_count)
   {
      this.m_nChainCount = n_chain_count;
      this.m_nChainUpCount += this.m_nChainCount;
      this.execChainShipJet();
   }
   if(0 < this.m_nChainUpCount)
   {
      this.m_nChainUpCount = this.m_nChainUpCount - 1;
      _loc3_ = _loc3_ - 1;
      if(_loc3_ < _root.SHIP_MOVE_RANGE)
      {
         _loc3_ = _root.SHIP_MOVE_RANGE;
      }
   }
   else if(this.m_nScoreAdd <= 0)
   {
      var _loc4_ = undefined;
      _loc4_ = Math.floor(_loc3_ / _root.SHIP_SPEED_DOWN_DEMON);
      this.m_nSpeedDownCount = this.m_nSpeedDownCount + 1;
      if(_root.SHIP_SPEED_DOWN_COUNT + _loc4_ < this.m_nSpeedDownCount)
      {
         this.m_nSpeedDownCount = 0;
         _loc3_ = _loc3_ + 1;
         if(0 < _loc3_)
         {
            _loc3_ = 0;
         }
      }
   }
   _root.mcSprite3.mcShipInfo._y = _loc3_;
};
CTrionManagerGameMissionManager.prototype.execShipSpeed = function()
{
   var _loc3_ = undefined;
   _loc3_ = 0;
   if(this.m_cTrionCtx.isGameClear() || this.m_cTrionCtx.isGameOver())
   {
      var _loc4_ = 1 / (_root.FPS * 2);
      _loc3_ = this.m_fShipSpeedRate;
      _loc3_ -= _loc4_;
   }
   else
   {
      _loc3_ = _root.mcSprite3.mcShipInfo._y / _root.SHIP_MOVE_RANGE;
   }
   if(_loc3_ < 0)
   {
      _loc3_ = 0;
   }
   if(1 < _loc3_)
   {
      _loc3_ = 1;
   }
   this.m_fShipSpeedRate = _loc3_;
};
CTrionManagerGameMissionManager.prototype.execBooster = function()
{
   this.m_cBooster.exec();
};
CTrionManagerGameMissionManager.prototype.execChainShipJet = function()
{
   var _loc3_ = undefined;
   _loc3_ = Math.floor((this.m_nChainCount + 9) / 10);
   if(6 < _loc3_)
   {
      _loc3_ = 6;
   }
   _loc3_ = _loc3_ + 1;
   _root.mcSprite3.mcShipInfo.mcJet.gotoAndStop(_loc3_);
};
CGameLevelTable.prototype.init = function()
{
};
CGameLevelTable.prototype.quit = function()
{
};
CGameLevelTable.prototype.getLeveUpScore = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nScore;
};
CGameLevelTable.prototype.getGameTimer = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nTimer;
};
CGameLevelTable.prototype.getBlock01EntryRate = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_BlockRate1;
};
CGameLevelTable.prototype.getBlock02EntryRate = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_BlockRate2;
};
CGameLevelTable.prototype.getBlock03EntryRate = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_BlockRate3;
};
CGameLevelTable.prototype.getBlock04EntryRate = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_BlockRate4;
};
CGameLevelTable.prototype.getBlock05EntryRate = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_BlockRate5;
};
CGameLevelTable.prototype.getBlockFallSpeedLow = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nSpeedLow;
};
CGameLevelTable.prototype.getBlockFallSpeedHi = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nSpeedHi;
};
CGameLevelTable.prototype.getBlockChainBreakSpeedLow = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nChainBreakLow;
};
CGameLevelTable.prototype.getBlockChainBreakSpeedHi = function(n_level)
{
   if(n_level < _root.GAME_LEVEL_MIN || _root.GAME_LEVEL_MAX < n_level)
   {
      trace("不正なゲームレベルです。");
      return 0;
   }
   return this.m_asGameLevelTable[n_level].m_nChainBreakHi;
};
var FIRST_BLOCK_POS_X = 4;
var FIRST_BLOCK_POS_Y = 2;
var NEXT_BLOCK_MAX = 2;
var TRI_BG_CHAIN_BLOCK = 0;
var TRI_BG_MAIN_BLOCK = 1;
CTrionManager.prototype.init = function()
{
   this.resetParam(0);
   this.m_cChainEffect.init();
   this.m_cGameClear.init();
   this.m_cGameOver.init();
   this.m_cShootingStar.init();
   this.m_cGameLevelTable.init();
   this.m_cMissionMgr.init();
   this.m_cDangerEffect.init();
   this.m_cGameTimer.init();
   this.m_cGameTimer.setGameTimerFrame(this.m_cGameLevelTable.getGameTimer(this.m_nGameLevel) * _root.FPS);
   this.m_cChainGuaid.setVisible(false);
   this.m_nPhase = _root.PLAYER_PHASE_INIT;
   this.m_bEnable = true;
};
CTrionManager.prototype.quit = function()
{
   this.resetParam(0);
   this.m_cChainEffect.quit();
   this.m_cGameClear.quit();
   this.m_cGameOver.quit();
   this.m_cShootingStar.quit();
   this.m_cGameLevelTable.quit();
   this.m_cMissionMgr.quit();
   this.m_cDangerEffect.quit();
   this.m_cGameTimer.quit();
   this.m_bEnable = false;
};
CTrionManager.prototype.isFinish = function()
{
   if(_root.PLAYER_PHASE_NONE == this.m_nPhase)
   {
      return true;
   }
   return false;
};
CTrionManager.prototype.exec = function()
{
   var _loc2_ = undefined;
   this.checkGameState();
   _loc2_ = this.m_nPhase;
   switch(this.m_nPhase)
   {
      case PLAYER_PHASE_NONE:
         _loc2_ = this.phaseNone();
         break;
      case PLAYER_PHASE_INIT:
         _loc2_ = this.phaseInit();
         break;
      case PLAYER_PHASE_WAIT:
         _loc2_ = this.phaseWait();
         break;
      case PLAYER_PHASE_GAME_START_DEMO_BEFORE:
         _loc2_ = this.phaseGameStartDemoBefore();
         break;
      case PLAYER_PHASE_GAME_START_DEMO:
         _loc2_ = this.phaseGameStartDemo();
         break;
      case PLAYER_PHASE_GAME_START_DEMO_AFTER:
         _loc2_ = this.phaseGameStartDemoAfter();
         break;
      case PLAYER_PHASE_WAIT_WL:
         _loc2_ = this.phaseWaitWL();
         break;
      case PLAYER_PHASE_GAME_START_LOGO_BEFORE:
         _loc2_ = this.phaseGameStartLogoBefore();
         break;
      case PLAYER_PHASE_GAME_START_LOGO:
         _loc2_ = this.phaseGameStartLogo();
         break;
      case PLAYER_PHASE_GAME_START_LOGO_AFTER:
         _loc2_ = this.phaseGameStartLogoAfter();
         break;
      case PLAYER_PHASE_INPUT_BEFORE:
         _loc2_ = this.phaseInputBefore();
         break;
      case PLAYER_PHASE_INPUT:
         _loc2_ = this.phaseInput();
         break;
      case PLAYER_PHASE_INPUT_AFTER_BLOCK_SET:
         _loc2_ = this.phaseInputAfterBlockSet();
         break;
      case PLAYER_PHASE_INPUT_AFTER:
         _loc2_ = this.phaseInputAfter();
         break;
      case PLAYER_PHASE_BLOCK_DOWN_BEFORE:
         _loc2_ = this.phaseBlockDownBefore();
         break;
      case PLAYER_PHASE_BLOCK_DOWN:
         _loc2_ = this.phaseBlockDown();
         break;
      case PLAYER_PHASE_OJYAMA_BLOCK_BEFORE:
         _loc2_ = this.phaseOjyamaBlockBefore();
         break;
      case PLAYER_PHASE_OJYAMA_BLOCK:
         _loc2_ = this.phaseOjyamaBlock();
         break;
      case PLAYER_PHASE_OJYAMA_BLOCK_AFTER:
         _loc2_ = this.phaseOjyamaBlockAfter();
         break;
      case PLAYER_PHASE_CHECK_GAME_OVER:
         _loc2_ = this.phaseCheckGameOver();
         break;
      case PLAYER_PHASE_NEXT_BLOCK_BEFORE:
         _loc2_ = this.phaseNextBlockBefore();
         break;
      case PLAYER_PHASE_NEXT_BLOCK:
         _loc2_ = this.phaseNextBlock();
         break;
      case PLAYER_PHASE_NEXT_BLOCK_AFTER:
         _loc2_ = this.phaseNextBlockAfter();
         break;
      case PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE:
         _loc2_ = this.phaseChainOverChangeCoinBefore();
         break;
      case PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN:
         _loc2_ = this.phaseChainOverChangeCoin();
         break;
      case PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_AFTER:
         _loc2_ = this.phaseChainOverChangeCoinAfter();
         break;
      case PLAYER_PHASE_CHAIN_OVER_BEFORE:
         _loc2_ = this.phaseChainOverBefore();
         break;
      case PLAYER_PHASE_CHAIN_OVER:
         _loc2_ = this.phaseChainOver();
         break;
      case PLAYER_PHASE_CHAIN_OVER_AFTER:
         _loc2_ = this.phaseChainOverAfter();
         break;
      case PLAYER_PHASE_CHAIN_OVER_EFFECT_WAIT:
         _loc2_ = this.phaseChainOverEffectWait();
         break;
      case PLAYER_PHASE_CHAIN_2ND_BEFORE:
         _loc2_ = this.phaseChain2ndBefore();
         break;
      case PLAYER_PHASE_CHAIN_2ND:
         _loc2_ = this.phaseChain2nd();
         break;
      case PLAYER_PHASE_CHAIN_2ND_AFTER:
         _loc2_ = this.phaseChain2ndAfter();
         break;
      case PLAYER_PHASE_CHECK_FALL_BLOCK:
         _loc2_ = this.phaseCheckFallBlock();
         break;
      case PLAYER_PHASE_SHIP_PROGRESS_METER_BEFORE:
         _loc2_ = this.phaseShipProgressMeterBefore();
         break;
      case PLAYER_PHASE_SHIP_PROGRESS_METER:
         _loc2_ = this.phaseShipProgressMeter();
         break;
      case PLAYER_PHASE_SHIP_PROGRESS_METER_AFTER:
         _loc2_ = this.phaseShipProgressMeterAfter();
         break;
      case PLAYER_PHASE_PERFECT_BEFORE:
         _loc2_ = this.phaseGamePerfectBefore();
         break;
      case PLAYER_PHASE_PERFECT:
         _loc2_ = this.phaseGamePerfect();
         break;
      case PLAYER_PHASE_PERFECT_AFTER:
         _loc2_ = this.phaseGamePerfectAfter();
         break;
      case PLAYER_PHASE_GAME_OVER_BEFORE:
         _loc2_ = this.phaseGameOverBefore();
         break;
      case PLAYER_PHASE_GAME_OVER:
         _loc2_ = this.phaseGameOver();
         break;
      case PLAYER_PHASE_GAME_OVER_AFTER:
         _loc2_ = this.phaseGameOverAfter();
         break;
      case PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_BEFORE:
         _loc2_ = this.phaseGameClearTimeIsMoneyBefore();
         break;
      case PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_WAIT:
         _loc2_ = this.phaseGameClearTimeIsMoneyWait();
         break;
      case PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY:
         _loc2_ = this.phaseGameClearTimeIsMoney();
         break;
      case PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_AFTER:
         _loc2_ = this.phaseGameClearTimeIsMoneyAfter();
         break;
      case PLAYER_PHASE_GAME_CLEAR_BEFORE:
         _loc2_ = this.phaseGameClearBefore();
         break;
      case PLAYER_PHASE_GAME_CLEAR:
         _loc2_ = this.phaseGameClear();
         break;
      case PLAYER_PHASE_GAME_CLEAR_AFTER:
         _loc2_ = this.phaseGameClearAfter();
         break;
      case PLAYER_PHASE_GAME_FINISH_WAIT_BEFORE:
         _loc2_ = this.phaseGameFinishWaitBefore();
         break;
      case PLAYER_PHASE_GAME_FINISH_WAIT:
         _loc2_ = this.phaseGameFinishWait();
         break;
      case PLAYER_PHASE_GAME_FINISH_WAITVS:
         _loc2_ = this.phaseGameFinishWaitVS();
         break;
      case PLAYER_PHASE_GAME_FINISH:
         _loc2_ = this.phaseGameFinish();
         break;
      case PLAYER_PHASE_QUIT:
         _loc2_ = this.phaseQuit();
   }
   this.m_nPhase = _loc2_;
   this.execOther();
   this.m_cMissionMgr.exec(this.m_cChainEffect.getChainCount());
   this.execSprite();
   this.execBG();
};
CTrionManager.prototype.isEnable = function()
{
   return this.m_bEnable;
};
CTrionManager.prototype.isGameClear = function()
{
   return this.m_bGameClear;
};
CTrionManager.prototype.isGameOver = function()
{
   return this.m_bGameOver;
};
CTrionManager.prototype.phaseNone = function()
{
   return _root.PLAYER_PHASE_NONE;
};
CTrionManager.prototype.phaseInit = function()
{
   return _root.PLAYER_PHASE_WAIT;
};
CTrionManager.prototype.phaseWait = function()
{
   return _root.PLAYER_PHASE_GAME_START_DEMO_BEFORE;
};
CTrionManager.prototype.phaseGameStartDemoBefore = function()
{
   return _root.PLAYER_PHASE_GAME_START_DEMO;
};
CTrionManager.prototype.phaseGameStartDemo = function()
{
   return _root.PLAYER_PHASE_GAME_START_DEMO_AFTER;
};
CTrionManager.prototype.phaseGameStartDemoAfter = function()
{
   _root.JumpUpDispDemo(_root.UP_DEMO_NORMAL);
   return _root.PLAYER_PHASE_WAIT_WL;
};
CTrionManager.prototype.phaseWaitWL = function()
{
   return _root.PLAYER_PHASE_GAME_START_LOGO_BEFORE;
};
CTrionManager.prototype.phaseGameStartLogoBefore = function()
{
   this.setPlaySEFlag(_root.eSE_TYPE_GAME_START);
   this.m_cGameStart.init();
   return _root.PLAYER_PHASE_GAME_START_LOGO;
};
CTrionManager.prototype.phaseGameStartLogo = function()
{
   this.m_cGameStart.exec();
   if(this.m_cGameStart.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_START_LOGO_AFTER;
   }
   return _root.PLAYER_PHASE_GAME_START_LOGO;
};
CTrionManager.prototype.phaseGameStartLogoAfter = function()
{
   this.m_cGameStart.quit();
   return _root.PLAYER_PHASE_NEXT_BLOCK_BEFORE;
};
CTrionManager.prototype.phaseInputBefore = function()
{
   return _root.PLAYER_PHASE_INPUT;
};
CTrionManager.prototype.phaseInput = function()
{
   var _loc3_ = undefined;
   _loc3_ = _root.PLAYER_PHASE_INPUT;
   if(this.isGameClear())
   {
      if(this.m_bChain)
      {
         this.m_bChain = false;
         this.m_nChainCountFrame = 0;
      }
      this.m_bVisibleOperate = false;
      return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
   }
   if(this.isGameOver())
   {
      return _root.PLAYER_PHASE_GAME_OVER_BEFORE;
   }
   if(this.m_bChain)
   {
      this.m_nChainCountFrame = this.m_nChainCountFrame - 1;
      if(this.m_nChainCountFrame < 0)
      {
         trace("連鎖崩壊 ");
         this.m_bVisibleOperate = false;
         this.m_bChainBreakTimerOver = true;
         this.m_bChain = false;
         this.m_nChainCountFrame = 0;
         return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
      }
   }
   if(!this.move())
   {
      _loc3_ = _root.PLAYER_PHASE_INPUT_AFTER_BLOCK_SET;
   }
   this.m_cMyBlock.setBlockDir(this.m_eBlockDir);
   this.m_cMyBlock.setBlockPos(this.m_nBlockX,this.m_nBlockY,this.m_nBlockOffsetX,this.m_nBlockOffsetY);
   return _loc3_;
};
CTrionManager.prototype.phaseInputAfterBlockSet = function()
{
   var _loc3_ = undefined;
   var _loc6_ = undefined;
   var _loc7_ = undefined;
   var _loc9_ = undefined;
   var _loc8_ = undefined;
   _loc6_ = this.m_eBlockType;
   _loc7_ = this.m_eBlockDir;
   _loc9_ = this.m_nBlockX;
   _loc8_ = this.m_nBlockY;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      var _loc5_ = undefined;
      var _loc4_ = undefined;
      _loc5_ = _loc9_ + this.m_anBlockOffsetPos[_loc6_][_loc7_][_loc3_][0];
      _loc4_ = _loc8_ + this.m_anBlockOffsetPos[_loc6_][_loc7_][_loc3_][1];
      if(0 <= _loc5_ && _loc5_ < _root.BLOCK_BUF_W && 0 <= _loc4_ && _loc4_ < _root.BLOCK_BUF_H)
      {
         this.m_anBlockData[_loc4_][_loc5_] = _loc6_;
      }
      _loc3_ = _loc3_ + 1;
   }
   this.setBlockObjBG(_loc9_,_loc8_,_loc6_,_loc7_);
   return _root.PLAYER_PHASE_INPUT_AFTER;
};
CTrionManager.prototype.phaseInputAfter = function()
{
   this.m_bVisibleOperate = false;
   return _root.PLAYER_PHASE_BLOCK_DOWN_BEFORE;
};
CTrionManager.prototype.phaseBlockDownBefore = function()
{
   return _root.PLAYER_PHASE_BLOCK_DOWN;
};
CTrionManager.prototype.phaseBlockDown = function()
{
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   var _loc4_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   _loc3_ = _root.PLAYER_PHASE_OJYAMA_BLOCK_BEFORE;
   _loc5_ = this.m_eBlockType;
   _loc4_ = this.m_eBlockDir;
   _loc7_ = this.m_nBlockX;
   _loc6_ = this.m_nBlockY;
   if(this.isBlock3x3(_loc7_,_loc6_,_loc5_,_loc4_))
   {
      this.m_bChain = true;
      this.m_nChainCountFrame = this.getChainBlockBreakFrame();
      this.setBlock3x3CheckFlag(_loc7_,_loc6_,_loc5_,_loc4_);
      if(this.isGameOverLineOnBlock())
      {
         this.m_bChain = false;
         this.m_nChainCountFrame = 0;
         _loc3_ = _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
      }
      if(this.isPerfectChainBlock())
      {
         this.m_bChain = false;
         this.m_nChainCountFrame = 0;
         _loc3_ = _root.PLAYER_PHASE_PERFECT_BEFORE;
      }
   }
   else if(this.m_bChain)
   {
      this.m_bChain = false;
      this.m_nChainCountFrame = 0;
      _loc3_ = _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
   }
   return _loc3_;
};
CTrionManager.prototype.phaseOjyamaBlockBefore = function()
{
   return _root.PLAYER_PHASE_OJYAMA_BLOCK;
};
CTrionManager.prototype.phaseOjyamaBlock = function()
{
   return _root.PLAYER_PHASE_OJYAMA_BLOCK_AFTER;
};
CTrionManager.prototype.phaseOjyamaBlockAfter = function()
{
   return _root.PLAYER_PHASE_CHECK_GAME_OVER;
};
CTrionManager.prototype.phaseCheckGameOver = function()
{
   if(this.isGameOverLineOnBlock())
   {
      trace("GAME_OVER");
      return _root.PLAYER_PHASE_GAME_OVER_BEFORE;
   }
   return _root.PLAYER_PHASE_NEXT_BLOCK_BEFORE;
};
CTrionManager.prototype.phaseNextBlockBefore = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _root.SetNextBlockType(_root.BLOCK_TYPE_0);
   this.m_eBlockType = this.m_anBlockNextNumber[0];
   this.m_eBlockDir = _root.BLOCK_DIR_0;
   this.m_nBlockX = _root.FIRST_BLOCK_POS_X;
   this.m_nBlockY = _root.FIRST_BLOCK_POS_Y;
   this.m_cMyBlock.setBlockType(this.m_eBlockType);
   this.m_cMyBlock.setBlockDir(this.m_eBlockDir);
   this.m_cMyBlock.setBlockPos(this.m_nBlockX,this.m_nBlockY,this.m_nBlockOffsetX,this.m_nBlockOffsetY);
   _loc3_ = 1;
   while(_loc3_ < _root.NEXT_BLOCK_MAX)
   {
      this.m_anBlockNextNumber[_loc3_ - 1] = this.m_anBlockNextNumber[_loc3_];
      _loc3_ = _loc3_ + 1;
   }
   this.m_anBlockNextNumber[_root.NEXT_BLOCK_MAX - 1] = this.getNextBlockType();
   _root.mcSprite0.mcNextBlock._x = 160;
   _root.mcSprite0.mcNextBlock._y = 0;
   _root.mcSprite0.mcEntryBlock._x = 60;
   _root.mcSprite0.mcEntryBlock._y = -24;
   _root.SetNextBlockType(this.m_anBlockNextNumber[0]);
   _root.SetEntryBlockType(this.m_eBlockType);
   return _root.PLAYER_PHASE_NEXT_BLOCK;
};
CTrionManager.prototype.phaseNextBlock = function()
{
   this.m_bVisibleOperate = true;
   return _root.PLAYER_PHASE_NEXT_BLOCK_AFTER;
};
CTrionManager.prototype.phaseNextBlockAfter = function()
{
   this.m_nEntryBlockNumOfLevel = this.m_nEntryBlockNumOfLevel + 1;
   return _root.PLAYER_PHASE_INPUT_BEFORE;
};
CTrionManager.prototype.phaseChainOverChangeCoinBefore = function()
{
   if(!this.m_cChainEffect.isFinishChainEffectOnly())
   {
      return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
   }
   if(!this.isGameClear())
   {
      _root.JumpUpDispDemo(_root.UP_DEMO_CHAIN_END);
   }
   this.m_cChainToCoinEffect.init(this.getChainToContType(this.m_cChainEffect.getChainCount()));
   return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN;
};
CTrionManager.prototype.phaseChainOverChangeCoin = function()
{
   this.m_cChainToCoinEffect.exec();
   if(this.m_cChainToCoinEffect.isFinish())
   {
      return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_AFTER;
   }
   return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN;
};
CTrionManager.prototype.phaseChainOverChangeCoinAfter = function()
{
   this.m_cChainToCoinEffect.quit();
   return _root.PLAYER_PHASE_CHAIN_OVER_BEFORE;
};
CTrionManager.prototype.phaseChainOverBefore = function()
{
   this.m_bChain = false;
   this.m_nChainCountFrame = 0;
   this.m_cChainBreakEffect.init();
   return _root.PLAYER_PHASE_CHAIN_OVER;
};
CTrionManager.prototype.phaseChainOver = function()
{
   this.entryChainBreakEffect(true);
   this.m_cChainEffect.reset();
   return _root.PLAYER_PHASE_CHAIN_OVER_AFTER;
};
CTrionManager.prototype.phaseChainOverAfter = function()
{
   this.m_cChainBreakEffect.exec();
   if(this.m_cChainBreakEffect.isFinish())
   {
      this.m_cChainBreakEffect.quit();
      if(this.isGameClear() || this.isGameOver())
      {
         return _root.PLAYER_PHASE_CHAIN_OVER_EFFECT_WAIT;
      }
      return _root.PLAYER_PHASE_SHIP_PROGRESS_METER_BEFORE;
   }
   return _root.PLAYER_PHASE_CHAIN_OVER_AFTER;
};
CTrionManager.prototype.phaseChainOverEffectWait = function()
{
   if(this.m_cChainEffect.isFinish())
   {
      if(this.isGameClear())
      {
         return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_BEFORE;
      }
      return _root.PLAYER_PHASE_CHAIN_2ND_BEFORE;
   }
   return _root.PLAYER_PHASE_CHAIN_OVER_EFFECT_WAIT;
};
CTrionManager.prototype.phaseChain2ndBefore = function()
{
   if(this.checkChain2nd())
   {
      this.m_bChain = true;
      this.m_nChainCountFrame = this.getChainBlockBreakFrame();
   }
   return _root.PLAYER_PHASE_CHAIN_2ND;
};
CTrionManager.prototype.phaseChain2nd = function()
{
   return _root.PLAYER_PHASE_CHAIN_2ND_AFTER;
};
CTrionManager.prototype.phaseChain2ndAfter = function()
{
   if(this.m_bChainBreakTimerOver)
   {
      this.m_bVisibleOperate = true;
      this.m_bChainBreakTimerOver = false;
      return _root.PLAYER_PHASE_CHECK_FALL_BLOCK;
   }
   return _root.PLAYER_PHASE_CHECK_GAME_OVER;
};
CTrionManager.prototype.phaseCheckFallBlock = function()
{
   var _loc3_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   var _loc9_ = undefined;
   var _loc8_ = undefined;
   _loc7_ = this.m_eBlockType;
   _loc6_ = this.m_eBlockDir;
   _loc9_ = this.m_nBlockX;
   _loc8_ = this.m_nBlockY;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      var _loc5_ = undefined;
      var _loc4_ = undefined;
      _loc5_ = _loc9_ + this.m_anBlockOffsetPos[_loc7_][_loc6_][_loc3_][0];
      _loc4_ = _loc8_ + this.m_anBlockOffsetPos[_loc7_][_loc6_][_loc3_][1];
      if(0 <= _loc5_ && _loc5_ < _root.BLOCK_BUF_W && 0 <= _loc4_ && _loc4_ < _root.BLOCK_BUF_H)
      {
         if(_root.BLOCK_TYPE_0 != this.m_anBlockData[_loc4_][_loc5_])
         {
            this.setPlaySEFlag(_root.eSE_TYPE_CONNECT_BLOCK);
            return _root.PLAYER_PHASE_INPUT_AFTER_BLOCK_SET;
         }
      }
      _loc3_ = _loc3_ + 1;
   }
   return _root.PLAYER_PHASE_INPUT;
};
CTrionManager.prototype.phaseShipProgressMeterBefore = function()
{
   this.m_mShipProgressMeter.init(this.m_cMissionMgr.getMissionScoreRate());
   return _root.PLAYER_PHASE_SHIP_PROGRESS_METER;
};
CTrionManager.prototype.phaseShipProgressMeter = function()
{
   this.m_mShipProgressMeter.exec(this.m_cMissionMgr.getMissionScoreRate());
   if(this.m_mShipProgressMeter.isFinish())
   {
      return _root.PLAYER_PHASE_SHIP_PROGRESS_METER_AFTER;
   }
   return _root.PLAYER_PHASE_SHIP_PROGRESS_METER;
};
CTrionManager.prototype.phaseShipProgressMeterAfter = function()
{
   this.m_mShipProgressMeter.quit();
   return _root.PLAYER_PHASE_CHAIN_OVER_EFFECT_WAIT;
};
CTrionManager.prototype.phaseGamePerfectBefore = function()
{
   if(!this.m_cChainEffect.isFinishChainEffectOnly())
   {
      return _root.PLAYER_PHASE_PERFECT_BEFORE;
   }
   this.m_cPerfectEffect.init();
   this.m_cPerfectEffect.entry();
   return _root.PLAYER_PHASE_PERFECT;
};
CTrionManager.prototype.phaseGamePerfect = function()
{
   trace("PLAYER_PHASE_PERFECT");
   this.m_cPerfectEffect.exec();
   if(this.m_cPerfectEffect.isFinish())
   {
      return _root.PLAYER_PHASE_PERFECT_AFTER;
   }
   return _root.PLAYER_PHASE_PERFECT;
};
CTrionManager.prototype.phaseGamePerfectAfter = function()
{
   trace("PLAYER_PHASE_PERFECT_AFTER");
   this.m_cPerfectEffect.quit();
   return _root.PLAYER_PHASE_CHAIN_OVER_CHANGE_COIN_BEFORE;
};
CTrionManager.prototype.phaseGameOverBefore = function()
{
   trace("PLAYER_PHASE_GAME_OVER_BEFORE");
   this.m_bGameOver = true;
   this.m_bGameClear = false;
   this.m_bChain = false;
   this.m_bVisibleOperate = false;
   if(!this.m_cChainEffect.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_OVER_BEFORE;
   }
   if(!this.m_cLevelUp.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_OVER_BEFORE;
   }
   _root.JumpUpDispDemo(_root.UP_DEMO_NOISE);
   this.m_cGameOverEffect.init();
   return _root.PLAYER_PHASE_GAME_OVER;
};
CTrionManager.prototype.phaseGameOver = function()
{
   this.m_cGameOverEffect.exec();
   if(this.m_cGameOverEffect.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_OVER_AFTER;
   }
   return _root.PLAYER_PHASE_GAME_OVER;
};
CTrionManager.prototype.phaseGameOverAfter = function()
{
   this.m_cGameOverEffect.quit();
   return _root.PLAYER_PHASE_GAME_FINISH_WAIT_BEFORE;
};
CTrionManager.prototype.phaseGameClearTimeIsMoneyBefore = function()
{
   this.m_cCoinShower.init();
   this.m_nWait = _root.TIME_IS_MONEY_WAIT;
   return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_WAIT;
};
CTrionManager.prototype.phaseGameClearTimeIsMoneyWait = function()
{
   this.m_nWait = this.m_nWait - 1;
   if(this.m_nWait <= 0)
   {
      return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY;
   }
   return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_WAIT;
};
CTrionManager.prototype.phaseGameClearTimeIsMoney = function()
{
   var _loc4_ = undefined;
   _loc4_ = this.m_cGameTimer.getGameTimerFrame();
   if(_root.g_cInputMgr.isTrigger(_root.INPUT_A) || _root.g_cInputMgr.isTrigger(_root.INPUT_B))
   {
      this.m_cGameTimer.setGameTimerFrame(0);
      this.addCoin(Math.floor(_loc4_ / _root.FPS) * _root.COIN_BRONZE);
      return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY;
   }
   this.m_cCoinShower.exec();
   if(_root.FPS <= _loc4_)
   {
      var _loc5_ = 5;
      var _loc3_ = undefined;
      _loc3_ = Math.floor(_loc4_ / _root.FPS);
      _loc3_ = _loc5_ >= _loc3_ ? _loc3_ : _loc5_;
      this.m_cGameTimer.setGameTimerFrame(_loc4_ - _root.FPS * _loc3_);
      this.addCoin(_loc3_ * _root.COIN_BRONZE);
      this.m_nWait = this.m_nWait + 1;
      if(!(this.m_nWait % 2))
      {
         var _loc7_ = undefined;
         var _loc6_ = undefined;
         this.setPlaySEFlag(_root.eSE_TYPE_COIN03);
         _loc7_ = this.m_cMissionMgr.getMissionShipLocateX();
         _loc6_ = this.m_cMissionMgr.getMissionShipLocateY();
         this.m_cCoinShower.entryCoin(224,16,_loc7_,_loc6_);
      }
      return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY;
   }
   if(!this.m_cCoinShower.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY;
   }
   return _root.PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_AFTER;
};
CTrionManager.prototype.phaseGameClearTimeIsMoneyAfter = function()
{
   trace("PLAYER_PHASE_GAME_CLEAR_TIME_IS_MONEY_AFTER");
   this.m_nWait = 0;
   this.setPlaySEFlag(_root.eSE_TYPE_COIN_FINISH);
   this.m_cCoinShower.quit();
   return _root.PLAYER_PHASE_GAME_CLEAR_BEFORE;
};
CTrionManager.prototype.phaseGameClearBefore = function()
{
   trace("PLAYER_PHASE_GAME_CLEAR_BEFORE");
   this.m_bGameClear = true;
   this.m_bGameOver = false;
   return _root.PLAYER_PHASE_GAME_CLEAR;
};
CTrionManager.prototype.phaseGameClear = function()
{
   trace("PLAYER_PHASE_GAME_CLEAR");
   if(this.m_cGameClear.isFinish())
   {
      return _root.PLAYER_PHASE_GAME_CLEAR_AFTER;
   }
   return _root.PLAYER_PHASE_GAME_CLEAR;
};
CTrionManager.prototype.phaseGameClearAfter = function()
{
   trace("PLAYER_PHASE_GAME_CLEAR_AFTER");
   _root.JumpUpDispDemo(_root.UP_DEMO_NOISE);
   return _root.PLAYER_PHASE_GAME_FINISH_WAIT_BEFORE;
};
CTrionManager.prototype.phaseGameFinishWaitBefore = function()
{
   trace("PLAYER_PHASE_GAME_FINISH_WAIT_BEFORE");
   this.m_nWait = _root.GAME_FINISH_WAIT;
   return _root.PLAYER_PHASE_GAME_FINISH_WAIT;
};
CTrionManager.prototype.phaseGameFinishWait = function()
{
   this.m_nWait = this.m_nWait - 1;
   if(this.m_nWait <= 0)
   {
      return _root.PLAYER_PHASE_GAME_FINISH_WAITVS;
   }
   return _root.PLAYER_PHASE_GAME_FINISH_WAIT;
};
CTrionManager.prototype.phaseGameFinishWaitVS = function()
{
   return _root.PLAYER_PHASE_GAME_FINISH;
};
CTrionManager.prototype.phaseGameFinish = function()
{
   return _root.PLAYER_PHASE_QUIT;
};
CTrionManager.prototype.phaseQuit = function()
{
   trace("PLAYER_PHASE_QUIT");
   return _root.PLAYER_PHASE_NONE;
};
CTrionManager.prototype.checkGameState = function()
{
   if(this.m_nPhase <= _root.PLAYER_PHASE_GAME_START_LOGO_AFTER)
   {
      return undefined;
   }
   if(!this.isGameClear() && !this.isGameOver())
   {
      this.checkGameClear();
      this.checkGameOver();
   }
   if(!this.m_cGameClear.isEnable() && !this.m_cGameOver.isEnable())
   {
      if(this.isGameClear())
      {
         _root.g_cSndMgr.setBGMFadeOut(_root.FLASH_FPS);
         this.setPlaySEFlag(_root.eSE_TYPE_GAME_CLEAR);
         this.m_cGameClear.startEffect();
         trace("Game Clear .....................");
      }
      else if(this.isGameOver())
      {
         _root.g_cSndMgr.setBGMFadeOut(_root.FLASH_FPS);
         this.setPlaySEFlag(_root.eSE_TYPE_GAME_OVER);
         this.m_cGameOver.startEffect();
         trace("Game Over .....................");
      }
   }
};
CTrionManager.prototype.checkGameClear = function()
{
   if(this.m_bGameClear)
   {
      return undefined;
   }
   if(_root.GAME_CLEAR_LEVEL <= this.m_nGameLevel)
   {
      this.m_bGameClear = true;
      trace("GAME CLEAR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
   }
};
CTrionManager.prototype.checkGameOver = function()
{
   if(this.m_bGameOver)
   {
      return undefined;
   }
   if(this.m_cGameTimer.isFinish())
   {
      this.m_bGameOver = true;
   }
   if(this.isGameOverLineOnBlock() && _root.PLAYER_PHASE_INPUT == this.m_nPhase)
   {
      this.m_bGameOver = true;
   }
};
CTrionManager.prototype.move = function()
{
   var _loc8_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   _loc8_ = true;
   _loc7_ = this.m_eBlockType;
   _loc6_ = this.m_eBlockDir;
   _loc3_ = this.m_eBlockDir;
   _loc4_ = this.m_nBlockX;
   _loc5_ = this.m_nBlockY;
   if(_root.g_cInputMgr.isTriggerRep(_root.INPUT_L))
   {
      if(this.checkBlock(_loc7_,_loc6_,_loc4_ - 1,_loc5_))
      {
         _loc4_ = _loc4_ - 1;
      }
   }
   else if(_root.g_cInputMgr.isTriggerRep(_root.INPUT_R))
   {
      if(this.checkBlock(_loc7_,_loc6_,_loc4_ + 1,_loc5_))
      {
         _loc4_ = _loc4_ + 1;
      }
   }
   if(_root.g_cInputMgr.isTrigger(_root.INPUT_A))
   {
      _loc3_ = _loc6_ + 1;
      if(_root.BLOCK_DIR_3 < _loc3_)
      {
         _loc3_ = _root.BLOCK_DIR_0;
      }
   }
   else if(_root.g_cInputMgr.isTrigger(_root.INPUT_B))
   {
      _loc3_ = _loc6_ - 1;
      if(_loc3_ < 0)
      {
         _loc3_ = _root.BLOCK_DIR_3;
      }
   }
   if(_loc3_ != _loc6_)
   {
      if(this.checkBlock(_loc7_,_loc3_,_loc4_,_loc5_))
      {
         _loc6_ = _loc3_;
      }
      else if(this.checkBlock(_loc7_,_loc3_,_loc4_ + 1,_loc5_))
      {
         _loc6_ = _loc3_;
         _loc4_ = _loc4_ + 1;
      }
      else if(this.checkBlock(_loc7_,_loc3_,_loc4_ - 1,_loc5_))
      {
         _loc6_ = _loc3_;
         _loc4_ = _loc4_ - 1;
      }
   }
   if(_root.g_cInputMgr.isNormal(_root.INPUT_D))
   {
      if(this.checkBlock(_loc7_,_loc3_,_loc4_,_loc5_ + 1))
      {
         _loc5_ = _loc5_ + 1;
         this.m_nBlockDownCount = 0;
      }
      else if(_root.BLOCK_NOT_CONNECT_PAD_DOWN_FRAME <= this.m_nBlockDownCount)
      {
         _loc8_ = false;
         this.setPlaySEFlag(_root.eSE_TYPE_CONNECT_BLOCK);
      }
   }
   else if(this.m_nBlockDownCount >= this.getBlockFallSpeed())
   {
      if(this.checkBlock(_loc7_,_loc3_,_loc4_,_loc5_ + 1))
      {
         _loc5_ = _loc5_ + 1;
         this.m_nBlockDownCount = 0;
      }
      else if(this.m_nBlockDownCount >= _root.BLOCK_CONNECT_FRAME)
      {
         _loc8_ = false;
         this.setPlaySEFlag(_root.eSE_TYPE_CONNECT_BLOCK);
      }
   }
   this.m_nBlockDownCount = this.m_nBlockDownCount + 1;
   this.m_eBlockDir = _loc6_;
   this.m_nBlockX = _loc4_;
   this.m_nBlockY = _loc5_;
   return _loc8_;
};
CTrionManager.prototype.checkBlock = function(e_type, e_dir, n_xpos, n_ypos)
{
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   var _loc4_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      _loc5_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc4_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      if(_loc5_ < 0 || _loc5_ >= _root.BLOCK_BUF_W || _loc4_ < 0 || _loc4_ >= _root.BLOCK_BUF_H || this.m_anBlockData[_loc4_][_loc5_])
      {
         return false;
      }
      _loc3_ = _loc3_ + 1;
   }
   return true;
};
CTrionManager.prototype.getFallBlockYpos = function(e_type, e_dir, n_xpos, n_ypos)
{
   var _loc3_ = undefined;
   if(!this.checkBlock(e_type,e_dir,n_xpos,n_ypos))
   {
      return n_ypos;
   }
   _loc3_ = n_ypos + 1;
   while(_loc3_ < _root.BLOCK_BUF_H)
   {
      if(!this.checkBlock(e_type,e_dir,n_xpos,_loc3_))
      {
         break;
      }
      _loc3_ = _loc3_ + 1;
   }
   return _loc3_ - 1;
};
CTrionManager.prototype.getLevel = function(n_seed)
{
   return this.m_nGameLevel;
};
CTrionManager.prototype.resetParam = function(n_seed)
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   this.m_nPhase = _root.PLAYER_PHASE_NONE;
   this.m_bChain = false;
   this.m_bGameClear = false;
   this.m_bGameOver = false;
   this.m_nGameLevel = _root.GAME_LEVEL_MIN;
   this.m_nCoin = 0;
   this.m_nScoreAdd = 0;
   this.m_nScoreRemain = 0;
   this.m_bVisibleOperate = false;
   this.m_nBlockX = 0;
   this.m_nBlockY = 0;
   this.m_nBlockOffsetX = 0;
   this.m_nBlockOffsetY = 0;
   this.m_eBlockType = _root.BLOCK_TYPE_0;
   this.m_eBlockDir = _root.BLOCK_DIR_0;
   this.m_nBlockDownCount = 0;
   this.m_nChainCountFrame = 0;
   this.m_bChainBreakTimerOver = false;
   this.m_nEntryBlockNumOfLevel = 0;
   this.m_nChainTotalCount = 0;
   this.m_nWait = 0;
   this.m_nBGScrollY = 0;
   this.makeBlockData();
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         this.m_anBlockData[_loc4_][_loc3_] = _root.BLOCK_TYPE_0;
         this.m_anChainBlockCheck[_loc4_][_loc3_] = 0;
         this.setBlockObjBGOne(_loc3_,_loc4_,_root.BLOCK_TYPE_0,_root.TRI_BG_CHAIN_BLOCK);
         this.setBlockObjBGOne(_loc3_,_loc4_,_root.BLOCK_TYPE_0,_root.TRI_BG_MAIN_BLOCK);
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CTrionManager.prototype.makeBlockData = function()
{
   var _loc3_ = undefined;
   this.m_eBlockType = _root.BLOCK_TYPE_0;
   this.m_eBlockDir = _root.BLOCK_DIR_0;
   this.m_nBlockX = _root.FIRST_BLOCK_POS_X;
   this.m_nBlockY = _root.FIRST_BLOCK_POS_Y;
   _loc3_ = 0;
   while(_loc3_ < _root.NEXT_BLOCK_MAX)
   {
      this.m_anBlockNextNumber[_loc3_] = this.getNextBlockType();
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManager.prototype.getNextBlockType = function()
{
   var _loc7_ = undefined;
   _loc7_ = _root.BLOCK_TYPE_0;
   var _loc4_ = [0,0,0,0,0,0];
   var _loc3_ = undefined;
   var _loc6_ = undefined;
   var _loc5_ = undefined;
   var _loc8_ = undefined;
   _loc4_[_root.BLOCK_TYPE_0] = 0;
   _loc4_[_root.BLOCK_TYPE_1] = this.m_cGameLevelTable.getBlock01EntryRate(this.m_nGameLevel);
   _loc4_[_root.BLOCK_TYPE_2] = this.m_cGameLevelTable.getBlock02EntryRate(this.m_nGameLevel);
   _loc4_[_root.BLOCK_TYPE_3] = this.m_cGameLevelTable.getBlock03EntryRate(this.m_nGameLevel);
   _loc4_[_root.BLOCK_TYPE_4] = this.m_cGameLevelTable.getBlock04EntryRate(this.m_nGameLevel);
   _loc4_[_root.BLOCK_TYPE_5] = this.m_cGameLevelTable.getBlock05EntryRate(this.m_nGameLevel);
   _loc6_ = 0;
   _loc3_ = 0;
   while(_loc3_ <= _root.BLOCK_TYPE_5)
   {
      _loc6_ += _loc4_[_loc3_];
      _loc3_ = _loc3_ + 1;
   }
   _loc8_ = Math.floor(Math.random() * 10000);
   _loc5_ = _loc8_ % _loc6_;
   _loc3_ = 0;
   while(_loc3_ <= _root.BLOCK_TYPE_5)
   {
      _loc5_ -= _loc4_[_loc3_];
      if(_loc5_ < 0)
      {
         break;
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc7_ = _loc3_;
   if(_loc7_ < _root.BLOCK_TYPE_1 || _root.BLOCK_TYPE_5 < _loc7_)
   {
      _loc7_ = _root.BLOCK_TYPE_1;
      trace("不正なネクストブロックを設定しました。");
   }
   return _loc7_;
};
CTrionManager.prototype.isBlock3x3 = function(n_xpos, n_ypos, e_type, e_dir)
{
   var _loc12_ = undefined;
   var _loc10_ = undefined;
   var _loc11_ = undefined;
   var _loc7_ = undefined;
   var _loc9_ = undefined;
   var _loc5_ = undefined;
   var _loc6_ = undefined;
   var _loc8_ = undefined;
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   _loc12_ = 0;
   while(_loc12_ < _root.BLOCK_UNIT_NUM)
   {
      _loc10_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc12_][0];
      _loc11_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc12_][1];
      _loc9_ = _loc11_ - 2;
      while(_loc9_ <= _loc11_)
      {
         _loc7_ = _loc10_ - 2;
         while(_loc7_ <= _loc10_)
         {
            _loc8_ = 0;
            _loc6_ = 0;
            while(_loc6_ < _root.CHECK_RANGE_3x3)
            {
               _loc5_ = 0;
               while(_loc5_ < _root.CHECK_RANGE_3x3)
               {
                  _loc4_ = _loc5_ + _loc7_;
                  _loc3_ = _loc6_ + _loc9_;
                  if(0 <= _loc4_ && _loc4_ < _root.BLOCK_BUF_W && 0 <= _loc3_ && _loc3_ < _root.BLOCK_BUF_H)
                  {
                     if(this.m_anBlockData[_loc3_][_loc4_] != _root.BLOCK_TYPE_0 && this.m_anBlockData[_loc3_][_loc4_] != _root.BLOCK_TYPE_OJYAMA)
                     {
                        _loc8_ = _loc8_ + 1;
                     }
                  }
                  _loc5_ = _loc5_ + 1;
               }
               _loc6_ = _loc6_ + 1;
            }
            if(_root.CHECK_CHAIN_BLOCK_NUM <= _loc8_)
            {
               return true;
            }
            _loc7_ = _loc7_ + 1;
         }
         _loc9_ = _loc9_ + 1;
      }
      _loc12_ = _loc12_ + 1;
   }
   return false;
};
CTrionManager.prototype.getChainBlockBreakFrame = function()
{
   var _loc2_ = undefined;
   var _loc4_ = undefined;
   _loc2_ = 0;
   _loc2_ = this.getChainBlockRate();
   _loc2_ *= _loc2_;
   _loc4_ = 0;
   var _loc5_ = undefined;
   var _loc3_ = undefined;
   _loc5_ = this.m_cGameLevelTable.getBlockChainBreakSpeedLow(this.m_nGameLevel);
   _loc3_ = this.m_cGameLevelTable.getBlockChainBreakSpeedHi(this.m_nGameLevel);
   _loc4_ = Math.floor((_loc5_ - _loc3_) * (1 - _loc2_) + _loc3_);
   return _loc4_;
};
CTrionManager.prototype.setBlock3x3CheckFlag = function(n_xpos, n_ypos, e_type, e_dir)
{
   var _loc3_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      var _loc5_ = undefined;
      var _loc4_ = undefined;
      _loc5_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc4_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      this.set3x3CheckFlag(_loc5_,_loc4_);
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManager.prototype.set3x3CheckFlag = function(n_xpos, n_ypos)
{
   var _loc8_ = undefined;
   var _loc9_ = undefined;
   var _loc3_ = undefined;
   var _loc6_ = undefined;
   var _loc7_ = undefined;
   _loc8_ = n_xpos;
   _loc9_ = n_ypos;
   _loc7_ = 0;
   _loc6_ = _loc9_ - 2;
   while(_loc6_ <= _loc9_)
   {
      _loc3_ = _loc8_ - 2;
      while(_loc3_ <= _loc8_)
      {
         if(this.check3x3(_loc3_,_loc6_))
         {
            var _loc5_ = undefined;
            var _loc4_ = undefined;
            _loc5_ = (_loc3_ + 1) * _root.BLOCK_W + _root.BLOCK_W / 2;
            _loc4_ = (_loc6_ + 1) * _root.BLOCK_H + _root.BLOCK_H / 2;
            _loc5_ += _root.OFFSET_X;
            _loc4_ += _root.OFFSET_Y;
            if(!this.m_cChainEffect.checkEntryEffect(_loc5_,_loc4_))
            {
               _loc7_ = _loc7_ + 1;
               this.entryChainEffect(_loc5_,_loc4_,_loc3_,_loc6_,_loc7_);
            }
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc6_ = _loc6_ + 1;
   }
};
CTrionManager.prototype.check3x3 = function(n_block_x, n_block_y)
{
   var _loc7_ = undefined;
   var _loc8_ = undefined;
   in_y = 0;
   while(in_y < _root.CHECK_RANGE_3x3)
   {
      in_x = 0;
      while(in_x < _root.CHECK_RANGE_3x3)
      {
         var _loc4_ = undefined;
         var _loc3_ = undefined;
         _loc4_ = n_block_x + in_x;
         _loc3_ = n_block_y + in_y;
         if(_loc4_ < 0 || _root.BLOCK_BUF_W <= _loc4_ || _loc3_ < 0 || _root.BLOCK_BUF_H <= _loc3_)
         {
            return false;
         }
         if(this.m_anBlockData[_loc3_][_loc4_] == _root.BLOCK_TYPE_0)
         {
            return false;
         }
         if(this.m_anBlockData[_loc3_][_loc4_] == _root.BLOCK_TYPE_OJYAMA)
         {
            return false;
         }
         in_x++;
      }
      in_y++;
   }
   return true;
};
CTrionManager.prototype.entryChainEffect = function(n_eff_x, n_eff_y, n_block_x, n_block_y, n_douji_chain_cnt)
{
   var _loc6_ = undefined;
   var _loc3_ = undefined;
   var _loc10_ = undefined;
   var _loc9_ = undefined;
   this.m_nChainTotalCount = this.m_nChainTotalCount + 1;
   _loc9_ = this.m_cChainEffect.getChainCount();
   _loc10_ = this.calcScoreFromChainCount(_loc9_);
   this.addScore(_loc10_);
   if(_loc9_ == _root.TV_DEMO_CHAIN_LEVEL_1)
   {
      trace("Chain Level 1");
      _root.JumpUpDispDemo(_root.UP_DEMO_CHAIN_1);
   }
   else if(_loc9_ == _root.TV_DEMO_CHAIN_LEVEL_2)
   {
      trace("Chain Level 2");
      _root.JumpUpDispDemo(_root.UP_DEMO_CHAIN_2);
   }
   else if(_loc9_ == _root.TV_DEMO_CHAIN_LEVEL_3)
   {
      trace("Chain Level 3");
      _root.JumpUpDispDemo(_root.UP_DEMO_CHAIN_3);
   }
   _loc6_ = 0;
   while(_loc6_ < _root.CHECK_RANGE_3x3)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.CHECK_RANGE_3x3)
      {
         var _loc5_ = undefined;
         var _loc4_ = undefined;
         _loc5_ = _loc3_ + n_block_x;
         _loc4_ = _loc6_ + n_block_y;
         this.m_anChainBlockCheck[_loc4_][_loc5_] = true;
         _loc3_ = _loc3_ + 1;
      }
      _loc6_ = _loc6_ + 1;
   }
   this.m_cChainEffect.entry(n_eff_x,n_eff_y,n_block_x,n_block_y,n_douji_chain_cnt);
};
CTrionManager.prototype.checkChain2nd = function()
{
   var _loc8_ = undefined;
   var _loc3_ = undefined;
   var _loc6_ = undefined;
   var _loc7_ = undefined;
   _loc8_ = false;
   _loc7_ = 0;
   _loc6_ = _root.BLOCK_GAME_OVER_LINE;
   while(_loc6_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(this.check3x3(_loc3_,_loc6_))
         {
            var _loc5_ = undefined;
            var _loc4_ = undefined;
            _loc5_ = (_loc3_ + 1) * _root.BLOCK_W + _root.BLOCK_W / 2;
            _loc4_ = (_loc6_ + 1) * _root.BLOCK_H + _root.BLOCK_H / 2;
            _loc5_ += _root.OFFSET_X;
            _loc4_ += _root.OFFSET_Y;
            if(!this.m_cChainEffect.checkEntryEffect(_loc5_,_loc4_))
            {
               _loc8_ = true;
               _loc7_ = _loc7_ + 1;
               this.entryChainEffect(_loc5_,_loc4_,_loc3_,_loc6_,_loc7_);
            }
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc6_ = _loc6_ + 1;
   }
   return _loc8_;
};
CTrionManager.prototype.change3x3ToChainBlock = function(n_block_x, n_block_y)
{
   var _loc3_ = undefined;
   var _loc6_ = undefined;
   _loc6_ = 0;
   while(_loc6_ < _root.CHECK_RANGE_3x3)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.CHECK_RANGE_3x3)
      {
         var _loc5_ = undefined;
         var _loc4_ = undefined;
         _loc5_ = _loc3_ + n_block_x;
         _loc4_ = _loc6_ + n_block_y;
         this.setBlockObjBGOne(_loc5_,_loc4_,_root.BLOCK_TYPE_0,_root.TRI_BG_MAIN_BLOCK);
         this.setBlockObjBGOne(_loc5_,_loc4_,_root.BLOCK_TYPE_1,_root.TRI_BG_CHAIN_BLOCK);
         _loc3_ = _loc3_ + 1;
      }
      _loc6_ = _loc6_ + 1;
   }
};
CTrionManager.prototype.entryChainBreakEffect = function(is_change_bg_to_coin)
{
   var _loc8_ = undefined;
   var _loc7_ = undefined;
   var _loc3_ = undefined;
   var _loc2_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   _loc3_ = this.m_cChainEffect.getChainCount();
   _loc2_ = this.getChainToContType(_loc3_);
   _loc5_ = this.getCoinSEType(_loc3_);
   _loc4_ = this.getCoinValue(_loc2_);
   if(!is_change_bg_to_coin)
   {
   }
   this.m_cChainBreakEffect.entry(_loc2_,_loc4_,_loc5_,this.isGameClear());
};
CTrionManager.prototype.getChainToContType = function(n_chain_count)
{
   var _loc2_ = undefined;
   _loc2_ = _root.BLOCK_TYPE_COIN_1;
   if(_root.COIN_DIAMOND_CHAIN_COUNT <= n_chain_count)
   {
      _loc2_ = _root.BLOCK_TYPE_COIN_4;
   }
   else if(_root.COIN_GOLD_CHAIN_COUNT <= n_chain_count)
   {
      _loc2_ = _root.BLOCK_TYPE_COIN_3;
   }
   else if(_root.COIN_SILVER_CHAIN_COUNT <= n_chain_count)
   {
      _loc2_ = _root.BLOCK_TYPE_COIN_2;
   }
   else
   {
      _loc2_ = _root.BLOCK_TYPE_COIN_1;
   }
   return _loc2_;
};
CTrionManager.prototype.getCoinSEType = function(n_chain_count)
{
   return 0;
};
CTrionManager.prototype.getCoinSEType = function(e_coin_type)
{
   var _loc2_ = undefined;
   _loc2_ = 0;
   switch(e_coin_type)
   {
      case _root.BLOCK_TYPE_COIN_1:
         _loc2_ = _root.COIN_BRONZE;
         break;
      case _root.BLOCK_TYPE_COIN_2:
         _loc2_ = _root.COIN_SILVER;
         break;
      case _root.BLOCK_TYPE_COIN_3:
         _loc2_ = _root.COIN_GOLD;
         break;
      case _root.BLOCK_TYPE_COIN_4:
         _loc2_ = _root.COIN_DIAMOND;
   }
   return _loc2_;
};
CTrionManager.prototype.addCoin = function(n_coin)
{
   this.m_nCoin += n_coin;
};
CTrionManager.prototype.addScore = function(n_score)
{
   this.m_nScoreAdd += n_score;
};
CTrionManager.prototype.execScore = function()
{
   if(0 < this.m_nScoreAdd)
   {
      this.m_cMissionMgr.addMissionCountUpScore(this.m_nScoreAdd);
      this.m_nScoreAdd = 0;
   }
   if(!this.isGameClear() && !this.isGameOver() && 0 < this.m_nScoreRemain)
   {
      if(this.m_cMissionMgr.isLevelUpMissionCountUpScore())
      {
         trace("LEVEL UP!!!!!!!!!!!!!!!!!!!!!!");
         this.m_nGameLevel = this.m_nGameLevel + 1;
         this.m_nEntryBlockNumOfLevel = 0;
         this.m_cLevelUp.entry(this.getLevel());
         this.m_cGameTimer.setGameTimerFrame(this.m_cGameLevelTable.getGameTimer(this.m_nGameLevel) * _root.FPS);
         this.setPlaySEFlag(_root.eSE_TYPE_LEVEL_UP);
      }
   }
   this.m_nScoreRemain = this.m_cMissionMgr.getMissionScoreOfRemain();
};
CTrionManager.prototype.isGameOverLineOnBlock = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_GAME_OVER_LINE)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(_root.BLOCK_TYPE_0 != this.m_anBlockData[_loc4_][_loc3_])
         {
            return true;
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
   return false;
};
CTrionManager.prototype.isPerfectChainBlock = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   if(this.isGameOverLineOnBlock())
   {
      return false;
   }
   _loc4_ = _root.BLOCK_GAME_OVER_LINE;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(!this.m_anChainBlockCheck[_loc4_][_loc3_])
         {
            return false;
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
   return true;
};
CTrionManager.prototype.setPlaySEFlag = function(n_se_no)
{
   _root.g_cSndMgr.playSE(n_se_no);
};
CTrionManager.prototype.setBlockObjBG = function(n_x, n_y, e_type, e_dir)
{
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   var _loc6_ = undefined;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      _loc5_ = n_x + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc6_ = n_y + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      this.setBlockObjBGOne(_loc5_,_loc6_,e_type,_root.TRI_BG_MAIN_BLOCK);
      _loc3_ = _loc3_ + 1;
   }
};
CTrionManager.prototype.setBlockObjBGOne = function(n_x, n_y, e_type, e_bg)
{
   switch(e_bg)
   {
      case _root.TRI_BG_CHAIN_BLOCK:
         if(e_type != _root.BLOCK_TYPE_0)
         {
            _root.g_cBG0Mgr.setChainBlock(n_x,n_y,true);
         }
         else
         {
            _root.g_cBG0Mgr.setChainBlock(n_x,n_y,false);
         }
         break;
      case _root.TRI_BG_MAIN_BLOCK:
         _root.g_cBG1Mgr.setBlockType(n_x,n_y,e_type);
   }
};
CTrionManager.prototype.execOther = function()
{
   if(this.m_nPhase != _root.PLAYER_PHASE_NONE && this.m_nPhase != _root.PLAYER_PHASE_QUIT && this.m_nPhase != _root.PLAYER_PHASE_GAME_OVER_AFTER)
   {
      this.m_cChainEffect.exec();
      if(_root.PLAYER_PHASE_INPUT_BEFORE <= this.m_nPhase && !this.isGameOver() && !this.isGameClear())
      {
         if(this.m_cChainToCoinEffect.isFinish() && this.m_cChainBreakEffect.isFinish())
         {
            this.m_cGameTimer.exec();
         }
         this.m_cDangerEffect.exec(this.m_cGameTimer.getGameTimerFrame());
      }
   }
};
CTrionManager.prototype.execSprite = function()
{
   this.m_nBlockOffsetX = Math.floor(Math.random() * 3) - 1;
   this.m_nBlockOffsetY = Math.floor(Math.random() * 3) - 1;
   this.m_cMyBlock.setVisible(this.m_bVisibleOperate);
   this.m_cLevelUp.exec();
   this.m_cShootingStar.exec(this.m_cMissionMgr.getMissionShipSpeedRate());
   this.execSpriteShadow();
};
CTrionManager.prototype.execSpriteShadow = function()
{
   if(this.m_nPhase != _root.PLAYER_PHASE_INPUT)
   {
      this.m_cShadowBlock.setBlockType(_root.BLOCK_TYPE_0);
      this.m_cChainGuaid.setVisible(false);
   }
   else
   {
      var _loc7_ = undefined;
      var _loc3_ = undefined;
      var _loc6_ = undefined;
      var _loc5_ = undefined;
      _loc6_ = false;
      _loc5_ = false;
      _loc3_ = this.getFallBlockYpos(this.m_eBlockType,this.m_eBlockDir,this.m_nBlockX,this.m_nBlockY);
      if(0 <= _loc3_ && _loc3_ != this.m_nBlockY)
      {
         _loc6_ = true;
      }
      if(_loc6_)
      {
         this.m_cShadowBlock.setBlockType(this.m_eBlockType);
         this.m_cShadowBlock.setBlockDir(this.m_eBlockDir);
         this.m_cShadowBlock.setBlockPos(this.m_nBlockX,_loc3_,0,0);
      }
      else
      {
         this.m_cShadowBlock.setBlockType(_root.BLOCK_TYPE_0);
      }
      if(0 <= _loc3_ && this.m_bVisibleOperate)
      {
         var _loc4_ = [0,0];
         if(this.getChain3x3Pos(this.m_eBlockType,this.m_eBlockDir,this.m_nBlockX,_loc3_,_loc4_))
         {
            this.m_cChainGuaid.setLocate(_loc4_[0],_loc4_[1]);
            _loc5_ = true;
         }
      }
      this.m_cChainGuaid.setVisible(_loc5_);
   }
};
CTrionManager.prototype.execBG = function()
{
   this.execBG0Swing();
   this.execBGScroll();
   this.renderBGStatus();
   this.execScore();
};
CTrionManager.prototype.execBG0Swing = function()
{
   if(this.m_bChain && this.m_nChainCountFrame < _root.CHAIN_BLOCK_SWING_FRAME)
   {
      var _loc4_ = undefined;
      var _loc3_ = undefined;
      var _loc5_ = undefined;
      var _loc6_ = undefined;
      _loc4_ = 1 - this.m_nChainCountFrame / _root.CHAIN_BLOCK_SWING_FRAME;
      _loc3_ = _root.CHAIN_BLOCK_SWING_RATE * _loc4_;
      _loc5_ = Math.floor(_loc3_ * (Math.random() * 2 - 1));
      _loc6_ = Math.floor(_loc3_ * (Math.random() * 2 - 1));
      _root.g_cBG0Mgr.setChainBlockLocate(_loc5_,_loc6_);
   }
   else
   {
      _root.g_cBG0Mgr.setChainBlockLocate(0,0);
   }
};
CTrionManager.prototype.execBGScroll = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _loc3_ = this.m_cMissionMgr.getMissionShipSpeedRate();
   _loc4_ = (_root.DEMO_SCROLL_SPEED_MAX - _root.DEMO_SCROLL_SPEED_MIN) * _loc3_ + _root.DEMO_SCROLL_SPEED_MIN;
   this.m_nBGScrollY += Math.floor(_loc4_);
   if(0 < this.m_nBGScrollY)
   {
      this.m_nBGScrollY -= 256;
   }
   _root.mcBG3._y = this.m_nBGScrollY;
};
CTrionManager.prototype.renderBGStatus = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _loc3_ = Math.floor(this.m_cGameTimer.getGameTimerFrame() / _root.FPS);
   _loc4_ = _loc3_ % 10;
   _loc3_ = Math.floor(_loc3_ / 10);
   _root.mcSprite1.mcGameTimer.mcDigit1.gotoAndStop(_loc4_ + 1);
   _loc4_ = _loc3_ % 10;
   _loc3_ = Math.floor(_loc3_ / 10);
   _root.mcSprite1.mcGameTimer.mcDigit10.gotoAndStop(_loc4_ + 1);
   _loc4_ = _loc3_ % 10;
   _root.mcSprite1.mcGameTimer.mcDigit100.gotoAndStop(_loc4_ + 1);
   _loc3_ = this.m_nGameLevel;
   _loc4_ = _loc3_ % 10;
   _loc3_ = Math.floor(_loc3_ / 10);
   _root.mcSprite1.mcGameLevelNum.mcDigit1.gotoAndStop(_loc4_ + 1);
   _loc4_ = _loc3_ % 10;
   _root.mcSprite1.mcGameLevelNum.mcDigit10.gotoAndStop(_loc4_ + 1);
};
CTrionManager.prototype.getChain3x3Pos = function(e_type, e_dir, n_xpos, n_ypos, n_an_pos)
{
   var _loc10_ = undefined;
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   var _loc4_ = undefined;
   _loc10_ = false;
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      _loc5_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc4_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      if(_root.BLOCK_TYPE_0 != this.m_anBlockData[_loc4_][_loc5_])
      {
         return false;
      }
      _loc3_ = _loc3_ + 1;
   }
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      _loc5_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc4_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      this.m_anBlockData[_loc4_][_loc5_] = _root.BLOCK_TYPE_DUMMY;
      _loc3_ = _loc3_ + 1;
   }
   _loc10_ = this.getChain3x3PosInside(e_type,e_dir,n_xpos,n_ypos,n_an_pos);
   _loc3_ = 0;
   while(_loc3_ < _root.BLOCK_UNIT_NUM)
   {
      _loc5_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][0];
      _loc4_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc3_][1];
      if(this.m_anBlockData[_loc4_][_loc5_] == _root.BLOCK_TYPE_DUMMY)
      {
         this.m_anBlockData[_loc4_][_loc5_] = _root.BLOCK_TYPE_0;
      }
      _loc3_ = _loc3_ + 1;
   }
   return _loc10_;
};
CTrionManager.prototype.getChain3x3PosInside = function(e_type, e_dir, n_xpos, n_ypos, n_an_pos)
{
   var _loc15_ = undefined;
   var _loc12_ = undefined;
   var _loc14_ = undefined;
   _loc15_ = 0;
   while(_loc15_ < _root.BLOCK_UNIT_NUM)
   {
      var _loc7_ = undefined;
      var _loc8_ = undefined;
      _loc12_ = n_xpos + this.m_anBlockOffsetPos[e_type][e_dir][_loc15_][0];
      _loc14_ = n_ypos + this.m_anBlockOffsetPos[e_type][e_dir][_loc15_][1];
      _loc8_ = _loc14_ - 2;
      while(_loc8_ <= _loc14_)
      {
         _loc7_ = _loc12_ - 2;
         while(_loc7_ <= _loc12_)
         {
            var _loc5_ = undefined;
            var _loc6_ = undefined;
            var _loc9_ = undefined;
            _loc9_ = 0;
            _loc6_ = 0;
            while(_loc6_ < _root.CHECK_RANGE_3x3)
            {
               _loc5_ = 0;
               while(_loc5_ < _root.CHECK_RANGE_3x3)
               {
                  var _loc4_ = undefined;
                  var _loc3_ = undefined;
                  _loc4_ = _loc5_ + _loc7_;
                  _loc3_ = _loc6_ + _loc8_;
                  if(0 <= _loc4_ && _loc4_ < _root.BLOCK_BUF_W && 0 <= _loc3_ && _loc3_ < _root.BLOCK_BUF_H)
                  {
                     if(this.m_anBlockData[_loc3_][_loc4_] != _root.BLOCK_TYPE_0 && this.m_anBlockData[_loc3_][_loc4_] != _root.BLOCK_TYPE_OJYAMA)
                     {
                        _loc9_ = _loc9_ + 1;
                     }
                  }
                  _loc5_ = _loc5_ + 1;
               }
               _loc6_ = _loc6_ + 1;
            }
            if(_root.CHECK_CHAIN_BLOCK_NUM <= _loc9_)
            {
               flag = true;
               var _loc11_ = undefined;
               var _loc10_ = undefined;
               _loc11_ = (_loc7_ + 1) * _root.BLOCK_W;
               _loc10_ = (_loc8_ + 1) * _root.BLOCK_H;
               _loc11_ += _root.OFFSET_X + _root.BLOCK_W / 2;
               _loc10_ += _root.OFFSET_Y + _root.BLOCK_H / 2;
               n_an_pos[0] = _loc11_;
               n_an_pos[1] = _loc10_;
               return true;
            }
            _loc7_ = _loc7_ + 1;
         }
         _loc8_ = _loc8_ + 1;
      }
      _loc15_ = _loc15_ + 1;
   }
   return false;
};
CTrionManager.prototype.calcScoreFromChainCount = function(n_chain_count)
{
   return n_chain_count + _root.SCORE_UP_CHAIN_BASE;
};
CTrionManager.prototype.getChainBlockRate = function()
{
   var _loc3_ = 0;
   _loc3_ = this.getChainBlockNumber();
   _loc3_ /= (_root.BLOCK_BUF_H - _root.BLOCK_GAME_OVER_LINE) * _root.BLOCK_BUF_W;
   if(_loc3_ < 0)
   {
      _loc3_ = 0;
   }
   if(1 < _loc3_)
   {
      _loc3_ = 1;
   }
   return _loc3_;
};
CTrionManager.prototype.getChainBlockNumber = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   var _loc5_ = undefined;
   _loc5_ = 0;
   _loc4_ = _root.BLOCK_BUF_H - 1;
   while(_loc4_ > _root.BLOCK_GAME_OVER_LINE)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         if(this.m_anChainBlockCheck[_loc4_][_loc3_])
         {
            _loc5_ = _loc5_ + 1;
         }
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ - 1;
   }
   return _loc5_;
};
CTrionManager.prototype.getBlockFallSpeed = function()
{
   var _loc3_ = undefined;
   var _loc4_ = undefined;
   _loc4_ = this.m_cGameLevelTable.getBlockFallSpeedHi(this.m_nGameLevel);
   _loc3_ = this.m_cGameLevelTable.getBlockFallSpeedLow(this.m_nGameLevel);
   _loc3_ -= this.m_nEntryBlockNumOfLevel / _root.BLOCK_DOWN_SPEED_UP_FRAME * _root.BLOCK_DOWN_SPEED_UP_RATE;
   if(_loc3_ < _loc4_)
   {
      _loc3_ = _loc4_;
   }
   return _loc3_;
};
CBG0Manager.prototype.init = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   var _loc5_ = undefined;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         _loc7_ = _loc3_ * _root.BLOCK_W + _root.OFFSET_X;
         _loc6_ = _loc4_ * _root.BLOCK_H + _root.OFFSET_Y;
         _loc5_ = this.m_cName + _loc3_ + "_" + _loc4_;
         props = {_x:_loc7_,_y:_loc6_,_visible:false};
         mc = this.m_mcBG0.attachMovie("mcChainBlock",_loc5_,_loc4_ * _root.BLOCK_BUF_W + _loc3_,props);
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CBG0Manager.prototype.quit = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         _loc5_ = this.m_cName + _loc3_ + "_" + _loc4_;
         this.m_mcBG0[_loc5_].removeMovieClip();
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CBG0Manager.prototype.setChainBlock = function(n_x, n_y, is_visible)
{
   var _loc2_ = undefined;
   _loc2_ = this.m_cName + n_x + "_" + n_y;
   this.m_mcBG0[_loc2_]._visible = is_visible;
};
CBG0Manager.prototype.setChainBlockLocate = function(n_x, n_y)
{
   this.m_mcBG0._x = n_x;
   this.m_mcBG0._y = n_y;
};
CBG1Manager.prototype.init = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   var _loc7_ = undefined;
   var _loc6_ = undefined;
   var _loc5_ = undefined;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         _loc7_ = _loc3_ * _root.BLOCK_W + _root.OFFSET_X;
         _loc6_ = _loc4_ * _root.BLOCK_H + _root.OFFSET_Y;
         _loc5_ = this.m_cName + _loc3_ + "_" + _loc4_;
         props = {_x:_loc7_,_y:_loc6_,_visible:false};
         mc = this.m_mcBG1.attachMovie("mcBG1Block",_loc5_,_loc4_ * _root.BLOCK_BUF_W + _loc3_,props);
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CBG1Manager.prototype.quit = function()
{
   var _loc4_ = undefined;
   var _loc3_ = undefined;
   var _loc5_ = undefined;
   _loc4_ = 0;
   while(_loc4_ < _root.BLOCK_BUF_H)
   {
      _loc3_ = 0;
      while(_loc3_ < _root.BLOCK_BUF_W)
      {
         _loc5_ = this.m_cName + _loc3_ + "_" + _loc4_;
         this.m_mcBG1[_loc5_].removeMovieClip();
         _loc3_ = _loc3_ + 1;
      }
      _loc4_ = _loc4_ + 1;
   }
};
CBG1Manager.prototype.setBlockType = function(n_x, n_y, e_type)
{
   var _loc2_ = undefined;
   _loc2_ = this.m_cName + n_x + "_" + n_y;
   if(!e_type)
   {
      this.m_mcBG1[_loc2_]._visible = false;
   }
   else
   {
      this.m_mcBG1[_loc2_]._visible = true;
      this.m_mcBG1[_loc2_].gotoAndStop(e_type);
   }
};
var SE_GAME_COMMON_001 = 0;
var SE_GAME_COMMON_002 = 1;
var SE_GAME_COMMON_003 = 2;
var SE_GAME_COMMON_004 = 3;
var SE_GAME_COMMON_005 = 4;
var SE_GAME_COMMON_006 = 5;
var SE_GAME_COMMON_007 = 6;
var SE_GAME_COMMON_008 = 7;
var SE_GAME_COMMON_009 = 8;
var SE_GAME_COMMON_010 = 9;
var SE_GAME_COMMON_011 = 10;
var SE_GAME_COMMON_012 = 11;
var SE_GAME_COMMON_013 = 12;
var SE_GAME_COMMON_014 = 13;
var SE_GAME_BOOST = 14;
CSoundManager.prototype.init = function()
{
   this.m_asLabel.push("se001");
   this.m_asLabel.push("se002");
   this.m_asLabel.push("se003");
   this.m_asLabel.push("se004");
   this.m_asLabel.push("se005");
   this.m_asLabel.push("se006");
   this.m_asLabel.push("se007");
   this.m_asLabel.push("se008");
   this.m_asLabel.push("se009");
   this.m_asLabel.push("se010");
   this.m_asLabel.push("se011");
   this.m_asLabel.push("se012");
   this.m_asLabel.push("se013");
   this.m_asLabel.push("se014");
   this.m_asLabel.push("seBoost");
   trace("Init Sound Manager");
};
CSoundManager.prototype.quit = function()
{
   this.m_asLabel = [];
   trace("Quit Sound Manager");
};
CSoundManager.prototype.exec = function()
{
   if(0 < this.m_nBGMFadeOutRate)
   {
      this.m_nBGMVolume -= this.m_nBGMFadeOutRate;
      if(this.m_nBGMVolume < 0)
      {
         this.m_nBGMVolume = 0;
         this.m_nBGMFadeOutRate = 0;
      }
      this.setBGMVolume(this.m_nBGMVolume);
   }
};
CSoundManager.prototype.playSE = function(n_se_id)
{
   this.m_cSoundSE.attachSound(this.m_asLabel[n_se_id]);
   this.m_cSoundSE.setVolume(30);
   this.m_cSoundSE.start(0,0);
   this.m_nBeforeID = n_se_id;
};
CSoundManager.prototype.playBGM = function(path_bgm)
{
   this.m_cSoundBGM.loadSound(path_bgm,false);
};
CSoundManager.prototype.setBGMVolume = function(n_volume)
{
   this.m_nBGMVolume = n_volume;
   this.m_cSoundBGM.setVolume(n_volume);
};
CSoundManager.prototype.setBGMFadeOut = function(n_frame)
{
   if(0 < n_frame)
   {
      this.m_nBGMFadeOutRate = this.m_nBGMVolume / n_frame;
      if(this.m_nBGMFadeOutRate <= 0)
      {
         this.m_nBGMFadeOutRate = 1;
      }
   }
};
g_cInputMgr = new CInputManager();
g_cTrionMgr = new CTrionManager();
g_cBG0Mgr = new CBG0Manager(_root.mcBG0);
g_cBG1Mgr = new CBG1Manager(_root.mcBG1);
g_cSndMgr = new CSoundManager(_root.mcSoundSE,_root.mcSoundBGM);
g_cSndMgr.playBGM("bgm/trion_BGM02_Recorder.mp3");
g_cSndMgr.setBGMVolume(32);
var g_nIntervalID = 0;
_root.g_nIntervalID = setInterval(_root.GameMain,1000 / _root.FPS);
