local module = {}

function module.GetHexValue(hexValue)
	local HIndex = {
		["0"]=0,["1"]=1,["2"]=2,["3"]=3,["4"]=4,["5"]=5,["6"]=6,["7"]=7,["8"]=8,["9"]=9,
		A=10,B=11,C=12,D=13,E=14,F=15}
	return HIndex[hexValue]
end

function module.hex3ValuetoRGB(hexColor)
	local r = module.GetHexValue((hexColor):sub(1,1))*16
	local g = module.GetHexValue((hexColor):sub(2,2))*16
	local b = module.GetHexValue((hexColor):sub(3,3))*16
	return Color3.fromRGB(r,g,b)
end

function module.hex6ValuetoRGB(hexColor)
	local r = module.GetHexValue((hexColor):sub(1,1))*15 + module.GetHexValue((hexColor):sub(2,2)) 
	local g = module.GetHexValue((hexColor):sub(3,3))*15 + module.GetHexValue((hexColor):sub(4,4))
	local b = module.GetHexValue((hexColor):sub(5,5))*15 + module.GetHexValue((hexColor):sub(6,6))
	return Color3.fromRGB(r,g,b)
end

function module.BoundedLine(x1, y1, x2, y2)
	local squareWidth = module.getCurrentScreen().width
	local squareHeight = module.getCurrentScreen().height
	local intersectionPoints = {}

	local function addIntersection(x, y)
		if x >= 0 and x <= squareWidth and y >= 0 and y <= squareHeight then
			table.insert(intersectionPoints, Vector2.new(x, y))
		end
	end

	local function solveForX(x)
		local y = (x - x1) * (y2 - y1) / (x2 - x1) + y1
		addIntersection(x, y)
	end

	local function solveForY(y)
		local x = (y - y1) * (x2 - x1) / (y2 - y1) + x1
		addIntersection(x, y)
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

	for _, intersection in pairs(intersectionPoints) do
		if (x1 - intersection.x) * (x2 - intersection.x) <= 0 and
			(y1 - intersection.y) * (y2 - intersection.y) <= 0 then
			if (newP1 - intersection).Magnitude < (newP2 - intersection).Magnitude then
				newP1 = intersection
			else
				newP2 = intersection
			end
		end
	end

	return {newP1.X, newP1.Y, newP2.X, newP2.Y}
end


function module.hexToRGB(hexColor)
	hexColor = tostring(hexColor):gsub(".","0")
	local rgbColor = ((hexColor):len() == 3 
		and module.hex3ValuetoRGB(hexColor)) or ((hexColor):len() == 6 
		and module.hex6ValuetoRGB(hexColor))
	if type(rgbColor) == "boolean" then
		print(hexColor)
	end
	return rgbColor
end

function module.RGBtoHex(rgb)
	return "" .. 
		("0123456789ABCDEF"):sub(math.floor(rgb.R*255/16),math.floor(rgb.R*255/16)) ..
		("0123456789ABCDEF"):sub(math.floor(rgb.G*255/16),math.floor(rgb.G*255/16)) .. 
		("0123456789ABCDEF"):sub(math.floor(rgb.B*255/16),math.floor(rgb.B*255/16))
end 
 
function module.getCurrentScreen()
	if module.CurrentScreen then return module.CurrentScreen end
	local l_GuiHolder = game:GetService("Players").LocalPlayer and game:GetService("Players").LocalPlayer:FindFirstChild("PlayerGui") or game:GetService("StarterGui")
	local ctx = {
		backgroundColor = Color3.new(0.36,0.36,0.36),
		fillStyle = Color3.new(),
		guiHolderObject = l_GuiHolder:WaitForChild("ScreenGui",2) and l_GuiHolder:FindFirstChild("ScreenGui"):FindFirstChild("MainGameFrame") and l_GuiHolder:FindFirstChild("ScreenGui"):FindFirstChild("MainGameFrame"):FindFirstChild("ContainerFrame") or Instance.new("Frame",Instance.new("ScreenGui",l_GuiHolder)),
		localBorderSize = {
			width = 800,
			height = 600,
		},
		locationObjects = {},
		tracingPath = {},
		tracingPathCoordinates = {},
		latestObject = nil,
	}
	while wait(0) do
		local guiParent = ctx.guiHolderObject.Parent:IsA("ScreenGui") and ctx.guiHolderObject.Parent or ctx.guiHolderObject.Parent.Parent
		ctx.localBorderSize.width = guiParent.AbsoluteSize.X
		ctx.localBorderSize.height = guiParent.AbsoluteSize.Y
		break
	end
	ctx.width = ctx.localBorderSize.width
	ctx.height = ctx.localBorderSize.height
	ctx.guiHolderObject.Size = UDim2.fromOffset(ctx.width,ctx.height)

	function ctx.getUnfilledSquare(x1,y1,x2,y2,x3,y3,x4,y4)
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
		local line1 = ctx.getLine(x1,y1,x2,x2)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		local line2 = ctx.getLine(x2,y2,x3,x3)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		local line3 = ctx.getLine(x3,y3,x4,x4)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		local line4 = ctx.getLine(x4,y4,x1,x1)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))

