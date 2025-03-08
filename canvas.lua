local module = {}
local ctxBuilder = require(script.ctxBuilder)
local roInstancer = require(script.roInstancer);

function module:retrievectx()
	return ctxBuilder(self)
end

function module:getCurrentScreen()
	if self.CurrentScreen then 
		return self.CurrentScreen 
	end
	
	self.CurrentScreen = self:retrievectx()
	return self:getCurrentScreen()
end

return module
