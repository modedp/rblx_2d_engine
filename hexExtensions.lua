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

return module