--[[
		line.Size = UDim2.fromOffset(math.sqrt((leftfurthermost-rightfurthermost)^2),math.sqrt((bottomfurthermost-topfurthermost)^2))
		line.Position = UDim2.fromOffset(leftfurthermost,bottomfurthermost)
		
		line.Rotation = math.atan2(x4-x1, y4-y1) * (180 / math.pi)  
		
		ctx.latestObject = line
]]
		return
	end
	
	
	function ctx.getLine(x1,y1,x2,y2,thickness)
		
		local x1,y1,x2,y2 = unpack(module.BoundedLine(x1,y1,x2,y2))

		local lineLength = math.sqrt((x2 - x1)^2 + (y2 - y1)^2)
		local angle = math.atan2(y2 - y1, x2 - x1)
		local midPointX = (x1 + x2) / 2
		local midPointY = (y1 + y2) / 2

		local line = Instance.new("Frame", ctx.guiHolderObject)
		line.Size = UDim2.fromOffset(lineLength, thickness or 1)
		line.BorderSizePixel = 0
		line.BackgroundColor3 = ctx.fillStyle
		line.Position = UDim2.fromOffset(midPointX - lineLength / 2, midPointY - thickness / 2)
		line.Rotation = math.deg(angle)
		line.ZIndex = 1

		ctx.latestObject = line
		return line
	end

	function ctx.drawPoint(x1,y1,x2,y2,scalarDot)
		local point = Instance.new("Frame",ctx.guiHolderObject)
		if scalarDot then
			point.AnchorPoint = Vector2.new(0.5,0.5)
		end
		point.Size = UDim2.fromOffset(x2 or scalarDot or 1,y2 or scalarDot or 1)
		point.BorderSizePixel = 0
		point.BackgroundColor3 = Color3.new(1,1,1) --[[Black color]]
		point.Position = UDim2.fromOffset(x1,y1)
		point.ZIndex = 2
		
		ctx.latestObject = point
		return point
	end
	
	function ctx.drawCircle(x1,y1,radius)
		radius = radius or 1
		local newCircle = ctx.drawPoint(x1,y1,nil,nil,radius)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		
		local circle = Instance.new("UICorner",ctx.latestObject)
		circle.CornerRadius = UDim.new(1,0)
		
		return newCircle
	end
	
	function ctx.drawTriangle(x1,y1,x2,y2,x3,y3,thickness)
		thickness = thickness or 1
		local line1 = ctx.getLine(x1,y1,x2,y2,thickness)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		local line2 = ctx.getLine(x2,y2,x3,y3,thickness)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
		local line3 = ctx.getLine(x3,y3,x1,y1,thickness)
		ctx.latestObject.BackgroundColor3 = ((ctx.fillStyle))
	end

	function ctx.beginPath()
		ctx.tracingPathCoordinates = {}
	end

	function ctx.moveTo(x1,y1)
		ctx.tracingPathCoordinates = {{x=x1,y=y1}}
	end

	function ctx.lineTo(x1,y1)
		table.insert(ctx.tracingPathCoordinates,{x=x1,y=y1})
	end

	function ctx.stroke()
		local point1 = ctx.tracingPathCoordinates[1]
		local point2 = ctx.tracingPathCoordinates[2]
		ctx.getLine(point1.x,point1.y,point2.x,point2.y)
		ctx.tracingPathCoordinates = {}
	end

	function ctx.fill()
		local objectsToLine = {}

		for i = 1, #ctx.tracingPathCoordinates, 1 do
			local rg1 = ctx.tracingPathCoordinates[i]
			local rg2 = ctx.tracingPathCoordinates[i+1] or ctx.tracingPathCoordinates[(i%#ctx.tracingPathCoordinates)+1]
			ctx.getLine(rg1.x,rg1.y,rg2.x,rg2.y)
			if ctx.latestObject then
				ctx.latestObject.BackgroundColor3 = (ctx.fillStyle)
			end
		end
		--[[ctx.getFilledSquare(
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

	function ctx.fillRect(x1,y1,x2,y2)
		ctx.drawPoint(x1,y1,x2,y2)
	end

	function ctx.clearCanvas()
		ctx.guiHolderObject:ClearAllChildren()
	end

	module.CurrentScreen = ctx
	return module.getCurrentScreen()
end

return module
