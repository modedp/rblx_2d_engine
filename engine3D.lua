local canvas = require(script.Parent)
local ctx = canvas:getCurrentScreen()

local engine3D = {}
engine3D.quadsToDraw = {}
engine3D.playerPosition = {
	x=400,
	y=0,
	z=300,
}
engine3D.fps = 30
engine3D.walkSpeed = 35
engine3D.turnSpeed = 0.05
engine3D.facePlrAngle = 0
engine3D.keyBindActive = {}
engine3D.keyBinds = {
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

function engine3D:ctxDrawLine(x1, y1, x2, y2)
	ctx:beginPath()
	ctx:moveTo(x1, y1);
	ctx:lineTo(x2, y2);
	ctx:stroke();
end

function engine3D:draw3dLine(x1, y1, z1, x2, y2, z2)
	-- Implement your draw3dLine function logic here
	local centerOfScreenX = ctx.width/2;
	local centerOfScreenY = ctx.height/2;

	local x1Diff = x1 - self.PlayerPosition.x;
	local y1Diff = y1 - self.PlayerPosition.y;
	local z1Diff = z1 - self.PlayerPosition.z;
	local x2Diff = x2 - self.PlayerPosition.x;
	local y2Diff = y2 - self.PlayerPosition.y;
	local z2Diff = z2 - self.PlayerPosition.z;

	local translatedX1 = x1Diff * math.cos(-self.facePlrAngle) + z1Diff * math.sin(-self.facePlrAngle);
	local translatedZ1 = z1Diff * math.cos(-self.facePlrAngle) - x1Diff * math.sin(-self.facePlrAngle);
	local translatedX2 = x2Diff * math.cos(-self.facePlrAngle) + z2Diff * math.sin(-self.facePlrAngle);
	local translatedZ2 = z2Diff * math.cos(-self.facePlrAngle) - x2Diff * math.sin(-self.facePlrAngle);

	if(translatedZ1 < 0 or translatedZ2 < 0) then
		return;
	end

	local screenDistance = centerOfScreenX;

	local dispX1 = (translatedX1 / translatedZ1) * screenDistance + centerOfScreenX;
	local dispY1 = (y1Diff / translatedZ1) * screenDistance + centerOfScreenY;
	local dispX2 = (translatedX2 / translatedZ2) * screenDistance + centerOfScreenX;
	local dispY2 = (y2Diff / translatedZ2) * screenDistance + centerOfScreenY;

	self:ctxDrawLine(dispX1, dispY1, dispX2, dispY2);
end

function engine3D:drawPrism(prX, prY, prZ, prW, prH, prL)
	-- Implement your drawPrism function logic here
	self:draw3dLine(prX, prY, prZ, prX, prY, prZ + prL);
	self:draw3dLine(prX, prY, prZ, prX, prY + prH, prZ);
	self:draw3dLine(prX, prY + prH, prZ, prX, prY + prH, prZ + prL);
	self:draw3dLine(prX, prY, prZ + prL, prX, prY + prH, prZ + prL);

	self:draw3dLine(prX + prW, prY, prZ, prX + prW, prY, prZ + prL);
	self:draw3dLine(prX + prW, prY, prZ, prX + prW, prY + prH, prZ);
	self:draw3dLine(prX + prW, prY + prH, prZ, prX + prW, prY + prH, prZ + prL);
	self:draw3dLine(prX + prW, prY, prZ + prL, prX + prW, prY + prH, prZ + prL);

	self:draw3dLine(prX, prY, prZ, prX + prW, prY, prZ);
	self:draw3dLine(prX, prY + prH, prZ, prX + prW, prY + prH, prZ);
	self:draw3dLine(prX, prY, prZ + prL, prX + prW, prY, prZ + prL);
	self:draw3dLine(prX, prY + prH, prZ + prL, prX + prW, prY + prH, prZ + prL);
end


function engine3D:draw3dQuad(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4)
	-- Implement your draw3dQuad function logic here
	local centerOfScreenX = ctx.width/2;
	local centerOfScreenY = ctx.height/2;

	local x1Diff = x1 - self.PlayerPosition.x;
	local y1Diff = y1 - self.PlayerPosition.y;
	local z1Diff = z1 - self.PlayerPosition.z;
	local x2Diff = x2 - self.PlayerPosition.x;
	local y2Diff = y2 - self.PlayerPosition.y;
	local z2Diff = z2 - self.PlayerPosition.z;
	local x3Diff = x3 - self.PlayerPosition.x;
	local y3Diff = y3 - self.PlayerPosition.y;
	local z3Diff = z3 - self.PlayerPosition.z;
	local x4Diff = x4 - self.PlayerPosition.x;
	local y4Diff = y4 - self.PlayerPosition.y;
	local z4Diff = z4 - self.PlayerPosition.z;

	local translatedX1 = x1Diff * math.cos(-self.facePlrAngle) + z1Diff * math.sin(-self.facePlrAngle);
	local translatedZ1 = z1Diff * math.cos(-self.facePlrAngle) - x1Diff * math.sin(-self.facePlrAngle);
	local translatedX2 = x2Diff * math.cos(-self.facePlrAngle) + z2Diff * math.sin(-self.facePlrAngle);
	local translatedZ2 = z2Diff * math.cos(-self.facePlrAngle) - x2Diff * math.sin(-self.facePlrAngle);
	local translatedX3 = x3Diff * math.cos(-self.facePlrAngle) + z3Diff * math.sin(-self.facePlrAngle);
	local translatedZ3 = z3Diff * math.cos(-self.facePlrAngle) - x3Diff * math.sin(-self.facePlrAngle);
	local translatedX4 = x4Diff * math.cos(-self.facePlrAngle) + z4Diff * math.sin(-self.facePlrAngle);
	local translatedZ4 = z4Diff * math.cos(-self.facePlrAngle) - x4Diff * math.sin(-self.facePlrAngle);


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

	table.insert(self.quadsToDraw,{dispX1, dispY1, dispX2, dispY2, dispX3, dispY3, dispX4, dispY4, avgTZ, ctx.fillStyle})
end

function engine3D:fillPrism(prX, prY, prZ, prW, prH, prL)
	-- Implement your fillPrism function logic here
	self:draw3dQuad(prX, prY, prZ, prX, prY, prZ + prL, prX + prW, prY, prZ + prL, prX + prW, prY, prZ);
	self:draw3dQuad(prX, prY, prZ, prX, prY, prZ + prL, prX, prY + prH, prZ + prL, prX, prY + prH, prZ);
	self:draw3dQuad(prX, prY, prZ, prX, prY + prH, prZ, prX + prW, prY + prH, prZ, prX + prW, prY, prZ);

	self:draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY + prH, prZ, 
		prX + prW, prY, prZ, prX + prW, prY, prZ + prL);
	self:draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY + prH, prZ,
		prX, prY + prH, prZ, prX, prY + prH, prZ + prL);
	self:draw3dQuad(prX + prW, prY + prH, prZ + prL, prX + prW, prY, prZ + prL,
		prX, prY, prZ + prL, prX, prY + prH, prZ + prL);
