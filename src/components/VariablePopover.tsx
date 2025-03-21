import React, { useState } from "react";
import styles from "../styles/editor.module.css";
import { VARIABLES } from "../utils/variables";

interface VariablePopoverProps {
  onSelect: (variable: string, fallback?: string) => void;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

const VariablePopover: React.FC<VariablePopoverProps> = ({ onSelect, position, onClose }) => {
  const [selectedVariable, setSelectedVariable] = useState<string | null>(null);
  const [fallbackValue, setFallbackValue] = useState<string>("");

  if (!position) return null;

  return (
    <div className={styles.popover} style={{ top: position.y - 55, left: position.x }}>
      <h4>Select a Variable</h4>
      {VARIABLES.map((variable) => (
        <div
          key={variable.id}
          className={styles.popoverItem}
          onClick={() => setSelectedVariable(variable.value)}
        >
          <span className={styles.variableToken}>{variable.label}</span>
        </div>
      ))}

      {selectedVariable && (
        <div className={styles.fallbackContainer}>
          <label>Fallback:</label>
          <input
            type="text"
            value={fallbackValue}
            onChange={(e) => setFallbackValue(e.target.value)}
            placeholder="Enter fallback value..."
          />
          <button onClick={() => onSelect(selectedVariable, fallbackValue)}>Insert</button>
        </div>
      )}

      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </div>
  );
};

export default VariablePopover;