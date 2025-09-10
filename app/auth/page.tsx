"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import React from "react";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br ">
      <Card className="w-[400px] shadow-2xl rounded-2xl border border-neutral-200">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center text-3xl font-bold ">
            Trello
          </CardTitle>
          <Separator />
        </CardHeader>

        <CardContent className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="someone@example.com"
              className="rounded-lg border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              className="rounded-lg border-gray-300"
            />
          </div>

          <Button className="w-full " variant={"outline"}>
            Submit
          </Button>

          <div className="text-sm text-center text-gray-600">
            <p>
              Don’t have an account?{" "}
              <span className="hover:underline">Sign up</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