end

function engine3D:fpDrawPillar(prX, prY, prZ, prW, prH, prL)
	-- Implement your fpDrawPillar function logic here
	local propEnds = 0.03;
	local propIn = 0.66;

	local playerHeight = 100;
	prY = playerHeight - prH - prY;

	--[[drawPrism(prX, prY, prZ, prW, prH * propEnds, prL);
	drawPrism(prX + prW * (1 - propIn)/2, prY + prH * propEnds, 
		prZ + prL * (1 - propIn)/2, prW * propIn, prH - prH * propEnds, prL * propIn);
	drawPrism(prX, prY + prH - prH * propEnds, prZ, prW, prH * propEnds, prL);]]

	self:fillPrism(prX + prW * (1 - propIn)/2, prY + prH * propEnds, 
		prZ + prL * (1 - propIn)/2, prW * propIn, prH - prH * propEnds, prL * propIn);

	self:fillPrism(prX, prY, prZ, prW, prH * propEnds, prL);
	self:fillPrism(prX, prY + prH - prH * propEnds, prZ, prW, prH * propEnds, prL);
end

function engine3D:ctxDrawQuad(x1, y1, x2, y2, x3, y3, x4, y4)
	-- Implement your ctxDrawQuad function logic here
	ctx:beginPath();
	ctx:moveTo(x1, y1);
	ctx:lineTo(x2, y2);
	ctx:lineTo(x3, y3);
	ctx:lineTo(x4, y4);
	ctx:fill();
end

function engine3D:controlLogic()
	-- Implement your controlLogic function logic here
	if (self.keyBindActive["up"]) then
		self.PlayerPosition.x += math.sin(self.facePlrAngle) * self.walkSpeed;
		self.PlayerPosition.z += math.cos(self.facePlrAngle) * self.walkSpeed;
	end
	if (self.keyBindActive["down"]) then
		self.PlayerPosition.x -= math.sin(self.facePlrAngle) * self.walkSpeed;
		self.PlayerPosition.z -= math.cos(self.facePlrAngle) * self.walkSpeed;
	end
	if (self.keyBindActive["right"]) then
		self.facePlrAngle = self.facePlrAngle + self.turnSpeed;
	end	
	if (self.keyBindActive["left"]) then
		self.facePlrAngle = self.facePlrAngle - self.turnSpeed; 
	end
end

function engine3D:runGameLogic()
	self:controlLogic()
end

function engine3D:renderQuads()
	-- Implement your renderQuads function logic here

	for i = 1,#quadsToDraw do 
		ctx.fillStyle = quadsToDraw[i][10]
		self:ctxDrawQuad(quadsToDraw[i][1],quadsToDraw[i][2],quadsToDraw[i][3],quadsToDraw[i][4],quadsToDraw[i][5],quadsToDraw[i][6],quadsToDraw[i][7],quadsToDraw[i][8])
	end
end

function engine3D:paintScreen()
	quadsToDraw = {};

	ctx.clearCanvas()

	ctx.fillStyle = Color3.new(6/16,9/16,6/16);
	ctx.fillRect(0, 0, ctx.width, ctx.height);

	ctx.fillStyle = Color3.new(0,0,0);

	for i = 0,7 do
		ctx.fillStyle = Color3.fromRGB(i*31,((i+2)%8)*31,((i+5)%8)*31);
		self:fpDrawPillar(550, 0, 200 + 400 * i, 50, 300, 50);
		self:fpDrawPillar(200, 0, 200 + 400 * i, 50, 300, 50);
	end

	self:renderQuads();
end

function engine3D:gameLoop()
	self:runGameLogic()
	self:paintScreen()
end

function engine3D:__call()
	game:GetService("UserInputService").InputBegan:Connect(function(input, gameProcessed)
		if self.keyBinds[input.KeyCode] then
			self.keyBindActive[self.keyBinds[input.KeyCode]] = true
		end
	end)

	game:GetService("UserInputService").InputEnded:Connect(function(input)
		if self.keyBinds[input.KeyCode] then
			self.keyBindActive[self.keyBinds[input.KeyCode]] = false
		end
	end)
	self.running = true
	while engine3D.running do
		self:gameLoop()
		task.wait(1/self.fps)
	end
	return self
end	

engine3D = setmetatable(engine3D,engine3D)

return engine3D