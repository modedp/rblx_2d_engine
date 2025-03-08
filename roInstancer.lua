local roInstancer = nil;

function roInstancer(newInstance,parent) : {}
	local newInstance = Instance.new(newInstance,parent)
	local instObject = {}
	setmetatable(instObject,{
		__index = newInstance,
		__call = function(self,values)
			for key,value in pairs(values) do
				if newInstance[key] then 
					newInstance[key] = value
				end
			end
			return newInstance
		end,
	})
	return instObject
end

return roInstancer