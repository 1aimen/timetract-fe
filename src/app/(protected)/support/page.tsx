"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import TextArea from "@/components/form/input/TextArea";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import Button from "@/components/ui/button/Button";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

const options = [
  { value: "marketing", label: "Marketing" },
  { value: "template", label: "Template" },
  { value: "development", label: "Development" },
];

const handleSelectChange = (value: string) => {
  console.log("Selected value:", value);
};

export default function SupportPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Support" />

      <div className=" rounded-2xl border border-gray-200 bg-white px-6 py-8 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side - form */}
          <div className="space-y-6 max-w-[630px]">
            {/* Subject */}
            <div>
              <Label>Subject</Label>
              <div className="relative mt-2">
                <Select
                  options={options}
                  placeholder="Select a subject"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>

            {/* Priority */}
            <div>
              <Label>Priority</Label>
              <div className="relative mt-2">
                <Select
                  options={[
                    { value: "low", label: "Low" },
                    { value: "medium", label: "Medium" },
                    { value: "high", label: "High" },
                  ]}
                  placeholder="Select priority"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                  <ChevronDownIcon />
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              <TextArea rows={6} placeholder="Describe your issue..." />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="w-full sm:w-auto">Submit Request</Button>
            </div>
          </div>

          {/* Right side - dropzone */}
          <div className="flex justify-center items-start mt-4 lg:mt-0">
            <DropzoneComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
