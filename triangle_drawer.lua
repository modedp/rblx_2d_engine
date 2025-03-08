local module = {}
module.__index = module

-- Retrieves the current screen object
function module:retrieveScreen()
	return require(script.Parent).getCurrentScreen()
end

-- Draws the outline of a triangle on the screen
function module:drawTriangleOutline(x1, y1, x2, y2, x3, y3, size)
	self:retrieveScreen().drawTriangle(x1, y1, x2, y2, x3, y3, size)
end

-- Draws a circle on the screen
function module:drawCircle(centerX, centerY, diameter)
	self:retrieveScreen().drawCircle(centerX, centerY, diameter)
end

-- Main function to draw a triangle and its inscribed circle, then iteratively draw smaller triangles
function module:__call(x1, y1, x2, y2, x3, y3)
	-- Calculate the slope of the line between the first two points
	local slope = -1 * ((x1 - x2) / (y2 - y1))
	if y1 == y2 then
		slope = 99999 -- Handle vertical line case
	end

	-- Draw the initial triangle outline
	self:drawTriangleOutline(x1, y1, x2, y2, x3, y3)

	-- Calculate the distances between the vertices
	local distanceAB = math.sqrt((x1 - x2)^2 + (y1 - y2)^2)
	local distanceBC = math.sqrt((x3 - x2)^2 + (y3 - y2)^2)
	local distanceCA = math.sqrt((x1 - x3)^2 + (y1 - y3)^2)

	-- Calculate the centroid of the triangle
	local totalDistance = distanceBC + distanceCA + distanceAB
	local centroidX = (distanceBC * x1 + distanceCA * x2 + distanceAB * x3) / totalDistance
	local centroidY = (distanceBC * y1 + distanceCA * y2 + distanceAB * y3) / totalDistance
	local originX = centroidX
	local originY = centroidY

	-- Calculate the radius of the circle
	local pointXHigh = ((x1 + (slope^2 * centroidX)) - slope * (centroidY - y1)) / (slope^2 + 1)
	local radius = math.sqrt((centroidX - pointXHigh)^2 + (slope * (pointXHigh - centroidX))^2)

	-- Draw the circle
	self:drawCircle(originX, originY, radius * 2)

	-- Store the vertices in arrays for easier access
	local verticesX = {x1, x2, x3}
	local verticesY = {y1, y2, y3}

	-- Calculate the distances from the centroid to each vertex
	local distanceToA, distanceToB, distanceToC = 0, 0, 0
	for i = 1, 3 do
		local dx, dy = verticesX[i] - centroidX, verticesY[i] - centroidY
		if i == 1 then
			distanceToA = math.sqrt(dx^2 + dy^2)
		elseif i == 2 then
			distanceToB = math.sqrt(dx^2 + dy^2)
		else
			distanceToC = math.sqrt(dx^2 + dy^2)
		end
	end

	-- Determine the farthest vertex from the centroid
	local farthestVertexIndex = (distanceToA > distanceToB and (distanceToA > distanceToC and 1 or 3)) or (distanceToB > distanceToC and 2 or 3)

	-- Iteratively draw smaller triangles
	local currentRadius = radius
	repeat
		-- Calculate the slope for the smaller triangle
		local smallSlope = math.sqrt(
			((centroidY - verticesY[farthestVertexIndex]) / (centroidX - verticesX[farthestVertexIndex]))^2 + 1) * 
			((verticesX[farthestVertexIndex] - centroidX) / math.abs(verticesX[farthestVertexIndex] - centroidX))
		if verticesX[farthestVertexIndex] == centroidX then
			smallSlope = 99999 -- Handle vertical line case
		end

		-- Calculate the high point for the smaller triangle
		local highX = centroidX + currentRadius * (1 / smallSlope)
		local highY = centroidY + currentRadius * (((centroidY - verticesY[farthestVertexIndex]) / (centroidX - verticesX[farthestVertexIndex])) / smallSlope)

		-- Calculate the distances for the smaller triangle
		local distanceToOrigin = math.sqrt((verticesX[farthestVertexIndex] - originX)^2 + (verticesY[farthestVertexIndex] - originY)^2)
		local distanceToHighPoint = math.sqrt((highX - originX)^2 + (highY - originY)^2)

		-- Calculate the factor for the smaller triangle
		local factor = distanceToHighPoint / distanceToOrigin
		local newAX = (highX - factor * (verticesX[farthestVertexIndex] - verticesX[1]) + verticesX[1]) / 2
		local newAY = (highY - factor * (verticesY[farthestVertexIndex] - verticesY[1]) + verticesY[1]) / 2

		local newBX = (highX - factor * (verticesX[farthestVertexIndex] - verticesX[2]) + verticesX[2]) / 2
		local newBY = (highY - factor * (verticesY[farthestVertexIndex] - verticesY[2]) + verticesY[2]) / 2

		local newCX = (highX - factor * (verticesX[farthestVertexIndex] - verticesX[3]) + verticesX[3]) / 2
		local newCY = (highY - factor * (verticesY[farthestVertexIndex] - verticesY[3]) + verticesY[3]) / 2

		-- Update the radius for the next iteration
		currentRadius = currentRadius * (1 - ((centroidX - ((highX + verticesX[farthestVertexIndex]) / 2)) / (centroidX - verticesX[farthestVertexIndex])))

		-- Draw the smaller triangle outline
		self:drawTriangleOutline(newAX, newAY, newBX, newBY, newCX, newCY, currentRadius * 2 + 1)

		-- Update the centroid for the next iteration
		centroidX = farthestVertexIndex == 1 and newAX or (farthestVertexIndex == 2 and newBX or newCX)
		centroidY = farthestVertexIndex == 1 and newAY or (farthestVertexIndex == 2 and newBY or newCY)
	until currentRadius < 1.2
end

module = setmetatable(module, module)

return module