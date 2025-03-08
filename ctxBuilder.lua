--!strict
local module = {}
local roInstancer = require(script.Parent.roInstancer);

module.initialized = false
module.onlyOneFrame = true

export type lateObj = (Instance | Frame | ImageLabel)?
export type canvastx = {
	fillStyle: Color3,
	applyColoredAuto: boolean,
	Name: string,
	guiHolderObject: Instance,
	localBorderSize: {width:number,height:number},
	locationObjects: {number:any?},
	tracingPathCoordinates: {any:any?},
	latestObject: lateObj,
	width: number,
	height: number,
	boundedLine: (self: canvastx,x1 : number,y1 : number,x2 : number,y2 : number) -> ({number}),
	drawUnfilledSquare: (self: canvastx,x1:number,y1:number,x2:number,y2:number,x3:number,y3:number,x4:number,y4:number) -> (),
	drawLine: (self: canvastx,x1 : number,y1 : number, x2 : number, y2: number, thickness : number?) -> (Frame?),
	drawPoint: (self: canvastx,x1 : number,y1 : number) -> (Frame?),
	drawCircle: (self: canvastx,x1 : number,y1 : number,radius : number) -> (Frame?),
	drawTriangle: (self: canvastx,x1 : number,y1 : number,x2 : number,y2 : number,x3 : number,y3 : number, thickness: number?) -> (),
	beginPath: (self: canvastx) -> (),
	getCoords: (self: canvastx) -> {any:any?},
	stroke: (self: canvastx) -> (),
	lineTo: (self: canvastx,x1 : number,y1 : number) -> (),
	moveTo: (self: canvastx,x1 : number,y1 : number) -> (),
	fill: (self: canvastx) -> (),
	fillRect: (self: canvastx,x1 : number,y1 : number,x2 : number,y2 : number) -> (),
	clearCanvas: (self: canvastx) -> (),
	objectID: number,
}

local ctx = {
	fillStyle = Color3.new(),
	localBorderSize = {
		width = 800,
		height = 600,
	},
	locationObjects = {},
	tracingPathCoordinates = {},
	applyColoredAuto = true,
	Name = "newCanvas",
}

function module:getguiHolder()
	return game:GetService("Players").LocalPlayer and game:GetService("Players").LocalPlayer:FindFirstChild("PlayerGui") or game:GetService("StarterGui")
end

function module:getguiHolderObject(UIDName : string)
	return self:getguiHolder():WaitForChild(UIDName,0.2) and 
		self:getguiHolder()[UIDName]:FindFirstChild(UIDName) and 
		self:getguiHolder()[UIDName][UIDName] or 
		roInstancer("Frame",roInstancer("ScreenGui",
			self:getguiHolder()){Name = UIDName}){Name = UIDName}
end

function module:deepCopy(dictionary)
	local newDictionary = {}
	for key, value in pairs(dictionary) do
		newDictionary[key] = type(value) == "table" and self:deepCopy(value) or value
	end
	return newDictionary
end

function module:__call(canvas) : canvastx
	if not self.onlyOneFrame then
		ctx.Name = game:GetService("HttpService"):GenerateGUID()
	end
	if self.onlyOneFrame and self.initialized then
		return self.ctxDefault
	end
	local newCTX = self:deepCopy(ctx)
	newCTX.guiHolderObject = self:getguiHolderObject(newCTX.Name) :: Instance
	local guiParent = self:getguiHolder():WaitForChild(newCTX.Name)
	newCTX.localBorderSize.width = guiParent.AbsoluteSize.X
	newCTX.localBorderSize.height = guiParent.AbsoluteSize.Y
	newCTX.width = ctx.localBorderSize.width
	newCTX.height = ctx.localBorderSize.height
	newCTX.objectID = 0
	self:getguiHolderObject(newCTX.Name).Size = UDim2.fromOffset(newCTX.width,newCTX.height)
	--[[
			point A and B are the midsection of line 1 and line 3
			point C and D are the midsection of line 2 and 4
			length of A and B is the length of the line
			and half the length between C and D is the size of the line
	]]
	--[[debug
			ctx.drawPoint(x1,y1)
			ctx.drawPoint(x2,y2)
			ctx.drawPoint(x3,y3)
			ctx.drawPoint(x4,y4)
	]]
	function newCTX:boundedLine(x1 : number, y1 : number, x2 : number, y2 : number) 
		local squareWidth = self.width
		local squareHeight = self.height
		local intersectionPoints = {}

		local function addIntersection(x, y)
			if x >= 0 and x <= squareWidth and y >= 0 and y <= squareHeight then
				table.insert(intersectionPoints, Vector2.new(x, y))
			end
		end

		local function solveForX(xS : number)
			local y = (xS - x1) * (y2 - y1) / (x2 - x1) + y1
			addIntersection(xS, y)
		end

		local function solveForY(yS : number)
			local x = (yS - y1) * (x2 - x1) / (y2 - y1) + x1
			addIntersection(x, yS)
		end

		solveForX(0)
		solveForX(squareWidth)
		solveForY(0)
		solveForY(squareHeight)

		local function clamp(value, minValue, maxValue)
			return math.max(minValue, math.min(maxValue, value))
		end

		local newP1 = Vector2.new(clamp(x1, 0, squareWidth), clamp(y1, 0, squareHeight))
		local newP2 = Vector2.new(clamp(x2, 0, squareWidth), clamp(y2, 0, squareHeight))

		for _, intersection : Vector2 in pairs(intersectionPoints) do
			if (x1 - intersection.X) * (x2 - intersection.X) <= 0 and
				(y1 - intersection.Y) * (y2 - intersection.Y) <= 0 then
				if (newP1 - intersection).Magnitude < (newP2 - intersection).Magnitude then
					newP1 = intersection
				else
					newP2 = intersection
				end
			end
		end

		return {newP1.X, newP1.Y, newP2.X, newP2.Y}
	end

	function newCTX:drawUnfilledSquare(x1,y1,x2,y2,x3,y3,x4,y4)

		local points = {{x1,y1},{x2,y2},{x3,y3},{x4,y4}}
		for i = 1,4 do
			self:drawLine(points[i][1],points[i][2],points[i%4+1][1],points[i%4+1][2])
		end
