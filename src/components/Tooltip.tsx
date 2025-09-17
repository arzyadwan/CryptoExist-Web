// src/components/Tooltip.tsx

'use client';

import { useState, useRef, cloneElement, ReactElement, Ref } from 'react';
import {
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
  FloatingPortal,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

type TooltipProps = {
  content: string;
  children: ReactElement;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip(),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);
  
  // Perbaikan type-safety, menghindari 'any'
  const childRef = (children as { ref?: Ref<HTMLElement> }).ref;
  const ref = useMergeRefs([refs.setReference, childRef]);

  return (
    <>
      {/* Perbaikan untuk error spread type */}
      {cloneElement(children, getReferenceProps({ ref, ...(children.props || {}) }))}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-50 bg-neutral-dark text-text-primary text-sm px-3 py-2 rounded-md border border-border-color shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
            >
              {content}
              <div
                ref={arrowRef}
                className="absolute bg-neutral-dark h-2 w-2 rotate-45"
                style={{
                  bottom: -4,
                  left: context.middlewareData.arrow?.x,
                  right: '',
                  top: '',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};