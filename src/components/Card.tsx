"use client";
import { useMemo, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { toast } from "sonner";
import Input from "./Input";

export type Template = {
  title: string;
  preDefined?: Record<string, string>;
  template: string;
};

export type CardProps = {
  template: string;
  title: string;
  preDefined?: Record<string, string>;
};

function flattenObject(data: object, parentKey = "") {
  const acc: Record<string, unknown> = {};
  Object.entries(data).forEach(([key, value]) => {
    const nestedKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenObject(value, nestedKey));
      return;
    }
    acc[nestedKey] = value;
  });
  return acc;
}

const VARIABLE_REGEX = /{{(.*?)}}/g;

function replaceVariables(
  template: string,
  variableRecord: Record<string, unknown>
) {
  const flattenVariables = flattenObject(variableRecord);
  // Replace each placeholder in the template with the corresponding value from variables
  const result = template.replace(VARIABLE_REGEX, (match, key) => {
    // Remove leading and trailing spaces from the key
    key = key.trim();
    // If the key exists in variables, return its value; otherwise, return the original placeholder
    const replace =
      flattenVariables[key] !== undefined ? flattenVariables[key] : match;
    return replace + "";
  });
  return result;
}

function Card({ template, title, preDefined }: CardProps) {
  const [record, setRecord] = useState(preDefined || {});
  console.log(record);
  const variablesArr = useMemo(() => {
    const variables = new Set<string>();
    const matches = template.match(VARIABLE_REGEX);
    matches &&
      Object.entries(matches).forEach((p) => {
        variables.add(p[1].slice(2, -2));
      });

    return Array.from(variables);
  }, [template]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(replaceVariables(template, record));
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Can not copy text");
    }
  };
  return (
    <div className="max-w-md p-4 space-y-2 border shadow rounded-lg text-sm">
      <h2 className="font-semibold text-lg">{title}</h2>
      <div className="space-y-2 pb-3">
        {variablesArr.map((variable, i) => {
          return (
            <Input
              variable={variable}
              key={variable}
              value={record[variable] || ""}
              onTextChange={(value) =>
                setRecord((curr) => ({
                  ...curr,
                  [variable]: (value ? value : undefined) as string,
                }))
              }
            />
          );
        })}
      </div>
      <>
        <pre className="text-wrap">
          <code>{replaceVariables(template, record)}</code>
        </pre>
      </>

      <button className="block ml-auto" onClick={handleCopy}>
        <MdContentCopy />
      </button>
    </div>
  );
}

export default Card;
