--[[
I totally made this one, yep all me., no need to ask where this came from
]]

local x = 400
local y = 0
local z = 300
local vspd = 0
local canJump = false
local fps = 30
local walkSpd = 35;
local turnSpd = 0.05;

local pWidth = 50
local pHeight = 50

local blink = 0

local keyCodeTo = {
	[Enum.KeyCode.Left] = "left",
	[Enum.KeyCode.Right] = "right",
	[Enum.KeyCode.Up] = "up",
	[Enum.KeyCode.Down] = "down",
	[Enum.KeyCode.A] = "left",
	[Enum.KeyCode.D] = "right",
	[Enum.KeyCode.W] = "up",
	[Enum.KeyCode.S] = "down",
	[Enum.KeyCode.Space] = "space"
}
local activeActions = {}
local canvas = require(script.Parent.canvas)
local ctx = canvas.getCurrentScreen()

local fpang = 0
local quadsToDraw = {}

local function ctxDrawLine(x1, y1, x2, y2)
	ctx.beginPath()
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
end

local function draw3dLine(x1, y1, z1, x2, y2, z2)
	-- Implement your draw3dLine function logic here
	local centerOfScreenX = ctx.width/2;
	local centerOfScreenY = ctx.height/2;

	local x1Diff = x1 - x;
	local y1Diff = y1 - y;
	local z1Diff = z1 - z;
	local x2Diff = x2 - x;
	local y2Diff = y2 - y;
	local z2Diff = z2 - z;

	local translatedX1 = x1Diff * math.cos(-fpang) + z1Diff * math.sin(-fpang);
	local translatedZ1 = z1Diff * math.cos(-fpang) - x1Diff * math.sin(-fpang);
	local translatedX2 = x2Diff * math.cos(-fpang) + z2Diff * math.sin(-fpang);
	local translatedZ2 = z2Diff * math.cos(-fpang) - x2Diff * math.sin(-fpang);

	if(translatedZ1 < 0 or translatedZ2 < 0) then
		return;
	end

	local screenDistance = centerOfScreenX;

	local dispX1 = (translatedX1 / translatedZ1) * screenDistance + centerOfScreenX;
	local dispY1 = (y1Diff / translatedZ1) * screenDistance + centerOfScreenY;
	local dispX2 = (translatedX2 / translatedZ2) * screenDistance + centerOfScreenX;
	local dispY2 = (y2Diff / translatedZ2) * screenDistance + centerOfScreenY;

	ctxDrawLine(dispX1, dispY1, dispX2, dispY2);
end

local function drawPrism(prX, prY, prZ, prW, prH, prL)
	-- Implement your drawPrism function logic here
	draw3dLine(prX, prY, prZ, prX, prY, prZ + prL);
	draw3dLine(prX, prY, prZ, prX, prY + prH, prZ);
	draw3dLine(prX, prY + prH, prZ, prX, prY + prH, prZ + prL);
	draw3dLine(prX, prY, prZ + prL, prX, prY + prH, prZ + prL);

	draw3dLine(prX + prW, prY, prZ, prX + prW, prY, prZ + prL);
	draw3dLine(prX + prW, prY, prZ, prX + prW, prY + prH, prZ);
	draw3dLine(prX + prW, prY + prH, prZ, prX + prW, prY + prH, prZ + prL);
	draw3dLine(prX + prW, prY, prZ + prL, prX + prW, prY + prH, prZ + prL);

	draw3dLine(prX, prY, prZ, prX + prW, prY, prZ);
	draw3dLine(prX, prY + prH, prZ, prX + prW, prY + prH, prZ);
	draw3dLine(prX, prY, prZ + prL, prX + prW, prY, prZ + prL);
	draw3dLine(prX, prY + prH, prZ + prL, prX + prW, prY + prH, prZ + prL);
end


local function draw3dQuad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
	-- Implement your draw3dQuad function logic here
	local centerOfScreenX = ctx.width/2;
	local centerOfScreenY = ctx.height/2;

	local x1Diff = x1 - x;
	local y1Diff = y1 - y;
	local z1Diff = z1 - z;
	local x2Diff = x2 - x;
	local y2Diff = y2 - y;
	local z2Diff = z2 - z;
	local x3Diff = x3 - x;
	local y3Diff = y3 - y;
	local z3Diff = z3 - z;
	local x4Diff = x4 - x;
	local y4Diff = y4 - y;
	local z4Diff = z4 - z;

	local translatedX1 = x1Diff * math.cos(-fpang) + z1Diff * math.sin(-fpang);
	local translatedZ1 = z1Diff * math.cos(-fpang) - x1Diff * math.sin(-fpang);
	local translatedX2 = x2Diff * math.cos(-fpang) + z2Diff * math.sin(-fpang);
	local translatedZ2 = z2Diff * math.cos(-fpang) - x2Diff * math.sin(-fpang);
	local translatedX3 = x3Diff * math.cos(-fpang) + z3Diff * math.sin(-fpang);
	local translatedZ3 = z3Diff * math.cos(-fpang) - x3Diff * math.sin(-fpang);
	local translatedX4 = x4Diff * math.cos(-fpang) + z4Diff * math.sin(-fpang);
	local translatedZ4 = z4Diff * math.cos(-fpang) - x4Diff * math.sin(-fpang);
	
	
	if (translatedZ1 < 0 or translatedZ2 < 0 or translatedZ3 < 0 or translatedZ4 < 0) then
		return;
	end

	local screenDistance = centerOfScreenX; -- 400

	local dispX1 = (translatedX1 / translatedZ1) * screenDistance + centerOfScreenX;
	local dispY1 = (y1Diff / translatedZ1) * screenDistance + centerOfScreenY;
	local dispX2 = (translatedX2 / translatedZ2) * screenDistance + centerOfScreenX;
	local dispY2 = (y2Diff / translatedZ2) * screenDistance + centerOfScreenY;

	local dispX3 = (translatedX3 / translatedZ3) * screenDistance + centerOfScreenX;
	local dispY3 = (y3Diff / translatedZ3) * screenDistance + centerOfScreenY;
	local dispX4 = (translatedX4 / translatedZ4) * screenDistance + centerOfScreenX;
	local dispY4 = (y4Diff / translatedZ4) * screenDistance + centerOfScreenY;

	local avgTZ = (translatedZ1 + translatedZ2 + translatedZ3 + translatedZ4) / 4;

	table.insert(quadsToDraw,{dispX1, dispY1, dispX2, dispY2, dispX3, dispY3, dispX4, dispY4, avgTZ, ctx.fillStyle})
