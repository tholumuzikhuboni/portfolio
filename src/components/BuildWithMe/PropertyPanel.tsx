
import React from 'react';
import { ComponentType } from '@/pages/BuildWithMe';
import { Palette, Type, MoveHorizontal, Circle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface PropertyPanelProps {
  selectedComponent: ComponentType | null;
  onUpdateProperty: (id: string, propertyName: string, value: any) => void;
  className?: string;
}

const PropertyPanel = ({ selectedComponent, onUpdateProperty, className }: PropertyPanelProps) => {
  if (!selectedComponent) {
    return (
      <Card className={className}>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Palette className="h-4 w-4 text-code-purple" />
            Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-40 text-sm text-gray-500 font-mono">
            No component selected
          </div>
        </CardContent>
      </Card>
    );
  }

  const { id, type, properties } = selectedComponent;
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'text', e.target.value);
  };
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'color', e.target.value);
  };
  
  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'backgroundColor', e.target.value);
  };
  
  const handleBorderColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'borderColor', e.target.value);
  };
  
  const handleBorderRadiusChange = (value: number[]) => {
    onUpdateProperty(id, 'borderRadius', value[0]);
  };
  
  const handleFontSizeChange = (value: number[]) => {
    onUpdateProperty(id, 'fontSize', value[0]);
  };
  
  const handlePaddingChange = (value: number[]) => {
    onUpdateProperty(id, 'padding', value[0]);
  };
  
  const handlePlaceholderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'placeholder', e.target.value);
  };
  
  const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateProperty(id, 'src', e.target.value);
  };
  
  const handleSizeChange = (prop: 'width' | 'height', value: string) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      onUpdateProperty(id, prop, numValue);
    }
  };
  
  const handlePositionChange = (prop: 'x' | 'y', value: string) => {
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue >= 0) {
      onUpdateProperty(id, prop, numValue);
    }
  };

  return (
    <Card className={`${className} overflow-y-auto`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Palette className="h-4 w-4 text-code-purple" />
          {type.charAt(0).toUpperCase() + type.slice(1)} Properties
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Position and size */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium font-mono text-gray-500">
            <MoveHorizontal className="h-3.5 w-3.5" />
            Position & Size
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="x-position" className="text-xs">X Position</Label>
              <Input 
                id="x-position"
                type="number"
                value={properties.x}
                onChange={(e) => handlePositionChange('x', e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="y-position" className="text-xs">Y Position</Label>
              <Input 
                id="y-position"
                type="number"
                value={properties.y}
                onChange={(e) => handlePositionChange('y', e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="width" className="text-xs">Width</Label>
              <Input 
                id="width"
                type="number"
                value={properties.width}
                onChange={(e) => handleSizeChange('width', e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="height" className="text-xs">Height</Label>
              <Input 
                id="height"
                type="number"
                value={properties.height}
                onChange={(e) => handleSizeChange('height', e.target.value)}
                className="h-8 text-xs"
              />
            </div>
          </div>
        </div>
        
        {/* Content properties */}
        {(type === 'button' || type === 'text') && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium font-mono text-gray-500">
              <Type className="h-3.5 w-3.5" />
              Content
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="text-content" className="text-xs">Text</Label>
              <Input 
                id="text-content" 
                value={properties.text || ''} 
                onChange={handleTextChange}
                className="h-8 text-xs"
              />
            </div>
          </div>
        )}
        
        {/* Input placeholder */}
        {type === 'input' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium font-mono text-gray-500">
              <Type className="h-3.5 w-3.5" />
              Content
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="placeholder" className="text-xs">Placeholder</Label>
              <Input 
                id="placeholder" 
                value={properties.placeholder || ''} 
                onChange={handlePlaceholderChange}
                className="h-8 text-xs"
              />
            </div>
          </div>
        )}
        
        {/* Image source */}
        {type === 'image' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-medium font-mono text-gray-500">
              <Type className="h-3.5 w-3.5" />
              Content
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="src" className="text-xs">Image URL</Label>
              <Input 
                id="src" 
                value={properties.src || ''} 
                onChange={handleSrcChange}
                className="h-8 text-xs"
              />
            </div>
          </div>
        )}
        
        {/* Style properties */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-medium font-mono text-gray-500">
            <Palette className="h-3.5 w-3.5" />
            Style
          </div>
          
          {/* Colors */}
          {type !== 'image' && (
            <div className="space-y-1">
              <Label htmlFor="text-color" className="text-xs">Text Color</Label>
              <div className="flex">
                <Input 
                  id="text-color" 
                  type="color" 
                  value={properties.color || '#000000'} 
                  onChange={handleColorChange}
                  className="w-12 h-8 p-1"
                />
                <Input 
                  value={properties.color || '#000000'} 
                  onChange={handleColorChange}
                  className="flex-1 h-8 text-xs"
                />
              </div>
            </div>
          )}
          
          {/* Background color */}
          <div className="space-y-1">
            <Label htmlFor="bg-color" className="text-xs">Background Color</Label>
            <div className="flex">
              <Input 
                id="bg-color" 
                type="color" 
                value={properties.backgroundColor || 'transparent'} 
                onChange={handleBgColorChange}
                className="w-12 h-8 p-1"
              />
              <Input 
                value={properties.backgroundColor || 'transparent'} 
                onChange={handleBgColorChange}
                className="flex-1 h-8 text-xs"
              />
            </div>
          </div>
          
          {/* Border properties */}
          {type === 'input' && (
            <div className="space-y-1">
              <Label htmlFor="border-color" className="text-xs">Border Color</Label>
              <div className="flex">
                <Input 
                  id="border-color" 
                  type="color" 
                  value={properties.borderColor || '#e2e8f0'} 
                  onChange={handleBorderColorChange}
                  className="w-12 h-8 p-1"
                />
                <Input 
                  value={properties.borderColor || '#e2e8f0'} 
                  onChange={handleBorderColorChange}
                  className="flex-1 h-8 text-xs"
                />
              </div>
            </div>
          )}
          
          {/* Border radius */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="border-radius" className="text-xs flex items-center gap-1">
                <Circle className="h-3.5 w-3.5" />
                Border Radius
              </Label>
              <span className="text-xs font-mono text-gray-500">{properties.borderRadius}px</span>
            </div>
            <Slider 
              id="border-radius"
              min={0} 
              max={50} 
              step={1} 
              value={[properties.borderRadius || 0]} 
              onValueChange={handleBorderRadiusChange}
            />
          </div>
          
          {/* Font size */}
          {type !== 'image' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="font-size" className="text-xs flex items-center gap-1">
                  <Type className="h-3.5 w-3.5" />
                  Font Size
                </Label>
                <span className="text-xs font-mono text-gray-500">{properties.fontSize}px</span>
              </div>
              <Slider 
                id="font-size"
                min={8} 
                max={48} 
                step={1} 
                value={[properties.fontSize || 16]} 
                onValueChange={handleFontSizeChange}
              />
            </div>
          )}
          
          {/* Padding */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="padding" className="text-xs flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Padding
              </Label>
              <span className="text-xs font-mono text-gray-500">{properties.padding}px</span>
            </div>
            <Slider 
              id="padding"
              min={0} 
              max={40} 
              step={1} 
              value={[properties.padding || 8]} 
              onValueChange={handlePaddingChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyPanel;
