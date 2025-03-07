
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Puzzle, PanelLeft, Palette, Layers, Code, Copy, Download, RefreshCw, Save } from "lucide-react";
import ComponentPalette from '@/components/BuildWithMe/ComponentPalette';
import Canvas from '@/components/BuildWithMe/Canvas';
import PropertyPanel from '@/components/BuildWithMe/PropertyPanel';
import { cn } from '@/lib/utils';

export type ComponentType = {
  id: string;
  type: 'button' | 'text' | 'input' | 'card' | 'image' | 'container';
  properties: {
    x: number;
    y: number;
    width: number;
    height: number;
    text?: string;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderRadius?: number;
    fontSize?: number;
    padding?: number;
    placeholder?: string;
    src?: string;
  };
};

export type CanvasState = {
  components: ComponentType[];
  selectedId: string | null;
  canvasWidth: number;
  canvasHeight: number;
};

const BuildWithMe = () => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    components: [],
    selectedId: null,
    canvasWidth: 375, // Mobile first
    canvasHeight: 667,
  });
  
  const [showComponentPanel, setShowComponentPanel] = useState(true);
  const [showPropertyPanel, setShowPropertyPanel] = useState(true);
  
  const addComponent = (type: ComponentType['type']) => {
    const newId = `component-${Date.now()}`;
    const defaultX = canvasState.canvasWidth / 2 - 75;
    const defaultY = canvasState.canvasHeight / 2 - 25;
    
    const newComponent: ComponentType = {
      id: newId,
      type,
      properties: {
        x: defaultX,
        y: defaultY,
        width: 150,
        height: 50,
        backgroundColor: type === 'button' ? '#8b5cf6' : 'transparent',
        color: type === 'button' ? '#ffffff' : '#000000',
        borderColor: type === 'input' ? '#e2e8f0' : 'transparent',
        borderRadius: type === 'button' ? 8 : 0,
        fontSize: 16,
        padding: 8,
        text: type === 'button' ? 'Button' : type === 'text' ? 'Text element' : '',
        placeholder: type === 'input' ? 'Enter text...' : '',
        src: type === 'image' ? '/placeholder.svg' : '',
      }
    };
    
    setCanvasState(prev => ({
      ...prev,
      components: [...prev.components, newComponent],
      selectedId: newId,
    }));
    
    toast.success(`${type} component added`);
  };
  
  const updateComponentProperty = (id: string, propertyName: string, value: any) => {
    setCanvasState(prev => ({
      ...prev,
      components: prev.components.map(comp => 
        comp.id === id 
          ? { ...comp, properties: { ...comp.properties, [propertyName]: value } }
          : comp
      )
    }));
  };
  
  const handleSelectComponent = (id: string | null) => {
    setCanvasState(prev => ({
      ...prev,
      selectedId: id,
    }));
  };
  
  const handleDeleteComponent = (id: string) => {
    setCanvasState(prev => ({
      ...prev,
      components: prev.components.filter(comp => comp.id !== id),
      selectedId: null,
    }));
    toast.info("Component deleted");
  };
  
  const clearCanvas = () => {
    if (canvasState.components.length === 0) {
      toast.info("Canvas is already empty");
      return;
    }
    
    setCanvasState(prev => ({
      ...prev,
      components: [],
      selectedId: null,
    }));
    toast.success("Canvas cleared");
  };

  const generateCode = () => {
    // Simple code generation for demo purposes
    let code = `// React component generated from Build With Me\nimport React from 'react';\n\nexport default function MyComponent() {\n  return (\n    <div style={{ position: 'relative', width: '${canvasState.canvasWidth}px', height: '${canvasState.canvasHeight}px' }}>\n`;
    
    canvasState.components.forEach(comp => {
      const { properties, type } = comp;
      
      if (type === 'button') {
        code += `      <button\n        style={{\n          position: 'absolute',\n          left: ${properties.x}px,\n          top: ${properties.y}px,\n          width: ${properties.width}px,\n          height: ${properties.height}px,\n          backgroundColor: '${properties.backgroundColor}',\n          color: '${properties.color}',\n          borderRadius: '${properties.borderRadius}px',\n          fontSize: '${properties.fontSize}px',\n          padding: '${properties.padding}px',\n          border: 'none',\n        }}\n      >\n        ${properties.text}\n      </button>\n`;
      } else if (type === 'text') {
        code += `      <p\n        style={{\n          position: 'absolute',\n          left: ${properties.x}px,\n          top: ${properties.y}px,\n          width: ${properties.width}px,\n          color: '${properties.color}',\n          fontSize: '${properties.fontSize}px',\n        }}\n      >\n        ${properties.text}\n      </p>\n`;
      } else if (type === 'input') {
        code += `      <input\n        placeholder="${properties.placeholder}"\n        style={{\n          position: 'absolute',\n          left: ${properties.x}px,\n          top: ${properties.y}px,\n          width: ${properties.width}px,\n          height: ${properties.height}px,\n          borderColor: '${properties.borderColor}',\n          borderWidth: '1px',\n          borderStyle: 'solid',\n          borderRadius: '${properties.borderRadius}px',\n          padding: '${properties.padding}px',\n        }}\n      />\n`;
      } else if (type === 'image') {
        code += `      <img\n        src="${properties.src}"\n        alt="Image"\n        style={{\n          position: 'absolute',\n          left: ${properties.x}px,\n          top: ${properties.y}px,\n          width: ${properties.width}px,\n          height: ${properties.height}px,\n          objectFit: 'cover',\n        }}\n      />\n`;
      }
    });
    
    code += `    </div>\n  );\n}\n`;
    
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const selectedComponent = canvasState.selectedId 
    ? canvasState.components.find(c => c.id === canvasState.selectedId) 
    : null;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Puzzle className="h-6 w-6 text-code-purple" />
              <h1 className="text-3xl font-bold font-mono gradient-text">
                Build With Me
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Drag and drop components to create a simple web layout. Customize properties in the panel and export your design as code.
            </p>
          </div>
          
          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowComponentPanel(!showComponentPanel)}
              className={cn("gap-2", !showComponentPanel && "opacity-50")}
            >
              <PanelLeft className="h-4 w-4" />
              Components
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowPropertyPanel(!showPropertyPanel)}
              className={cn("gap-2", !showPropertyPanel && "opacity-50")}
            >
              <Palette className="h-4 w-4" />
              Properties
            </Button>
            <div className="flex-grow"></div>
            <Button variant="outline" size="sm" onClick={clearCanvas} className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Clear
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={generateCode} 
              className="gap-2 bg-code-blue/10 text-code-blue hover:bg-code-blue/20 hover:text-code-blue"
            >
              <Code className="h-4 w-4" />
              Export Code
            </Button>
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-4 h-[800px]">
            {/* Component Palette */}
            {showComponentPanel && (
              <ComponentPalette 
                onAddComponent={addComponent}
                className="w-full md:w-64 flex-shrink-0"
              />
            )}
            
            {/* Canvas */}
            <Canvas 
              canvasState={canvasState}
              setCanvasState={setCanvasState}
              onSelectComponent={handleSelectComponent}
              onDeleteComponent={handleDeleteComponent}
              className="flex-grow border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full min-h-[500px] bg-white"
            />
            
            {/* Property Panel */}
            {showPropertyPanel && (
              <PropertyPanel 
                selectedComponent={selectedComponent} 
                onUpdateProperty={updateComponentProperty}
                className="w-full md:w-72 flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildWithMe;
