--[[
why is it so hard 😢
]]

local module = {}

module.__index = module

module.drawTriangleOutline = function(x1,y1,x2,y2,x3,y3,size)
	require(script.Parent.canvas).getCurrentScreen().drawTriangle(x1,y1,x2,y2,x3,y3,size)
end

module.drawCircle = function(x1,y1,size)
	require(script.Parent.canvas).getCurrentScreen().drawCircle(x1,y1,size)
end

function module:__call(x1, y1, x2, y2, x3, y3)
	local slope = -1 * ((x2 - x1) / (y2 - y1))
	if y1 == y2 then
		slope = 99999
	end
	
	self.drawTriangleOutline(x1,y1,x2,y2,x3,y3)
	
	local dAB = math.sqrt((x1 - x2)^2 + (y1 - y2)^2)
	local dBC = math.sqrt((x3 - x2)^2 + (y3 - y2)^2)
	local dCA = math.sqrt((x1 - x3)^2 + (y1 - y3)^2)

	local dSum = dBC + dCA + dAB
	local dX = (dBC * x1 + dCA * x2 + dAB * x3) / dSum
	local dY = (dBC * y1 + dCA * y2 + dAB * y3) / dSum
	local oX = dX
	local oY = dY
	
	local pointXHIGH = x1 + (slope * slope * dX) - slope * (dY - x1) / (slope * slope + 1)
	local radius = math.sqrt((dX - pointXHIGH)^2 + slope * (pointXHIGH - dX)^2)
	
	self.drawCircle(oX,oY,radius*2)
	
	local dataPointsX = {x1, x2, x3}
	local dataPointsY = {y1, y2, y3}

	local aCheck, bCheck, cCheck = 0, 0, 0
	for i = 1, 3 do
		local dx, dy = dataPointsX[i] - dX, dataPointsY[i] - dY
		if i == 1 then
			aCheck = math.sqrt(dx^2 + dy^2)
		elseif i == 2 then
			bCheck = math.sqrt(dx^2 + dy^2)
		else
			cCheck = math.sqrt(dx^2 + dy^2)
		end
	end

	local pointer = (aCheck > bCheck and (aCheck > cCheck and 1 or 3)) or (bCheck > cCheck and 2 or 3)
	
	local radii = radius
	repeat
		local slopeSmall = math.sqrt(
			((dY - dataPointsY[pointer]) / (dX - dataPointsX[pointer]))^2 + 1) * 
			((dataPointsX[pointer] - dX) / math.abs(dataPointsX[pointer] - dX))
		if dataPointsX[pointer] == dX then
			slopeSmall = 99999
		end
		local highX = dX + radii * (1 / slopeSmall)
		local highY = dY + radii * (((dY - dataPointsY[pointer]) / (dX - dataPointsX[pointer])) / slopeSmall)
		
		local dAD = math.sqrt((dataPointsX[pointer] - oX)^2 + (dataPointsY[pointer] - oY)^2)
		local dA1D = math.sqrt((highX - oX)^2 + (highY - oY)^2)
		
		local factor = dA1D / dAD
		local FaX = (highX - factor * (dataPointsX[pointer] - dataPointsX[1]) + dataPointsX[1]) / 2
		local FaY = (highY - factor * (dataPointsY[pointer] - dataPointsY[1]) + dataPointsY[1]) / 2

		local FbX = (highX - factor * (dataPointsX[pointer] - dataPointsX[2]) + dataPointsX[2]) / 2
		local FbY = (highY - factor * (dataPointsY[pointer] - dataPointsY[2]) + dataPointsY[2]) / 2

		local FcX = (highX - factor * (dataPointsX[pointer] - dataPointsX[3]) + dataPointsX[3]) / 2
		local FcY = (highY - factor * (dataPointsY[pointer] - dataPointsY[3]) + dataPointsY[3]) / 2
		
		radii = radii * (1 - ((dX - ((highX + dataPointsX[pointer]) / 2)) / (dX - dataPointsX[pointer])))
		
		self.drawTriangleOutline(FaX,FaY,FbX,FbY,FcX,FcY,radii*2+1)
		
		dX = pointer == 1 and FaX or (pointer == 2 and FbX or FcX)
		dY = pointer == 1 and FaY or (pointer == 2 and FbY or FcY)

	until radii < 1.2
end

return module
