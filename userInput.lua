--[[
This script acts as a comprehensive wrapper for user inputs, making it possible to bind to actions instead of the input themselves, and
making it easier for players and developers to change their inputs

Actions can be modified in the InputSettings script
]]
local InputManager = {}

-- SERVICES --
local UserInputService = game:GetService("UserInputService")
local RunService = game:GetService("RunService")
local GuiService = game:GetService("GuiService")

-- REQUIRES --
local InputSettings = {
	
	--Inputs
	Actions = {
		Mining = {
			SelectTarget = "SelectTarget"
		}
	},
	
	ActionInputs = {
		Mining = {
			SelectTarget = {Enum.UserInputType.MouseButton1, Enum.KeyCode.ButtonY}
		}
	}
	--
}

local ControlModule = require(game.Players.LocalPlayer:WaitForChild("PlayerScripts"):WaitForChild("PlayerModule"):WaitForChild("ControlModule"))

-- VARIABLES --
local ActionEvents = {}
local ActiveActions = {}

local ActionsPressed = {}
local ActionsReleased = {}

InputManager.InputType = {
	MouseKeyboard = "MouseKeyboard",
	Gamepad = "Gamepad",
	Touch = "Touch"
}

ActiveInputLayout = InputManager.InputType.MouseKeyboard

local ActiveInputTypeChangedEvent = Instance.new("BindableEvent")
InputManager.ActiveInputTypeChanged = ActiveInputTypeChangedEvent.Event


-- INITIALIZE --
function Initialize()
	
	if UserInputService.MouseEnabled then
		ActiveInputLayout = InputManager.InputType.MouseKeyboard
	elseif #UserInputService:GetConnectedGamepads() > 0 then
		ActiveInputLayout = InputManager.InputType.Gamepad
	else
		ActiveInputLayout = InputManager.InputType.Touch
	end
	
	UserInputService.MouseIconEnabled = true --Temporarily disabled so I can test market GUI -K4
	
	--Setup the action tables
	for _, ActionGroup in pairs(InputSettings.ActionInputs) do
		for ActionName, InputGroup in pairs(ActionGroup) do
			ActionEvents[ActionName.."Began"] = Instance.new("BindableEvent")
			ActionEvents[ActionName.."Ended"] = Instance.new("BindableEvent")
			ActiveActions[ActionName] = nil
		end
	end
	--
	
	--Input began management
	UserInputService.InputBegan:Connect(function(input, processed)
		for _, ActionGroup in pairs(InputSettings.ActionInputs) do
			for ActionName, InputGroup in pairs(ActionGroup) do
				for _, ConnectedInput in pairs(InputGroup) do
					--Check if the given input is a recorded action
					if input.KeyCode == ConnectedInput or input.UserInputType == ConnectedInput then
						-- Action found
						ActionEvents[ActionName.."Began"]:Fire(input, processed)
						ActionsPressed[ActionName] = 0
						ActiveActions[ActionName] = true
					end
				end
			end
		end
	end)
	--
	
	--Input ended management
	UserInputService.InputEnded:Connect(function(input, processed)
		for _, ActionGroup in pairs(InputSettings.ActionInputs) do
			for ActionName, InputGroup in pairs(ActionGroup) do
				for _, ConnectedInput in pairs(InputGroup) do
					--Check if the given input is a recorded action
					if input.KeyCode == ConnectedInput or input.UserInputType == ConnectedInput then
						-- Action found
						ActionEvents[ActionName.."Ended"]:Fire(input, processed)
						ActionsReleased[ActionName] = 0
						ActiveActions[ActionName] = nil
					end
				end
			end
		end
	end)
	--
	
	--Input changed
	UserInputService.LastInputTypeChanged:Connect(function(inputType)
		local previousLayout = ActiveInputLayout
		if string.find(inputType.Name, "Gamepad") ~= nil then
			ActiveInputLayout = InputManager.InputType.Gamepad
		elseif inputType.Name == "Keyboard" or string.find(inputType.Name, "Mouse") ~= nil then
			ActiveInputLayout = InputManager.InputType.MouseKeyboard
		elseif inputType.Name == "Touch" then
			ActiveInputLayout = InputManager.InputType.Touch
		end
		if ActiveInputLayout ~= previousLayout then
			ActiveInputTypeChangedEvent:Fire(ActiveInputLayout, previousLayout)
		end
	end)
	--
	
	--Input booleans reset
	RunService:BindToRenderStep("InputManagerBooleans", Enum.RenderPriority.First.Value, function()
		for key,value in pairs(ActionsPressed) do
			if value >= 1 then
				ActionsPressed[key] = nil
			end
		end 
		
		for key,value in pairs(ActionsReleased) do
			if value >= 1 then
				ActionsReleased[key] = nil
			end
		end
		
		for key,_ in pairs(ActionsPressed) do
			ActionsPressed[key] += 1
		end 
		for key,_ in pairs(ActionsReleased) do
			ActionsReleased[key] += 1
		end
	end)
	--
	
end

-- METHODS --
function InputManager.GetActionBeganSignal(ActionName)
	if ActionEvents[ActionName.."Began"] == nil then
		warn("INPUTMANAGER WARNING: an attempt was made to get the began action event", ActionName, ". This action was not found. (Typo?)")
		return
	end
	
	return ActionEvents[ActionName.."Began"].Event
end

function InputManager.GetActionEndedSignal(ActionName)
	if ActionEvents[ActionName.."Ended"] == nil then
		warn("INPUTMANAGER WARNING: an attempt was made to get the ended action event", ActionName, ". This action was not found. (Typo?)")
		return
	end
	
	return ActionEvents[ActionName.."Ended"].Event
end

function InputManager.GetActionDown(ActionName)
	return ActionsPressed[ActionName] ~= nil
end

function InputManager.GetActionHeld(ActionName)
	return ActiveActions[ActionName] ~= nil
end

function InputManager.GetActionUp(ActionName)
	return ActionsReleased[ActionName] ~= nil
end

function InputManager.GetMouseDelta()
	return UserInputService:GetMouseDelta()
end

function InputManager.GetInsetMouseLocation()
	local inset = GuiService:GetGuiInset()
	return UserInputService:GetMouseLocation() - inset
end

function InputManager.SetDefaultControlsEnabled(enabled)
	local ContextActionService = game:GetService("ContextActionService")
	local FREEZE_ACTION = "freezeMovement"
	
	ContextActionService:UnbindAction(FREEZE_ACTION)
	
	if not enabled then
		ContextActionService:BindAction(
			FREEZE_ACTION,
			function()
				return Enum.ContextActionResult.Sink -- need to explicitly return this
			end,
			false,
			unpack(Enum.PlayerActions:GetEnumItems())
		)
	end
end

function InputManager.SetMouseEnabled(enabled)
	game.Players.LocalPlayer.CameraMode = enabled and Enum.CameraMode.Classic or Enum.CameraMode.LockFirstPerson
	UserInputService.MouseBehavior = enabled and Enum.MouseBehavior.Default or Enum.MouseBehavior.LockCenter
	UserInputService.MouseIconEnabled = enabled			-- Same as above -K4
end

function InputManager.GetActiveInputLayout()
	return ActiveInputLayout
end

Initialize()
return InputManager
