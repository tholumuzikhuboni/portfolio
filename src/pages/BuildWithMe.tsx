
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Puzzle, PanelLeft, Palette, Layers, Code, Copy, Download, RefreshCw, Save } from "lucide-react";
import ComponentPalette from '@/components/BuildWithMe/ComponentPalette';
import Canvas from '@/components/BuildWithMe/Canvas';
import PropertyPanel from '@/components/BuildWithMe/PropertyPanel';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar'; // Import Navbar

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
  const [mobileView, setMobileView] = useState(false);
  
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

  // Function to toggle mobile view
  const toggleMobileView = () => {
    setCanvasState(prev => ({
      ...prev,
      canvasWidth: mobileView ? 375 : 768,
      canvasHeight: mobileView ? 667 : 1024,
    }));
    setMobileView(!mobileView);
    toast.info(mobileView ? "Mobile view enabled" : "Desktop view enabled");
  };

  // Function to handle responsive layout based on screen size
  const handlePanelToggle = (panel: 'component' | 'property') => {
    if (panel === 'component') {
      setShowComponentPanel(!showComponentPanel);
      // If on mobile and opening component panel, close property panel
      if (!showComponentPanel && window.innerWidth < 768) {
        setShowPropertyPanel(false);
      }
    } else {
      setShowPropertyPanel(!showPropertyPanel);
      // If on mobile and opening property panel, close component panel
      if (!showPropertyPanel && window.innerWidth < 768) {
        setShowComponentPanel(false);
      }
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <div className="min-h-screen pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto pt-24">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Puzzle className="h-6 w-6 text-code-purple" />
                <h1 className="text-2xl md:text-3xl font-bold font-mono gradient-text">
                  Build With Me
                </h1>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                Drag and drop components to create a simple web layout. Customize properties in the panel and export your design as code.
              </p>
            </div>
            
            {/* Toolbar - More mobile friendly */}
            <div className="flex flex-wrap gap-2 p-2 md:p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handlePanelToggle('component')}
                className={cn("gap-1 text-xs md:text-sm", !showComponentPanel && "opacity-50")}
              >
                <PanelLeft className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:inline">Components</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handlePanelToggle('property')}
                className={cn("gap-1 text-xs md:text-sm", !showPropertyPanel && "opacity-50")}
              >
                <Palette className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:inline">Properties</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleMobileView}
                className="gap-1 text-xs md:text-sm ml-auto md:ml-0"
              >
                <Layers className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden md:inline">{mobileView ? "Desktop View" : "Mobile View"}</span>
              </Button>
              <div className="hidden md:block flex-grow"></div>
              <Button variant="outline" size="sm" onClick={clearCanvas} className="gap-1 text-xs md:text-sm">
                <RefreshCw className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden md:inline">Clear</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={generateCode} 
                className="gap-1 text-xs md:text-sm bg-code-blue/10 text-code-blue hover:bg-code-blue/20 hover:text-code-blue"
              >
                <Code className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:inline">Export</span>
              </Button>
            </div>
            
            {/* Main Content - Responsive Layout */}
            <div className="flex flex-col lg:flex-row gap-4 h-[600px] md:h-[800px]">
              {/* Component Palette - Conditional rendering for mobile */}
              {showComponentPanel && (
                <ComponentPalette 
                  onAddComponent={addComponent}
                  className="w-full lg:w-64 flex-shrink-0 h-auto lg:h-full overflow-auto"
                />
              )}
              
              {/* Canvas - Always visible */}
              <Canvas 
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                onSelectComponent={handleSelectComponent}
                onDeleteComponent={handleDeleteComponent}
                className="flex-grow border border-gray-200 rounded-lg shadow-lg overflow-hidden h-full min-h-[400px] md:min-h-[500px] bg-white"
              />
              
              {/* Property Panel - Conditional rendering for mobile */}
              {showPropertyPanel && (
                <PropertyPanel 
                  selectedComponent={selectedComponent} 
                  onUpdateProperty={updateComponentProperty}
                  className="w-full lg:w-72 flex-shrink-0 h-auto lg:h-full overflow-auto"
                />
              )}
            </div>
            
            {/* Mobile-only Bottom Actions */}
            <div className="lg:hidden flex justify-center gap-2 pt-2">
              <Button size="sm" variant="ghost" onClick={clearCanvas} className="gap-2">
                <RefreshCw className="h-4 w-4" /> Clear
              </Button>
              <Button size="sm" variant="ghost" onClick={generateCode} className="gap-2 text-code-blue">
                <Code className="h-4 w-4" /> Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuildWithMe;
