// Copyright 2020 Google LLC

struct VSOutput
{
	[[vk::location(0)]]float3 Color : COLOR0;
	[[vk::location(1)]]float2 UV : TEXCOORD0;
};

float4 main(VSOutput input) : SV_TARGET
{
	return float4(input.Color, 1);
}