--[[
		line.Size = UDim2.fromOffset(math.sqrt((leftfurthermost-rightfurthermost)^2),math.sqrt((bottomfurthermost-topfurthermost)^2))
		line.Position = UDim2.fromOffset(leftfurthermost,bottomfurthermost)
		
		line.Rotation = math.atan2(x4-x1, y4-y1) * (180 / math.pi)  
		
		newCTX.latestObject = line
]]
	end

	function newCTX:drawLine(x1 : number,y1 : number,x2 : number,y2 : number, thickness : number?) : Frame?
		local bx1,by1,bx2,by2 : number = unpack(self:boundedLine(x1,y1,x2,y2))
		self.objectID+=1

		local lineLength = math.sqrt((bx2 - bx1)^2 + (by2 - by1)^2)
		local angle = math.atan2(by2 - by1, bx2 - bx1)
		local midPointX = (bx1 + bx2) / 2
		local midPointY = (by1 + by2) / 2

		local line = roInstancer("Frame",module:getguiHolderObject(self.Name)){
			Size = UDim2.fromOffset(lineLength, thickness or 1),
			BorderSizePixel = 0,
			BackgroundColor3 = self.applyColoredAuto and self.fillStyle or Color3.new(1,1,1),
			Position = UDim2.fromOffset(midPointX - lineLength / 2, midPointY - (thickness or 1) / 2),
			Rotation = math.deg(angle),
			Name = self.objectID,
			ZIndex = 1,
		} :: Frame
		

		self.latestObject = line
		return line
	end

	function newCTX:drawPoint(x1 : number,y1 : number) : Frame?
		self.objectID+=1
		local point = roInstancer("Frame",module:getguiHolderObject(self.Name)){
			Size = UDim2.fromOffset(1,1),
			BorderSizePixel = 0,
			BackgroundColor3 = self.applyColoredAuto and self.fillStyle or Color3.new(1,1,1),
			Position = UDim2.fromOffset(x1,y1),
			Name = self.objectID,
			ZIndex = 2,
		} :: Frame

		self.latestObject = point
		return point
	end

	function newCTX:drawCircle(x1 : number, y1 : number, radius : number) : Frame?
		radius = radius or 1
		self:drawPoint(x1, y1);
		(self.latestObject :: Frame).AnchorPoint = Vector2.new(0.5,0.5);
		(self.latestObject :: Frame).BackgroundColor3 = self.applyColoredAuto and self.fillStyle or Color3.new(1,1,1);
		(self.latestObject :: Frame).Size = UDim2.fromOffset(radius,radius);

		local circle = roInstancer("UICorner",self.latestObject){
			CornerRadius = UDim.new(1,0)
		}

		return self.latestObject :: Frame
	end

	function newCTX:drawTriangle(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number,thickness : number?)
		thickness = thickness or 1
		self:drawLine(x1,y1,x2,y2,thickness)
		self:drawLine(x2,y2,x3,y3,thickness)
		self:drawLine(x3,y3,x1,y1,thickness)
	end

	function newCTX:beginPath()
		self.tracingPathCoordinates = {}
	end

	function newCTX:getCoords()
		if not self.tracingPathCoordinates then
			self.tracingPathCoordinates = {}
		end
		return self.tracingPathCoordinates
	end

	function newCTX:moveTo(x1,y1)
		self.tracingPathCoordinates = {{x=x1,y=y1}}
	end

	function newCTX:lineTo(x1,y1)
		table.insert(self.tracingPathCoordinates :: {any:any?},{x=x1,y=y1})
	end

	function newCTX:stroke()
		--[[
		local point1 = self.tracingPathCoordinates[1]
		local point2 = self.tracingPathCoordinates[2]
		self:drawLine(point1.x,point1.y,point2.x,point2.y)
		self.tracingPathCoordinates = {}
		]]
	end

	function newCTX:fill()
		local objectsToLine = {}
		local traceObjects = self.tracingPathCoordinates or {}
		for i = 1, #(traceObjects), 1 do
			local rg1 = traceObjects[i]
			local rg2 = traceObjects[i+1] or 
				traceObjects[(i%#traceObjects)+1]
			self:drawLine(rg1.x,rg1.y,rg2.x,rg2.y)
		end
		--[[newCTX:getFilledSquare(
			objectsToLine[1].Position.X.Offset,
			objectsToLine[1].Position.Y.Offset,
			objectsToLine[2].Position.X.Offset,
			objectsToLine[2].Position.Y.Offset,
			objectsToLine[3].Position.X.Offset,
			objectsToLine[3].Position.Y.Offset,
			objectsToLine[4].Position.X.Offset,
			objectsToLine[4].Position.Y.Offset
		)]]
	end

	function newCTX:fillRect(x1,y1,x2,y2)
		self:drawPoint(x1,y1);
		(self.latestObject :: Frame).Size = UDim2.fromOffset(x2,y2)
	end

	function newCTX:clearCanvas()
		module:getguiHolderObject(self.Name):ClearAllChildren()
	end

	if self.onlyOneFrame then
		self.ctxDefault = newCTX
		self.initialized = true
	end
	canvas.ctx = newCTX
	return newCTX :: canvastx
end

module = setmetatable(module,module)

return module