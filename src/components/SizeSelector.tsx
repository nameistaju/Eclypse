
import { useState } from "react";
import { Button } from "@/components/ui/button";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Select a size</h3>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <Button
            key={size}
            variant={selectedSize === size ? "default" : "outline"}
            className={`h-12 ${
              selectedSize === size 
                ? "bg-black text-white" 
                : "bg-white text-black border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
      <p className="text-sm text-gray-600">Size chart</p>
    </div>
  );
};

export default SizeSelector;
