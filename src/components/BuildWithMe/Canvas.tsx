
import React, { useState, useEffect, useRef } from 'react';
import { CanvasState, ComponentType } from '@/pages/BuildWithMe';
import { X, Move } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CanvasProps {
  canvasState: CanvasState;
  setCanvasState: React.Dispatch<React.SetStateAction<CanvasState>>;
  onSelectComponent: (id: string | null) => void;
  onDeleteComponent: (id: string) => void;
  className?: string;
}

const Canvas = ({ 
  canvasState, 
  setCanvasState, 
  onSelectComponent, 
  onDeleteComponent,
  className 
}: CanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<'ne' | 'nw' | 'se' | 'sw' | null>(null);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  // Handle component selection
  const handleSelectComponent = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectComponent(id);
  };

  // Start dragging a component
  const handleDragStart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const component = canvasState.components.find(c => c.id === id);
    if (!component) return;
    
    setDraggingId(id);
    
    // Calculate the offset from the mouse position to the top-left corner
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    onSelectComponent(id);
  };

  // Handle resizing start
  const handleResizeStart = (
    id: string, 
    direction: 'ne' | 'nw' | 'se' | 'sw', 
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    
    const component = canvasState.components.find(c => c.id === id);
    if (!component) return;
    
    setResizing(true);
    setResizeDirection(direction);
    setResizeStart({ x: e.clientX, y: e.clientY });
    setInitialSize({
      width: component.properties.width,
      height: component.properties.height
    });
    setInitialPosition({
      x: component.properties.x,
      y: component.properties.y
    });
    
    onSelectComponent(id);
  };

  // Handle mouse move for dragging and resizing
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const canvasRect = canvasRef.current.getBoundingClientRect();
        
        // Handle dragging
        if (draggingId) {
          const component = canvasState.components.find(c => c.id === draggingId);
          if (!component) return;
          
          let newX = e.clientX - canvasRect.left - dragOffset.x;
          let newY = e.clientY - canvasRect.top - dragOffset.y;
          
          // Constrain to canvas bounds
          newX = Math.max(0, Math.min(newX, canvasState.canvasWidth - component.properties.width));
          newY = Math.max(0, Math.min(newY, canvasState.canvasHeight - component.properties.height));
          
          setCanvasState(prev => ({
            ...prev,
            components: prev.components.map(c => 
              c.id === draggingId 
                ? { ...c, properties: { ...c.properties, x: newX, y: newY } }
                : c
            )
          }));
        }
        
        // Handle resizing
        if (resizing && resizeDirection && canvasState.selectedId) {
          const component = canvasState.components.find(c => c.id === canvasState.selectedId);
          if (!component) return;
          
          const dx = e.clientX - resizeStart.x;
          const dy = e.clientY - resizeStart.y;
          
          let newWidth = initialSize.width;
          let newHeight = initialSize.height;
          let newX = initialPosition.x;
          let newY = initialPosition.y;
          
          // Apply resizing based on direction
          if (resizeDirection === 'se') {
            newWidth = Math.max(20, initialSize.width + dx);
            newHeight = Math.max(20, initialSize.height + dy);
          } else if (resizeDirection === 'sw') {
            newWidth = Math.max(20, initialSize.width - dx);
            newX = initialPosition.x + dx;
            newHeight = Math.max(20, initialSize.height + dy);
          } else if (resizeDirection === 'ne') {
            newWidth = Math.max(20, initialSize.width + dx);
            newHeight = Math.max(20, initialSize.height - dy);
            newY = initialPosition.y + dy;
          } else if (resizeDirection === 'nw') {
            newWidth = Math.max(20, initialSize.width - dx);
            newHeight = Math.max(20, initialSize.height - dy);
            newX = initialPosition.x + dx;
            newY = initialPosition.y + dy;
          }
          
          // Constrain to canvas bounds
          if (newX < 0) {
            newWidth += newX;
            newX = 0;
          }
          if (newY < 0) {
            newHeight += newY;
            newY = 0;
          }
          if (newX + newWidth > canvasState.canvasWidth) {
            newWidth = canvasState.canvasWidth - newX;
          }
          if (newY + newHeight > canvasState.canvasHeight) {
            newHeight = canvasState.canvasHeight - newY;
          }
          
          setCanvasState(prev => ({
            ...prev,
            components: prev.components.map(c => 
              c.id === canvasState.selectedId 
                ? { 
                    ...c, 
                    properties: { 
                      ...c.properties, 
                      width: newWidth, 
                      height: newHeight,
                      x: newX,
                      y: newY
                    } 
                  }
                : c
            )
          }));
        }
      }
    };
    
    const handleMouseUp = () => {
      setDraggingId(null);
      setResizing(false);
      setResizeDirection(null);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    draggingId, 
    dragOffset, 
    canvasState.components,
    canvasState.selectedId,
    resizing,
    resizeDirection,
    resizeStart,
    initialSize,
    initialPosition,
    canvasState.canvasWidth,
    canvasState.canvasHeight,
    setCanvasState,
  ]);

  // Clear selection when clicking on canvas
  const handleCanvasClick = () => {
    onSelectComponent(null);
  };

  // Render a component based on its type
  const renderComponent = (component: ComponentType) => {
    const { id, type, properties } = component;
    const isSelected = canvasState.selectedId === id;
    
    const commonProps = {
      style: {
        position: 'absolute' as const,
        left: properties.x,
        top: properties.y,
        width: properties.width,
        height: properties.height,
      },
      onClick: (e: React.MouseEvent) => handleSelectComponent(id, e),
      onMouseDown: (e: React.MouseEvent) => handleDragStart(id, e),
    };
    
    const componentStyle = {
      ...commonProps.style,
      color: properties.color,
      backgroundColor: properties.backgroundColor,
      borderRadius: `${properties.borderRadius}px`,
      fontSize: `${properties.fontSize}px`,
      padding: `${properties.padding}px`,
      border: type === 'input' ? `1px solid ${properties.borderColor}` : 'none',
    };

    // The wrapper for selection UI
    const SelectedWrapper = ({ children }: { children: React.ReactNode }) => (
      isSelected ? (
        <div 
          className="absolute"
          style={{ 
            left: properties.x - 2, 
            top: properties.y - 2,
            width: properties.width + 4,
            height: properties.height + 4,
            border: '2px solid #8b5cf6',
            borderRadius: `${properties.borderRadius + 2}px`,
            pointerEvents: 'none',
          }}
        >
          {/* Delete button */}
          <button
            className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center z-10"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteComponent(id);
            }}
            style={{ pointerEvents: 'auto' }}
          >
            <X className="h-3 w-3" />
          </button>
          
          {/* Move indicator */}
          <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center z-10 cursor-grab">
            <Move className="h-3 w-3" />
          </div>
          
          {/* Resize handles */}
          <div
            className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-purple-500 cursor-ne-resize z-20"
            style={{ transform: 'translate(50%, -50%)', pointerEvents: 'auto' }}
            onMouseDown={(e) => handleResizeStart(id, 'ne', e)}
          />
          <div
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-purple-500 cursor-se-resize z-20"
            style={{ transform: 'translate(50%, 50%)', pointerEvents: 'auto' }}
            onMouseDown={(e) => handleResizeStart(id, 'se', e)}
          />
          <div
            className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-white border-2 border-purple-500 cursor-sw-resize z-20"
            style={{ transform: 'translate(-50%, 50%)', pointerEvents: 'auto' }}
            onMouseDown={(e) => handleResizeStart(id, 'sw', e)}
          />
          <div
            className="absolute top-0 left-0 w-3 h-3 rounded-full bg-white border-2 border-purple-500 cursor-nw-resize z-20"
            style={{ transform: 'translate(-50%, -50%)', pointerEvents: 'auto' }}
            onMouseDown={(e) => handleResizeStart(id, 'nw', e)}
          />
          
          {children}
        </div>
      ) : (
        children
      )
    );
    
    switch(type) {
      case 'button':
        return (
          <SelectedWrapper key={id}>
            <button
              {...commonProps}
              className={cn(
                "cursor-move overflow-hidden text-ellipsis whitespace-nowrap",
                isSelected && "z-10"
              )}
              style={componentStyle}
            >
              {properties.text}
            </button>
          </SelectedWrapper>
        );
        
      case 'text':
        return (
          <SelectedWrapper key={id}>
            <p
              {...commonProps}
              className={cn(
                "cursor-move overflow-hidden break-words",
                isSelected && "z-10"
              )}
              style={componentStyle}
            >
              {properties.text}
            </p>
          </SelectedWrapper>
        );
        
      case 'input':
        return (
          <SelectedWrapper key={id}>
            <input
              {...commonProps}
              placeholder={properties.placeholder}
              className={cn(
                "cursor-move",
                isSelected && "z-10"
              )}
              style={componentStyle}
              readOnly
            />
          </SelectedWrapper>
        );
        
      case 'image':
        return (
          <SelectedWrapper key={id}>
            <img
              {...commonProps}
              src={properties.src}
              alt="Component"
              className={cn(
                "cursor-move object-cover",
                isSelected && "z-10"
              )}
              style={componentStyle}
            />
          </SelectedWrapper>
        );
        
      case 'container':
        return (
          <SelectedWrapper key={id}>
            <div
              {...commonProps}
              className={cn(
                "cursor-move border border-dashed border-gray-300",
                isSelected && "z-10"
              )}
              style={componentStyle}
            />
          </SelectedWrapper>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <div className="h-full relative overflow-hidden flex flex-col">
        <div className="bg-gray-100 p-2 text-xs font-mono text-gray-500 flex justify-between border-b border-gray-200">
          <span>Canvas ({canvasState.canvasWidth}x{canvasState.canvasHeight}px)</span>
          <span>{canvasState.components.length} components</span>
        </div>
        
        <div 
          ref={canvasRef}
          className="relative bg-white flex-grow overflow-auto"
          onClick={handleCanvasClick}
        >
          <div 
            className="relative mx-auto bg-white shadow-sm"
            style={{ 
              width: canvasState.canvasWidth,
              height: canvasState.canvasHeight,
            }}
          >
            {canvasState.components.map(renderComponent)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
