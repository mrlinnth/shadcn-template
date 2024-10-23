import { AccordionDemo } from "@/components/demo/accordion-demo";
import { AlertDemo } from "@/components/demo/alert-demo";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-flow-row gap-4 auto-rows-max">
        <Button>A Button</Button>
        <AccordionDemo />
        <AlertDemo />
      </div>
    </div>
  );
}

export default App;
