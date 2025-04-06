import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";

const examples = ["components", "props", "jsx", "state"];

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    
      <Section title="Examples" id="examples">
        <menu>
        {examples.map((example) => {
          return (
            <TabButton
              key={example}
              isSelected={selectedTab === example}
              onSelect={() => handleSelect(example)}
            >
              {example.charAt(0).toUpperCase() + example.slice(1)}
            </TabButton>
          );
        })}
      </menu>
      <div id="tab-content">
        {selectedTab.length ? (
          <>
            {" "}
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>{" "}
          </>
        ) : (
          <p>Please select a topic.</p>
        )}
      </div>
      </Section>
  );
}
