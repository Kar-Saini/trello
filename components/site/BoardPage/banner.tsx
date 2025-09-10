import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon, Sparkle } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <Card
      className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 
        max-w-xl w-full shadow-md rounded-2xl overflow-hidden"
    >
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-purple-200 p-3 rounded-full shadow-sm">
            <Sparkle className="text-purple-600 w-6 h-6" />
          </div>
        </div>
        <CardTitle className="text-purple-600 text-2xl font-bold">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4 px-6 pb-6">
        <p className="text-gray-700 text-lg">
          Ready to get organized? <br />
          Start creating your board today and bring ideas to life.
        </p>
        <Button
          className="mt-2 bg-purple-500 text-white px-5 py-2 rounded-lg font-medium
            hover:bg-purple-600 transition-colors shadow-sm hover:cursor-pointer "
        >
          <PlusIcon />
          Create Board
        </Button>
      </CardContent>
    </Card>
  );
};

export default Banner;