end

local function fillPrism(prX, prY, prZ, prW, prH, prL)
	-- Implement your fillPrism function logic here
	draw3dQuad(prX, prY, prZ, prX, prY, prZ + prL, prX + prW, prY, prZ + prL, prX + prW, prY, prZ);
	draw3dQuad(prX, prY, prZ, prX, prY, prZ + prL, prX, prY + prH, prZ + prL, prX, prY + prH, prZ);
	draw3dQuad(prX, prY, prZ, prX, prY + prH, prZ, prX + prW, prY + prH, prZ, prX + prW, prY, prZ);

	draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY + prH, prZ, 
		prX + prW, prY, prZ, prX + prW, prY, prZ + prL);
	draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY + prH, prZ,
		prX, prY + prH, prZ, prX, prY + prH, prZ + prL);
	draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY, prZ + prL,
		prX, prY, prZ + prL, prX, prY + prH, prZ + prL);
end

local function fpDrawPillar(prX, prY, prZ, prW, prH, prL)
	-- Implement your fpDrawPillar function logic here
	local propEnds = 0.03;
	local propIn = 0.66;

	local playerHeight = 100;
	prY = playerHeight - prH - prY;

	--[[drawPrism(prX, prY, prZ, prW, prH * propEnds, prL);
	drawPrism(prX + prW * (1 - propIn)/2, prY + prH * propEnds, 
		prZ + prL * (1 - propIn)/2, prW * propIn, prH - prH * propEnds, prL * propIn);
	drawPrism(prX, prY + prH - prH * propEnds, prZ, prW, prH * propEnds, prL);]]

	fillPrism(prX + prW * (1 - propIn)/2, prY + prH * propEnds, 
		prZ + prL * (1 - propIn)/2, prW * propIn, prH - prH * propEnds, prL * propIn);

	fillPrism(prX, prY, prZ, prW, prH * propEnds, prL);
	fillPrism(prX, prY + prH - prH * propEnds, prZ, prW, prH * propEnds, prL);
end

local function ctxDrawQuad(x1, y1, x2, y2, x3, y3, x4, y4)
	-- Implement your ctxDrawQuad function logic here
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x4, y4);
	ctx.fill();
end

local function controlLogic()
	-- Implement your controlLogic function logic here
	if (activeActions["up"]) then
		x += math.sin(fpang) * walkSpd;
		z += math.cos(fpang) * walkSpd;
	end
	if (activeActions["down"]) then
		x -= math.sin(fpang) * walkSpd;
		z -= math.cos(fpang) * walkSpd;
	end
	if (activeActions["right"]) then
		fpang = fpang + turnSpd;
	end	
	if (activeActions["left"]) then
		fpang = fpang - turnSpd; 
	end
end

local function gameLogic()
	controlLogic()
end

local function renderQuads()
	-- Implement your renderQuads function logic here

	for i = 1,#quadsToDraw do 
		ctx.fillStyle = quadsToDraw[i][10]
		ctxDrawQuad(quadsToDraw[i][1],quadsToDraw[i][2],quadsToDraw[i][3],quadsToDraw[i][4],quadsToDraw[i][5],quadsToDraw[i][6],quadsToDraw[i][7],quadsToDraw[i][8])
	end
end

local function paintScreen()
	quadsToDraw = {};
	
	ctx.clearCanvas()
	
	ctx.fillStyle = Color3.new(6/16,9/16,6/16);
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = Color3.new(0,0,0);

	for i = 0,7 do
		ctx.fillStyle = Color3.fromRGB(i*31,((i+2)%8)*31,((i+5)%8)*31);
		fpDrawPillar(550, 0, 200 + 400 * i, 50, 300, 50);
		fpDrawPillar(200, 0, 200 + 400 * i, 50, 300, 50);
	end

	renderQuads();
	-- Implement your paintScreen function logic here
end

game:GetService("UserInputService").InputBegan:Connect(function(input, gameProcessed)
	if keyCodeTo[input.KeyCode] then
		activeActions[keyCodeTo[input.KeyCode]] = true
	end
end)

game:GetService("UserInputService").InputEnded:Connect(function(input)
	if keyCodeTo[input.KeyCode] then
		activeActions[keyCodeTo[input.KeyCode]] = false
	end
end)


function gameLoop()
	gameLogic()
	paintScreen()
end

while task.wait(1/fps) do
	gameLoop()
end
