import React, { useState } from "react";

const DynamicColorGenerator = () => {
  const [color, setColor] = useState("#3498db");
  const [copied, setCopied] = useState(false);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.whiteBox}>
        <h1 style={styles.title}>Dynamic Color Generator</h1>
        <div style={{ ...styles.colorBox, backgroundColor: color }}></div>
        <div style={styles.colorCode}>{color}</div>
        <div style={styles.buttonGroup}>
          <button onClick={generateRandomColor} style={styles.buttonPrimary}>
            Generate Color
          </button>
          <button onClick={copyToClipboard} style={styles.buttonSecondary}>
            Copy Color Code
          </button>
        </div>
        {copied && <div style={styles.copiedText}>✅ Copied to clipboard!</div>}
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(135deg, #1e1e2f, #1a2a3a)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  whiteBox: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "350px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  colorBox: {
    width: "220px",
    height: "220px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease",
  },
  colorCode: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#444",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
  buttonSecondary: {
    backgroundColor: "#f1f1f1",
    color: "#333",
    padding: "10px 16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  },
  copiedText: {
    color: "green",
    fontWeight: "500",
    fontSize: "14px",
  },
};

export default DynamicColorGenerator;