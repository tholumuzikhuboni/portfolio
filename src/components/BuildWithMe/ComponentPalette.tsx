
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Square, 
  Type, 
  FormInput, 
  Image as ImageIcon,
  LayoutGrid,
  MousePointer,
} from "lucide-react";
import { ComponentType } from '@/pages/BuildWithMe';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComponentPaletteProps {
  onAddComponent: (type: ComponentType['type']) => void;
  className?: string;
}

const ComponentPalette = ({ onAddComponent, className }: ComponentPaletteProps) => {
  const componentTypes = [
    { type: 'button' as const, icon: <Square className="h-4 w-4" />, label: 'Button' },
    { type: 'text' as const, icon: <Type className="h-4 w-4" />, label: 'Text' },
    { type: 'input' as const, icon: <FormInput className="h-4 w-4" />, label: 'Input' },
    { type: 'image' as const, icon: <ImageIcon className="h-4 w-4" />, label: 'Image' },
    { type: 'container' as const, icon: <LayoutGrid className="h-4 w-4" />, label: 'Container' },
  ];

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <MousePointer className="h-4 w-4 text-code-purple" />
          Components
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        {componentTypes.map((component) => (
          <Button
            key={component.type}
            variant="outline"
            size="sm"
            onClick={() => onAddComponent(component.type)}
            className="flex flex-col items-center justify-center h-20 gap-2 hover:bg-code-purple/5 hover:border-code-purple/30 transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-code-purple/10">
              {component.icon}
            </div>
            <span className="text-xs font-mono">{component.label}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComponentPalette;
