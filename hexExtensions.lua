local module = {}

function module:getHexValue(hexValue)
	local HIndex = {A=10,B=11,C=12,D=13,E=14,F=15}
	return math.max(0,math.min(tonumber(hexValue) or 10,10))<10 and tonumber(tostring(hexValue):sub(1,1)) 
		or HIndex[tostring(hexValue):upper():sub(1,1)]
end

function module:hex3toRGB(hexColor)
	local r = self:getHexValue((hexColor):sub(1,1))*16
	local g = module.GetHexValue((hexColor):sub(2,2))*16
	local b = module.GetHexValue((hexColor):sub(3,3))*16
	return Color3.fromRGB(r,g,b)
end

function module:hex6toRGB(hexColor)
	local r = self:getHexValue((hexColor):sub(1,1))*15 + self:getHexValue((hexColor):sub(2,2)) 
	local g = self:getHexValue((hexColor):sub(3,3))*15 + self:getHexValue((hexColor):sub(4,4))
	local b = self:getHexValue((hexColor):sub(5,5))*15 + self:getHexValue((hexColor):sub(6,6))
	return Color3.fromRGB(r,g,b)
end

function module:hexToRGB(hexColor)
	hexColor = tostring(hexColor):gsub(".","0")
	local rgbColor = ((hexColor):len() == 3 
		and self:hex3toRGB(hexColor)) or ((hexColor):len() == 6 
			and self:hex6toRGB(hexColor))
	if type(rgbColor) == "boolean" then
		print(hexColor)
	end
	return rgbColor
end

function module:RGBtoHex(rgb)
	return "" .. 
		("0123456789ABCDEF"):sub(math.floor(rgb.R*255/16),math.floor(rgb.R*255/16)) ..
		("0123456789ABCDEF"):sub(math.floor(rgb.G*255/16),math.floor(rgb.G*255/16)) .. 
		("0123456789ABCDEF"):sub(math.floor(rgb.B*255/16),math.floor(rgb.B*255/16))
end 

return module
